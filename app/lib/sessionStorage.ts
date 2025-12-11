const SESSION_ID_KEY = 'chat_session_id';
const CHAT_MESSAGES_KEY = 'chat_messages';

export function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') {
    return '0';
  }

  let sessionId = localStorage.getItem(SESSION_ID_KEY);

  if (!sessionId) {
    // Генерируем уникальный ID на основе timestamp и случайного числа
    sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem(SESSION_ID_KEY, sessionId);
  }

  return sessionId;
}

export function saveChatMessages(messages: Array<{ id: string; text: string; isUser: boolean }>) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(CHAT_MESSAGES_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error('Error saving chat messages:', error);
  }
}

export function loadChatMessages(): Array<{ id: string; text: string; isUser: boolean }> {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const stored = localStorage.getItem(CHAT_MESSAGES_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading chat messages:', error);
  }

  return [];
}

export function clearChatMessages() {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem(CHAT_MESSAGES_KEY);
}

