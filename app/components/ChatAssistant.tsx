'use client';

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
    <div style={{ width: '800px' }}>
      <div
        className='cursor-pointer'
        onClick={() => handleClick()}
        style={{
          width: '800px',
          height: '56px',
        }}
      >
        <img
          src='/ask-me.svg'
          alt='Ask me anything'
          className='w-full h-full'
        />
      </div>

      {/* Suggested questions blocks */}
      <div className='flex gap-3 mt-4'>
        {SUGGESTED_QUESTIONS.map((question, index) => (
          <div
            key={index}
            className='text-body text-white cursor-pointer question-block'
            onClick={() => handleClick(question)}
          >
            {question}
          </div>
        ))}
      </div>
    </div>
  );
}
