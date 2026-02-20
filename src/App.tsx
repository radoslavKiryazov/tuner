import './App.css'
import Header from './components/Header';
import Tuner from './components/Tuner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <Header />
      <Tuner />
      <Footer />
    </div>
  );
}

