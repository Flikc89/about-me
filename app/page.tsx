import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import MySkills from './components/MySkills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ChatProvider } from './contexts/ChatContext';
import ChatModalWrapper from './components/ChatModalWrapper';
import styles from './page.module.css';

export default function Home() {
  return (
    <ChatProvider>
      <div className='min-h-screen bg-dark'>
        <Navigation />

        <main className={styles.main}>
          <Hero />
          <About />
          <WorkExperience />
          <MySkills />
          <Contact />
        </main>
        <Footer />
        <ChatModalWrapper />
      </div>
    </ChatProvider>
  );
}
