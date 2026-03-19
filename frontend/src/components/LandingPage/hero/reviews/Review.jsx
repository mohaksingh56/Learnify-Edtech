import React, { useState } from "react";
import "./Review.css";

const reviews = [
  {
    quote: "The instructors brought so much passion and empathy into creating this. Also, it could be done asynchronously which was important to me as a mom.",
    name: "Priya Sharma",
    location: "MG Road, Bengaluru, Karnataka",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    color: "#fda94f"
  },
  {
    quote: "This course gave me the flexibility I needed. It fits perfectly with my schedule!",
    name: "Rajesh Iyer",
    location: "Gopalapuram, Chennai, Tamil Nadu",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    color: "#8da3fd"
  },
  {
    quote: "I loved the asynchronous format, and the support from instructors was amazing.",
    name: "Ananya Mehta",
    location: "Sector 62, Noida, Uttar Pradesh",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    color: "#d285fd"
  }
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => setCurrentIndex((currentIndex + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);

  const review = reviews[currentIndex];

  return (
    <div className="revslider-container">
      <div className="revslider-quote-icon">“</div>
      <p className="revslider-quote-text" style={{marginTop:'-150px'}}>“{review.quote}”</p>

      <div className="revslider-user-info">
        <div className="revslider-img-holder" style={{ backgroundColor: review.color }}>
          <img src={review.image} alt={review.name} />
        </div>
        <div>
          <h4 className="revslider-user-name">{review.name}</h4>
          <p className="revslider-user-location">{review.location}</p>
        </div>
      </div>

      <div className="revslider-controls" style={{}}>
        <button onClick={prevReview}>←</button>
        <button onClick={nextReview}>→</button>
      </div>
    </div>
  );
}
