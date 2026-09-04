import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MeetOwnerModal } from './components/modals/MeetOwnerModal';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Owners } from './pages/Owners';
import { Impact } from './pages/Impact';
import { Contact } from './pages/Contact';
import type { SolarOwner, SolarProject } from './types/solar';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [targetOwner, setTargetOwner] = useState<SolarOwner | undefined>(undefined);
  const [targetProject, setTargetProject] = useState<SolarProject | undefined>(undefined);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark');
    }
  };

  const handleOpenConsultation = (owner?: SolarOwner, project?: SolarProject) => {
    setTargetOwner(owner);
    setTargetProject(project);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[var(--bg-body)] text-[var(--text-body)] transition-colors duration-500">
        <Navbar
          onOpenConsultation={() => handleOpenConsultation()}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/projects"
              element={<Projects onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/projects/:id"
              element={<ProjectDetail onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/owners"
              element={<Owners onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/impact"
              element={<Impact onOpenConsultation={() => handleOpenConsultation()} />}
            />
            <Route
              path="/contact"
              element={<Contact onOpenConsultation={() => handleOpenConsultation()} />}
            />
            <Route
              path="*"
              element={<Home onOpenConsultation={handleOpenConsultation} />}
            />
          </Routes>
        </main>

        <Footer onOpenConsultation={() => handleOpenConsultation()} />

        {/* Global Matchmaking Meeting Modal */}
        <MeetOwnerModal
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
          targetOwner={targetOwner}
          targetProject={targetProject}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
