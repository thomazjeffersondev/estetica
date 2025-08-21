
import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });
  
  useEffect(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
    
    // Form animation
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    // Info animation
    gsap.from(infoRef.current, {
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: false });
    
    try {
      // Format the message for WhatsApp
      const message = `*Nova Mensagem de Contato*\n\n*Nome:* ${formState.name}\n*Email:* ${formState.email}\n*Telefone:* ${formState.phone}\n*Serviço de Interesse:* ${formState.service}\n*Mensagem:* ${formState.message}`;
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create WhatsApp URL with phone number and message
      const whatsappUrl = `https://wa.me/5521964361121?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      setFormStatus({ submitted: true, submitting: false, error: false });
      
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending to WhatsApp:', error);
      setFormStatus({ submitted: false, submitting: false, error: true });
    }
  };

  return (
    <section id="contato" ref={sectionRef} className="py-20 bg-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Entre em Contato</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Estamos ansiosos para ouvir de você. Entre em contato conosco para agendar uma consulta ou tirar suas dúvidas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Serviço de Interesse</label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Limpeza de Pele">Limpeza de Pele</option>
                  <option value="Preenchimento Facial">Preenchimento Facial</option>
                  <option value="Tratamentos a Laser">Tratamentos a Laser</option>
                  <option value="Botox">Botox</option>
                  <option value="Microagulhamento">Microagulhamento</option>
                  <option value="Peeling Químico">Peeling Químico</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus.submitting}
                className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center"
              >
                {formStatus.submitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
              
              {formStatus.submitted && (
                <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md">
                  Informações enviadas para o WhatsApp. Verifique seu aplicativo para continuar a conversa.
                </div>
              )}
              
              {formStatus.error && (
                <div className="mt-4 p-3 bg-red-50 text-red-800 rounded-md">
                  Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact info */}
          <div ref={infoRef} className="space-y-6">
            {/* Update icon colors from purple to teal */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-800 mb-1">Endereço</h3>
                <p className="text-gray-600">
                  Av. Paulista, 1000, Bela Vista<br />
                  São Paulo, SP - 01310-000
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-800 mb-1">Telefone</h3>
                <p className="text-gray-600">(21) 96436-1121</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-800 mb-1">Email</h3>
                <p className="text-gray-600">contato@bloomestética.com.br</p>
                <p className="text-gray-600">agendamento@bloomestética.com.br</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-800 mb-1">Horário de Funcionamento</h3>
                <p className="text-gray-600">Segunda - Sexta: 9h às 20h</p>
                <p className="text-gray-600">Sábado: 9h às 17h</p>
                <p className="text-gray-600">Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
