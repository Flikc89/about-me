'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ChatContextType {
  isModalOpen: boolean;
  openModal: (initialMessage?: string) => void;
  closeModal: () => void;
  initialMessage: string;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState('');

  const openModal = (message: string = '') => {
    setInitialMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInitialMessage('');
  };

  return (
    <ChatContext.Provider
      value={{ isModalOpen, openModal, closeModal, initialMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

