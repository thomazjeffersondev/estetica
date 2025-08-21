import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    }).from(imageRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");
    
    return () => {
      tl.kill();
    };
  }, []);

  const scrollToNext = () => {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-teal-50 to-white" ref={heroRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              Beleza natural e <span className="text-teal-600">confiança</span> para você
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Transforme-se com tratamentos estéticos modernos e personalizados. Nós cuidamos da sua beleza com as técnicas mais avançadas do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#agendar" 
                className="bg-teal-600 text-white px-8 py-3 rounded-full text-center hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Agendar Consulta
              </a>
              <a 
                href="#servicos" 
                className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full text-center hover:bg-teal-50 transition-colors"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
          
          <div ref={imageRef} className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-teal-300 rounded-full opacity-30"></div>
            <img 
              src="/img/jovem-fazendo-uma-cirurgia-de-beleza-no-spa.jpg" 
              alt="Tratamento estético facial" 
              className="rounded-lg shadow-xl w-80 h-80 md:w-96 md:h-96 object-cover z-10 relative"
            />
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToNext}>
          <ChevronDown size={36} className="text-teal-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
