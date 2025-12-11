'use client';

import { useState } from 'react';
import styles from './ChatAssistant.module.css';
import ChatInput from './ChatInput';
import { useChat } from '../contexts/ChatContext';

const SUGGESTED_QUESTIONS = [
  'Стек технологий',
  'Что делал на последнем месте работы?',
  'Пример интересной задачи',
];

export default function ChatAssistant() {
  const [inputValue, setInputValue] = useState('');
  const { openModal } = useChat();

  const handleQuestionClick = (text: string) => {
    setInputValue(text);
  };

  const handleOpenChat = () => {
    if (inputValue.trim()) {
      openModal(inputValue);
    }
  };

  const handleEnter = () => {
    if (inputValue.trim()) {
      openModal(inputValue);
    }
  };

  return (
    <div className={styles.container}>
      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onEnter={handleEnter}
        onRightIconClick={handleOpenChat}
        placeholder='Спроси меня…'
        showLeftIcon={false}
        showRightIcon={true}
      />

      {/* Suggested questions blocks */}
      <div className={styles.questionsContainer}>
        {SUGGESTED_QUESTIONS.map((question, index) => (
          <div
            key={index}
            className={`text-body text-white cursor-pointer ${styles.questionBlock}`}
            onClick={() => handleQuestionClick(question)}
          >
            {question}
          </div>
        ))}
      </div>
    </div>
  );
}
