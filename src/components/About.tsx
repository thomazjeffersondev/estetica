import { useEffect, useRef } from 'react';
import { Award, Users, ThumbsUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Image animation
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    // Content animation
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    // Stats animation
    const statItems = statsRef.current?.children;
    if (statItems) {
      gsap.from(statItems, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
    };
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-20 bg-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-teal-200 rounded-full opacity-30 z-0"></div>
            <img 
              src="/img/linda-garota-tocando-seu-rosto-conceito-de-juventude-e-cuidados-com-pele.jpg" 
              alt="Nossa equipe de especialistas" 
              className="rounded-lg shadow-xl w-full h-auto object-cover z-10 relative"
            />
          </div>
          
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sobre a Bloom Estética</h2>
            <div className="w-24 h-1 bg-teal-600"></div>
            <p className="text-gray-600">
              Fundada em 2015, a Bloom Estética nasceu com a missão de proporcionar tratamentos estéticos de alta qualidade com um toque personalizado. Nossa clínica combina tecnologias avançadas com a expertise de profissionais altamente qualificados.
            </p>
            <p className="text-gray-600">
              Acreditamos que cada pessoa é única, por isso oferecemos tratamentos personalizados que consideram as necessidades individuais de cada cliente. Nossa abordagem integra beleza, saúde e bem-estar para resultados naturais e duradouros.
            </p>
            
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="text-teal-600 mb-2 flex justify-center">
                  <Award size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">8+</h3>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              
              <div className="text-center">
                <div className="text-teal-600 mb-2 flex justify-center">
                  <Users size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">5000+</h3>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
              
              <div className="text-center">
                <div className="text-teal-600 mb-2 flex justify-center">
                  <ThumbsUp size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">15+</h3>
                <p className="text-gray-600">Tratamentos Especializados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
