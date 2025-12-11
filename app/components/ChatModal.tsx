'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ChatModal.module.css';
import ChatInput from './ChatInput';
import { sendMessage } from '../lib/chatService';
import {
  getOrCreateSessionId,
  saveChatMessages,
  loadChatMessages,
} from '../lib/sessionStorage';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export default function ChatModal({
  isOpen,
  onClose,
  initialMessage = '',
}: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = getOrCreateSessionId();

  // Загружаем сохраненные сообщения при открытии модалки
  useEffect(() => {
    if (isOpen) {
      const savedMessages = loadChatMessages();
      setMessages(savedMessages);

      // Если есть начальное сообщение и его еще нет в сохраненных
      if (initialMessage && !savedMessages.some((m) => m.text === initialMessage && m.isUser)) {
        const userMessage: Message = {
          id: Date.now().toString(),
          text: initialMessage,
          isUser: true,
        };
        const newMessages = [...savedMessages, userMessage];
        setMessages(newMessages);
        saveChatMessages(newMessages);

        // Отправляем сообщение агенту
        handleSendToAgent(initialMessage, newMessages);
      }
    } else {
      setInputValue('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, initialMessage]);

  // Блокируем скролл страницы при открытой модалке
  useEffect(() => {
    if (isOpen) {
      // Сохраняем текущую позицию скролла
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        // Восстанавливаем скролл при закрытии
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Прокрутка к последнему сообщению
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendToAgent = async (
    messageText: string,
    currentMessages: Message[]
  ) => {
    setIsLoading(true);
    try {
      const response = await sendMessage(messageText, sessionId);
      const agentMessage: Message = {
        id: Date.now().toString(),
        text: response,
        isUser: false,
      };
      const updatedMessages = [...currentMessages, agentMessage];
      setMessages(updatedMessages);
      saveChatMessages(updatedMessages);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: error instanceof Error ? error.message : 'Произошла ошибка при отправке сообщения.',
        isUser: false,
      };
      const updatedMessages = [...currentMessages, errorMessage];
      setMessages(updatedMessages);
      saveChatMessages(updatedMessages);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    saveChatMessages(newMessages);
    setInputValue('');

    // Отправляем сообщение агенту
    await handleSendToAgent(inputValue, newMessages);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header with title and close button */}
        <div className={styles.header}>
          <h2 className={`text-body ${styles.title}`}>AI assist</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        {/* Messages container */}
        <div className={styles.messagesContainer}>
          {messages.length === 0 ? (
            <div className={styles.emptyState}>
              Начните диалог, задав вопрос
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${
                  message.isUser ? styles.messageUser : styles.messageAgent
                }`}
              >
                <div className={styles.messageText}>{message.text}</div>
              </div>
            ))
          )}
        </div>

        {/* Input at the bottom */}
        <div className={styles.inputContainer}>
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onEnter={handleSendMessage}
            placeholder='Спроси меня…'
            showLeftIcon={false}
            showRightIcon={false}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

