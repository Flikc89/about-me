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

      <main className='container mx-auto px-4 pt-24 pb-16 md:px-6 lg:px-8'>
        <Hero />
        <div className='mx-auto max-w-4xl'>
          <About />
          <WorkExperience />
          <MySkills />
          <Contact />
        </div>
      </main>
    </div>
  );
}
