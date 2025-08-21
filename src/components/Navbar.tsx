
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/img/Logo_Clínica_de_Estética_Delicado-removebg-preview.png" 
              alt="Bloom Estética Logo" 
              className="h-18"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-800 hover:text-teal-600 transition-colors">Início</a>
            <a href="#servicos" className="text-gray-800 hover:text-teal-600 transition-colors">Serviços</a>
            <a href="#sobre" className="text-gray-800 hover:text-teal-600 transition-colors">Sobre Nós</a>
            <a href="#galeria" className="text-gray-800 hover:text-teal-600 transition-colors">Galeria</a>
            <a href="#contato" className="text-gray-800 hover:text-teal-600 transition-colors">Contato</a>
            <a href="#agendar" className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition-colors">
              Agendar
            </a>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#inicio" className="text-gray-800 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#servicos" className="text-gray-800 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#sobre" className="text-gray-800 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a>
            <a href="#galeria" className="text-gray-800 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Galeria</a>
            <a href="#contato" className="text-gray-800 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <a href="#agendar" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors w-full text-center">
              Agendar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
