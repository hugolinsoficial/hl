
import React, { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    const form = event.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/seu-email-aqui@exemplo.com", { // <-- SUBSTITUA PELO SEU E-MAIL
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="py-20 bg-brand-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2" data-aos="fade-up">Fale com a gente</h2>
          <p className="text-lg text-gray-300" data-aos="fade-up" data-aos-delay="100">Pronto para levar o melhor do sertanejo para o seu evento?</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6" data-aos="fade-right">
            <a 
              href="https://wa.me/5511961148755?text=Olá! Gostaria de fazer um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-6 rounded-xl flex items-center gap-5 shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:brightness-110 transition-all duration-300"
            >
              <i className="fab fa-whatsapp text-4xl"></i>
              <div>
                <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                <p className="text-lg text-gray-200">(11) 96114-8755</p>
              </div>
            </a>
            <div className="bg-white/10 p-6 rounded-lg flex items-center gap-5">
              <i className="fas fa-envelope text-3xl text-brand-orange"></i>
              <div>
                <h3 className="text-xl font-bold text-white">E-mail</h3>
                <a href="mailto:contato@hugolins.com" className="text-lg text-gray-300 hover:text-brand-orange transition-colors">contato@hugolins.com</a>
              </div>
            </div>
             <div className="bg-white/10 p-6 rounded-lg flex items-center gap-5">
              <i className="fas fa-map-marker-alt text-3xl text-brand-orange"></i>
              <div>
                <h3 className="text-xl font-bold text-white">Localização</h3>
                <p className="text-lg text-gray-300">São Paulo, SP – Atendendo capital e região metropolitana.</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 p-8 bg-white/10 rounded-lg" data-aos="fade-left">
            <input type="hidden" name="_subject" value="Novo contato pelo site!"/>
            <input type="text" name="name" placeholder="Seu nome" required className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            <input type="email" name="email" placeholder="Seu e-mail" required className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            <input type="tel" name="phone" placeholder="Seu telefone (opcional)" className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            <textarea name="message" placeholder="Sua mensagem" rows={5} required className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange"></textarea>
            <div className="flex items-center">
                <input type="checkbox" id="lgpd" name="lgpd" required className="h-4 w-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
                <label htmlFor="lgpd" className="ml-2 block text-sm text-gray-300">Concordo em ser contatado(a) e com a política de privacidade.</label>
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-brand-orange text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-opacity-90 hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
            </button>
            {status === 'success' && <p className="text-green-400 text-center">✅ Mensagem enviada com sucesso! Em breve retornaremos o contato.</p>}
            {status === 'error' && <p className="text-red-400 text-center">⚠️ Falha no envio. Por favor, tente novamente ou use outro canal de contato.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;