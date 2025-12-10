const STATS = [
  { title: '10+', description: 'Лет опыта' },
  { title: '50+', description: 'Завершенных проектов' },
  { title: '6+', description: 'Компаний' },
  { title: '100%', description: 'Вовлеченности' },
];

export default function About() {
  return (
    <section
      id='about'
      style={{
        marginTop: '120px',
        width: '100%',
        maxWidth: '1208px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h2 className='section-heading'>About me</h2>
      <div
        className='text-body text-white'
        style={{
          marginTop: '40px',
          width: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Я создаю интерфейсы, которые работают быстрее, выглядят лучше и решают
        настоящие задачи людей. Для меня важно, чтобы пользователь чувствовал себя
        уверенно и спокойно.
      </div>
      <div
        className='flex'
        style={{
          marginTop: '24px',
          width: '100%',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {STATS.map((stat, index) => {
          const isLeftToRight = index % 2 === 0;
          const gradientDirection = isLeftToRight
            ? 'linear-gradient(to right, var(--color-purple), white)'
            : 'linear-gradient(to left, var(--color-purple), white)';

          return (
            <div
              key={index}
              style={{
                width: '290px',
                height: '100px',
                padding: '1px',
                background: gradientDirection,
                borderRadius: '12px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--color-dark)',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    color: 'var(--color-purple)',
                    fontFamily: 'var(--font-hack), monospace',
                    fontWeight: 700,
                    fontSize: '36px',
                    lineHeight: '44px',
                    textAlign: 'center',
                  }}
                >
                  {stat.title}
                </div>
                <div
                  className='text-white'
                  style={{
                    fontFamily: 'var(--font-hack), monospace',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '28px',
                    textAlign: 'center',
                    marginTop: '4px',
                  }}
                >
                  {stat.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
