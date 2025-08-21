
import { useEffect, useRef } from 'react';
import { Sparkles, Droplet, Sun, Heart, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Sparkles size={32} />,
    title: "Limpeza de Pele",
    description: "Tratamento profundo que remove impurezas, desintoxica e revitaliza sua pele para um brilho saudável."
  },
  {
    icon: <Droplet size={32} />,
    title: "Preenchimento Facial",
    description: "Recupere o volume e reduza linhas de expressão com preenchimentos faciais de última geração."
  },
  {
    icon: <Sun size={32} />,
    title: "Tratamentos a Laser",
    description: "Tecnologia avançada para rejuvenescimento, remoção de manchas e melhoria da textura da pele."
  },
  {
    icon: <Heart size={32} />,
    title: "Botox",
    description: "Suavize rugas e linhas finas com tratamentos de Botox aplicados com precisão por profissionais experientes."
  },
  {
    icon: <Star size={32} />,
    title: "Microagulhamento",
    description: "Estimule a produção de colágeno, melhorando a aparência de cicatrizes, rugas e textura da pele."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Peeling Químico",
    description: "Renovação celular que remove camadas danificadas da pele, revelando uma superfície mais lisa e jovem."
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    // Cards animation
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
    };
  }, []);

  return (
    <section id="servicos" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Oferecemos uma variedade de tratamentos estéticos avançados para realçar sua beleza natural e aumentar sua confiança.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-teal-200"
            >
              <div className="text-teal-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href="#agendar" className="inline-block mt-4 text-teal-600 font-medium hover:text-teal-800 transition-colors">
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
