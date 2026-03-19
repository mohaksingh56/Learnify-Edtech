import React, { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate(); // React Router navigation
    const hamburgerRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = hamburgerRef.current;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate3d(${x * 0.1}px, ${y * 0.1}px, 0)`;
    };

    const resetTransform = () => {
        hamburgerRef.current.style.transform = `translate3d(0px, 0px, 0px)`;
    };
    // Scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle menu toggle to open a new page
    const handleMenuToggle = () => {
        navigate("/menu"); // Redirect to the menu page
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div
                    className="navbar-logo"
                    style={{
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontSize: "37px",
                        fontWeight: "bold",
                        color: "black",
                        animation: "glow 1.5s ease-in-out infinite alternate",
                        
                    }}
                >
                    <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                        L
                        <span
                            style={{
                                color: "#FF2C2C",
                                display: "inline-block",
                            }}
                        >
                            e
                        </span>
                        arnify
                    </a>
                    <style>
                        {`
      @keyframes glow {
        0% {
          text-shadow: 0 0 1px #ff9999, 0 0 1px #ffcccc;
        }
        100% {
          text-shadow: 0 0 2px #ff4d4d, 0 0 20px #ff9999;
        }
      }
    `}
                    </style>
                </div>

                {/* Clicking on this will navigate to Menu Page */}
                <div className="navbar-toggle" onClick={handleMenuToggle}
                    ref={hamburgerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={resetTransform}
                >
                    <div className="hamburger">
                        <span></span>
                        <span></span>

                    </div>
                </div>

                <ul className="navbar-menu">
                    <li><a href="/about">About</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/community">Community</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li className="navbar-button" style={{ textDecoration: 'none', listStyle: 'none', padding: '10 80px' }}>
                        <a href="/auth" style={{ textDecoration: 'none', padding: '18px 74px', fontSize: '1.5rem', marginTop: '-20px', color: '#C291FE' }}>Join Now</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
