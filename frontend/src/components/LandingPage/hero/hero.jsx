// HeroSection.jsx
import React, { useState, useEffect, useRef } from "react";
import Navbar from '../Navbar/Navbar';
import './Hero.css';
const Hero = () => {
    const textRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!textRef.current) return;
            const rect = textRef.current.getBoundingClientRect();
            const triggerPoint = window.innerHeight * 0.8; // when text enters bottom 20%
            setIsActive(rect.top < triggerPoint && rect.bottom > 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className='combined'>
            <Navbar />
            <section className="hero">
                <div className="hero-background">


                    <div className="hero-gradient"></div>
                </div>
                <div className="hero-content">
                    <h1 style={{ display: 'inline-block', position: 'relative' }}>
                        Learn, Share and Grow Together, and be{' '}
                        <span style={{
                            position: 'relative',
                            display: 'inline-block',
                            paddingBottom: '12px',
                            backgroundImage: 'url(underline.svg)', // Replace with your SVG path
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom center',
                            backgroundSize: 'contain'
                        }}>
                            spark!
                        </span>
                    </h1>

                    <p
                        style={{
                            maxWidth: "1200px", // Adjust width to break into two lines
                            wordBreak: "break-word", // Ensures breaking at word boundaries
                            lineHeight: "1", // Adjust line spacing for better readability
                            textAlign: "center" // Optional: Center align text
                        }}
                    >
                        Be a learner in this vibrant classroom, to grow. <br />
                        We can build more knowledge, than learning alone!                    </p>                <div className="hero-buttons">
                        <a href="/about" className="primary-button" style={{ fontSize: '30px', backgroundColor: '#66CDAA', color: 'black' }}>
                            About Us!
                        </a>
                        <a href="#learn" className="secondary-button" style={{ fontSize: '30px', color: 'black', }}>
                            Learn More
                        </a>

                    </div>
                </div>


            </section>
            <div className="floating-section">
                <marquee
                    behavior="scroll"
                    direction="left"
                    scrollAmount="8"
                    style={{ whiteSpace: 'nowrap', margin: '-90px 10px' }}
                >
                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />

                    {/* Duplicate for seamless looping */}
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_1.png" alt="img1" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_2.png" alt="img2" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_3.png" alt="img3" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_4.png" alt="img4" />
                    <img style={{ display: 'inline-block', margin: '0 25px', height: '300px' }} src="/floating_section_5.png" alt="img5" />
                </marquee>
            </div>




        </div>
    );
};

export default Hero;
