import ChatAssistant from "./ChatAssistant";

export default function Hero() {
  return (
    <section className="w-full flex justify-center relative">
      {/* Background SVG */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1208px',
          height: '697px',
          backgroundImage: 'url(/bg-hero.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1
        }}
      />
      
      {/* Content container with flexbox */}
      <div 
        className="relative flex"
        style={{
          width: '1208px',
          height: '697px',
          justifyContent: 'space-between'
        }}
      >
        {/* Logo text block with top margin */}
        <div className="relative" style={{ marginTop: '200px' }}>
          <h1 className="heading" style={{ color: 'var(--color-purple)' }}>frontend</h1>
        </div>
        
        {/* Developer text block with top margin */}
        <div className="relative" style={{ marginTop: '350px' }}>
          <h1 className="heading" style={{ color: 'var(--color-purple)' }}>developer</h1>
        </div>
        
        {/* Photo in center */}
        <div 
          className="absolute"
          style={{
            width: '417px',
            height: '532px',
            top: '36px',
            left: '396px',
            opacity: 1
          }}
        >
          <img 
            src="/hero.svg" 
            alt="Hero photo" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Chat Assistant - positioned under photo */}
        <div 
          className="absolute"
          style={{
            top: '568px', // 36px (photo top) + 532px (photo height)
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <ChatAssistant />
        </div>
      </div>
    </section>
  );
}
