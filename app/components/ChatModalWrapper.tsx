'use client';

import { useChat } from '../contexts/ChatContext';
import ChatModal from './ChatModal';

export default function ChatModalWrapper() {
  const { isModalOpen, closeModal, initialMessage } = useChat();

  return (
    <ChatModal
      isOpen={isModalOpen}
      onClose={closeModal}
      initialMessage={initialMessage}
    />
  );
}

