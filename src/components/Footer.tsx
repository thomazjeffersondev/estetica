
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Clinic info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/img/Logo_Clínica_de_Estética_Delicado-removebg-preview.png" 
                alt="Bloom Estética Logo" 
                className="h-16"
              />
              <h3 className="text-2xl font-semibold">Bloom Estética</h3>
            </div>
            <p className="text-gray-300 max-w-xs">
              A sua clínica de estética avançada com tratamentos personalizados para realçar sua beleza natural.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-white transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Limpeza de Pele</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Preenchimento Facial</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Tratamentos a Laser</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Botox</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Microagulhamento</a>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Contato</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Av. Paulista, 1000, Bela Vista</p>
              <p>São Paulo, SP - 01310-000</p>
              <p>Telefone: (21) 96436-1121</p>
              <p>Email: contato@bloomestética.com.br</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2023 Bloom Estética. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
