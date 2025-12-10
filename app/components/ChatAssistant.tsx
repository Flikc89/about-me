'use client';

import styles from './ChatAssistant.module.css';

const SUGGESTED_QUESTIONS = [
  'Стек технологий',
  'Что делал на последнем месте работы?',
  'Пример интересной задачи',
];

export default function ChatAssistant() {
  const handleClick = (text?: string) => {
    // TODO: Open chat modal
    if (text) {
      console.log('Chat clicked with text:', text);
    } else {
      console.log('Chat input clicked');
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={`cursor-pointer ${styles.inputContainer}`}
        onClick={() => handleClick()}
      >
        <img
          src='/ask-me.svg'
          alt='Ask me anything'
          className='w-full h-full'
        />
      </div>

      {/* Suggested questions blocks */}
      <div className={`flex gap-3 mt-4 ${styles.questionsContainer}`}>
        {SUGGESTED_QUESTIONS.map((question, index) => (
          <div
            key={index}
            className={`text-body text-white cursor-pointer ${styles.questionBlock}`}
            onClick={() => handleClick(question)}
          >
            {question}
          </div>
        ))}
      </div>
    </div>
  );
}
