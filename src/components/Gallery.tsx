import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Gallery images
const galleryImages = [
  {
    src: "/img/esteticista-com-um-pincel-aplica-uma-mascara-hidratante-branca-no-rosto-de-uma-jovem-cliente-em-um-salao-de-beleza-de-spa.jpg",
    alt: "Tratamento facial"
  },
  {
    src: "/img/jovem-fazendo-uma-cirurgia-de-beleza-no-spa.jpg",
    alt: "Ambiente da clínica"
  },
  {
    src: "/img/mulher-jovem-fazendo-tratamento-facial.jpg",
    alt: "Procedimento estético"
  },
  {
    src: "/img/jovem-mulher-com-massagem-de-rosto-relaxante-no-salao-spa (1).jpg",
    alt: "Massagem relaxante"
  },
  {
    src: "/img/mulher-fazendo-procedimentos-de-tratamento-de-beleza-em-um-salao-de-beleza.jpg",
    alt: "Tratamento corporal"
  },
  {
    src: "/img/paciente-sexo-feminino-recebendo-tratamento-cosmetico.jpg",
    alt: "Produtos profissionais"
  }
];

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
    
    // Gallery images animation
    const galleryItems = galleryRef.current?.children;
    if (galleryItems) {
      gsap.from(galleryItems, {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
    };
  }, []);

  return (
    <section id="galeria" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nossa Galeria</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Conheça nosso ambiente e veja um pouco dos nossos tratamentos e resultados.
          </p>
        </div>
        
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden rounded-lg shadow-md relative">
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 z-10"></div>
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
