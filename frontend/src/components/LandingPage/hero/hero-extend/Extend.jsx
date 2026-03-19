import React, { useEffect, useRef, useState } from 'react';
import './Extend.css';

const Extend = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="growth-section" ref={containerRef}>
      <div className={`content ${visible ? 'reveal' : ''}`}>
        <p className="line">
          Within any <span className="star">✸</span> career field, the belief that you
        </p>
        <p className="line">
          can improve will motivate you to persevere <span className="star">✸</span>
        </p>
        <p className="line">
          despite obstacles. Here are other career benefits
        </p>
        <p className="highlighted">
          of a growth mindset <span className="star">✸</span>
        </p>
      </div>
      <div className="circle-button">
        <span style={{fontSize:'6rem'}}>&#8595;</span> {/* Downward arrow ↓ */}
      </div>

      {/* Use your PNG as a background via CSS */}
    </section>
  );
};

export default Extend;
