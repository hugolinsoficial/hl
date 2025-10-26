
import React, { useState } from 'react';
import FaqItem from './FaqItem';

const faqData = [
  {
    question: "Vocês personalizam o repertório para meu evento?",
    answer: (
      <div className="space-y-3">
        <p>Sim! Nosso repertório é constantemente atualizado, mantendo os grandes clássicos e sucessos que todo mundo ama.</p>
        <p>Para que sua experiência seja a melhor possível, disponibilizamos todo o repertório para consulta, e você pode escolher as músicas que mais combinam com o seu evento.</p>
        <p>Também aceitamos pedidos especiais de músicas fora do repertório, desde que sejam feitos com antecedência — assim garantimos que tudo saia perfeito.</p>
        <p><em>Legal, né?</em></p>
      </div>
    )
  },
  {
    question: "Qual é a duração do show?",
    answer: (
      <div className="space-y-3">
        <p>O tempo médio de um show padrão varia entre 1 e 2 horas.</p>
        <p>Porém, como realizamos eventos de diferentes formatos, a duração pode ser ajustada conforme o tipo de apresentação.</p>
        <p>Exemplos:</p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Entradas de casamento: de 20 minutos a 1 hora</li>
          <li>Show principal de casamento: de 1 a 2h30 (geralmente em duas entradas de 1h15)</li>
          <li>Eventos corporativos: de 1 a 3 horas, com intervalos estratégicos</li>
          <li>Eventos particulares: até 3 horas, com pausas programadas</li>
        </ul>
        <p className="pt-2">A configuração do tempo é flexível — praticamente ao seu gosto!</p>
      </div>
    )
  },
  {
    question: "O que está incluso na parte técnica (som e iluminação)?",
    answer: (
        <div className="space-y-3">
            <p>Possuímos estrutura de som própria, ideal para eventos de pequeno porte (até 200 pessoas em local fechado, nos formatos voz e violão, duo ou trio).</p>
            <p>Além disso, contamos com equipes parceiras que oferecem estrutura de som profissional, iluminação, palco, painel de LED, gravação de vídeo e fotografia para eventos de pequeno e médio porte (até 1.200 pessoas).</p>
            <p>Para eventos maiores, o ideal é iniciar o planejamento com antecedência para que tudo seja organizado da melhor forma.</p>
        </div>
    )
  },
  {
    question: "Em quais regiões vocês atendem?",
    answer: (
      <p>Atendemos São Paulo e interior, com planos de expandir para novas regiões em breve.</p>
    )
  },
  {
    question: "Como posso solicitar um orçamento ou contratar o show?",
    answer: (
        <div className="space-y-3">
            <p>É muito simples!</p>
            <p>Entre em contato pelos seguintes canais:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
                <li>WhatsApp: (11) 96114-8755</li>
                <li>E-mail: audiolrproducoes@gmail.com</li>
                <li>Redes sociais: @hugolinsoficial</li>
                <li>Site oficial: www.hugolinsoficial.git.io/hl</li>
            </ul>
            <p className="pt-2">Será um prazer conversar, entender o seu evento e preparar um show inesquecível!</p>
        </div>
    )
  }
];


const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-orange mb-2" data-aos="fade-up">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="space-y-4" data-aos="fade-up">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;