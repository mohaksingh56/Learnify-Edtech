// HomePage.jsx
import React from 'react';
import Hero from './components/LandingPage/hero/hero';
import Extend from './components/LandingPage/hero/hero-extend/extend';
import Features from './components/LandingPage/hero/features/Features';
import Review from './components/LandingPage/hero/reviews/Review';
import Faq from './components/LandingPage/hero/FAQ/Faq';
import Join from './components/LandingPage/hero/Join/Join';
import Footer from './components/LandingPage/footer/Footer';
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Extend />
      <Features />
      <Review />
      <Faq />
      <Join />
      <Footer />

    </div>
  );
};

export default HomePage;
