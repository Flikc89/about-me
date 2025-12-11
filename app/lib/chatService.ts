interface ChatRequest {
  message: string;
  sessionId: string;
}

interface ChatResponse {
  reply: string;
}

const API_URL = 'https://lobanov.website/api/chat';

export async function sendMessage(
  message: string,
  sessionId: string
): Promise<string> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        sessionId,
      } as ChatRequest),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    return data.reply || 'Извините, не удалось получить ответ.';
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Не удалось отправить сообщение. Попробуйте позже.');
  }
}

