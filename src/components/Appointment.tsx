
import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, CheckCircle, User } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Appointment = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });
  
  const availableTimes = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];
  
  useEffect(() => {
    // Content animation
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    // Form animation
    if (formRef.current) {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      const message = `*Nova Solicitação de Agendamento*\n\n*Nome:* ${formState.name}\n*Email:* ${formState.email}\n*Telefone:* ${formState.phone}\n*Serviço:* ${formState.service}\n*Data:* ${formState.date}\n*Horário:* ${formState.time}`;
      
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
        date: '',
        time: '',
      });
    } catch (error) {
      console.error('Error sending to WhatsApp:', error);
      setFormStatus({ submitted: false, submitting: false, error: true });
    }
  };

  return (
    <section id="agendar" ref={sectionRef} className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div ref={contentRef} className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Agende Sua Consulta</h2>
            <div className="w-24 h-1 bg-white"></div>
            <p className="text-teal-100">
              Dê o primeiro passo em sua jornada de transformação. Agende uma consulta conosco hoje mesmo e descubra as melhores opções de tratamentos para suas necessidades.
            </p>
            
            <ul className="space-y-4 mt-8">
              <li className="flex items-start">
                <CheckCircle className="text-white mr-3 mt-1" size={20} />
                <span>Consulta inicial com avaliação detalhada e personalizada</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-white mr-3 mt-1" size={20} />
                <span>Equipe de profissionais especializados e certificados</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-white mr-3 mt-1" size={20} />
                <span>Planos de tratamento adaptados às suas necessidades</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-white mr-3 mt-1" size={20} />
                <span>Tecnologia de ponta para resultados superiores</span>
              </li>
            </ul>
          </div>
          
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Preencha seus dados</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <span className="pl-3 text-teal-500">
                    <User size={18} />
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-2 bg-transparent focus:outline-none text-gray-800"
                  />
                </div>
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
                  <option value="Consulta Inicial">Consulta Inicial</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Data Preferida</label>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <span className="pl-3 text-gray-500">
                      <Calendar size={18} />
                    </span>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formState.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-2 py-2 bg-transparent focus:outline-none text-gray-800"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Horário Preferido</label>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <span className="pl-3 text-gray-500">
                      <Clock size={18} />
                    </span>
                    <select
                      id="time"
                      name="time"
                      value={formState.time}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-2 bg-transparent focus:outline-none text-gray-800"
                    >
                      <option value="">Selecionar</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={formStatus.submitting}
                className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition-colors"
              >
                {formStatus.submitting ? "Processando..." : "Agendar Consulta"}
              </button>
              
              {formStatus.submitted && (
                <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md">
                  Informações enviadas para o WhatsApp. Verifique seu aplicativo para continuar o agendamento.
                </div>
              )}
              
              {formStatus.error && (
                <div className="mt-4 p-3 bg-red-50 text-red-800 rounded-md">
                  Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
