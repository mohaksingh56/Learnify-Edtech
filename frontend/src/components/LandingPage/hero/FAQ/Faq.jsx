import React, { useState } from 'react';
import './Faq.css';

const faqs = [
  {
    question: 'How does your platform personalize learning?',
    answer: 'Our AI builds a custom roadmap for each topic, delivering video lessons and quizzes based on your goals.'
  },
  {
    question: 'Are there any live classes or scheduled lectures?',
    answer: 'Nope! Everything is on-demand. Lessons, videos, and practice are all generated when you need them.'
  },
  {
    question: 'Can I start without any prior tech background?',
    answer: 'Absolutely! Our system adapts to your level and starts from scratch with auto-explained concepts and tasks.'
  },
  {
    question: 'What makes your platform different from others?',
    answer: 'We don’t give slides or fixed schedules — we generate smart content, track progress, and evolve with you.'
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="faq-wrapper"
      style={{ backgroundImage: `url('/faq.png')`,backgroundSize:'-10px' }}
    >
      <h1 className="faq-title">Frequently<br />Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <div className="faq-icon">
                {openIndex === index ? '-' : '+'}
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
