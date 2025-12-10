import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import MySkills from './components/MySkills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className='min-h-screen bg-dark'>
      <Navigation />

      <main
        style={{
          width: '100%',
          maxWidth: '1208px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '96px',
          paddingBottom: '64px',
        }}
      >
        <Hero />
        <About />
        <WorkExperience />
        <MySkills />
        <Contact />
      </main>
    </div>
  );
}
