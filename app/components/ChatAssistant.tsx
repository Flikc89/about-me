'use client';

import { useState, useRef } from 'react';
import styles from './ChatAssistant.module.css';

const SUGGESTED_QUESTIONS = [
  'Стек технологий',
  'Что делал на последнем месте работы?',
  'Пример интересной задачи',
];

export default function ChatAssistant() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleQuestionClick = (text: string) => {
    setInputValue(text);
    inputRef.current?.focus();
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputInner}>
          <img
            src='/plus.svg'
            alt='Plus icon'
            className={styles.inputIconLeft}
          />
          <input
            ref={inputRef}
            type='text'
            placeholder='Спроси меня…'
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <img
            src='/open-chat.svg'
            alt='Open chat icon'
            className={styles.inputIconRight}
          />
        </div>
      </div>

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
