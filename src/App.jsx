import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import RouterConfig from './Routing/manageRoutes';
import './App.css';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="pt-20 md:pt-32">
      <Navbar />
      <RouterConfig />
      <Footer />
    </div>
  );
}

export default App;