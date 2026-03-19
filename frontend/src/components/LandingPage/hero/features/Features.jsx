import React, { useEffect, useRef, useState } from 'react';
import './Features.css';

export default function Features() {
  // Refs and state for first section (text left, image right)
  const imgRef1 = useRef(null);
  const containerRef1 = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);

  // Refs and state for second section (image left, text right)
  const imgRef2 = useRef(null);
  const containerRef2 = useRef(null);
  const [isVisible2, setIsVisible2] = useState(false);

  // Observer for the first section
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible1(true);
          observer1.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
      }
    );

    if (containerRef1.current) {
      observer1.observe(containerRef1.current);
    }

    return () => {
      if (containerRef1.current) {
        observer1.unobserve(containerRef1.current);
      }
    };
  }, []);

  // Observer for the second section
  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          observer2.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
      }
    );

    if (containerRef2.current) {
      observer2.observe(containerRef2.current);
    }

    return () => {
      if (containerRef2.current) {
        observer2.unobserve(containerRef2.current);
      }
    };
  }, []);

  return (
    <div>
      {/* First Section: Text on left, image on right */}
      <div
        data-w-id="e53b9bd1-105b-a8e7-7a82-1d2b2720be2f"
        className="container"
      >
        <div className="columns-1 w-row">
          {/* Left Column: Text */}
          <div
            className="w-col w-col-6 w-col-stack w-col-small-small-stack"
            style={{ marginRight: '-10px', paddingBottom: '20px' }}
          >
            <div
              className="feature-one-text"
              style={{ marginLeft: '-55px', paddingBottom: '20px' }}
            >
              <span className="feature-one-label">Our Features</span>
              <h2 className="feature-one-heading">
                Make the most of your time for your enhancement
              </h2>
              <p className="feature-one-paragraph">
                Calm, focused learning shaped around your unique rhythm.
                Intelligent support grows with every curious step you take.
                Creation becomes effortless.

              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div
            className="w-col w-col-6 w-col-stack w-col-small-small-stack"
            style={{
              transform:
                'translate3d(0px, 0px, 0px) scale(1, 1) rotateX(0deg) rotateY(0deg) skew(0deg, 0deg)',
              opacity: 1,
              transformStyle: 'preserve-3d',
              marginLeft: '-10px'
            }}
            ref={containerRef1}
          >
            <div
              className="featured-item-thumb-wrap"
              style={{
                marginLeft: '130px',
                position: 'relative',
                width: '40vw',
                height: 'auto'
              }}
            >
              <div className="feature-circle-bg" />
              <div className="feature-box-bg" />
              <img
                ref={imgRef1}
                src="/feature_image_1.png"
                alt="Feature One"
                className={`feature-one-image ${isVisible1 ? 'pop-in' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section: Image on left, text on right */}
      <div
        data-w-id="e53b9bd1-105b-a8e7-7a82-1d2b2720be2g"
        className="container"
        style={{ marginTop: '50px' }}
      >
        <div className="columns-1 w-row">
          {/* Left Column: Image */}
          <div
            className="w-col w-col-6 w-col-stack w-col-small-small-stack"
            style={{
              transform:
                'translate3d(0px, 0px, 0px) scale(1, 1) rotateX(0deg) rotateY(0deg) skew(0deg, 0deg)',
              opacity: 1,
              transformStyle: 'preserve-3d',
              marginRight: '-10px'
            }}
            ref={containerRef2}
          >
            <div
              className="featured-item-thumb-wrap"
              style={{
                marginRight: '130px',
                position: 'relative',
                width: '40vw',
                height: 'auto'
              }}
            >
              <div className="feature-circle-bg" style={{ backgroundColor: 'lightgreen' }} />
              <div className="feature-box-bg" />
              <img
                ref={imgRef2}
                src="/feature_image_2.png"
                alt="Feature Two"
                className={`feature-one-image ${isVisible2 ? 'pop-in' : ''}`}
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div
            className="w-col w-col-6 w-col-stack w-col-small-small-stack"
            style={{ marginLeft: '-10px', paddingBottom: '20px' }}
          >
            <div
              className="feature-one-text"
              style={{ marginRight: '-55px', paddingBottom: '20px' }}
            >
              <span className="feature-one-label" style={{ backgroundColor: '#FF9E4F', marginLeft: '180px', fontSize: '20px' }}>Our Features</span>
              <h2 className="feature-one-heading" style={{ marginLeft: '180px', fontSize: '35px' }}>
                Enhance your life with our latest tools
              </h2>
              <p className="feature-one-paragraph" style={{ marginLeft: '180px' }}>
                Aware, mindful progress built within your own pace and space.
                Smart guidance flows through tools that know your style.
                Exploration feels empowering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
