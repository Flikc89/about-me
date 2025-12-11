'use client';

import styles from './ChatInput.module.css';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
  onRightIconClick?: () => void;
  placeholder?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  className?: string;
  disabled?: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onEnter,
  onRightIconClick,
  placeholder = 'Спроси меня…',
  showLeftIcon = false,
  showRightIcon = true,
  className = '',
  disabled = false,
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter && !disabled) {
      onEnter();
    }
  };

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <div className={styles.inputInner}>
        {showLeftIcon && (
          <img
            src='/plus.svg'
            alt='Plus icon'
            className={styles.inputIconLeft}
          />
        )}
        <input
          type='text'
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
        {showRightIcon && (
          <img
            src='/open-chat.svg'
            alt='Open chat icon'
            className={styles.inputIconRight}
            onClick={onRightIconClick}
          />
        )}
      </div>
    </div>
  );
}

