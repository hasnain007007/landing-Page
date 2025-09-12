import React, { useState, useEffect } from "react";
import "./App.css";


export default function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 12, minutes: 30, seconds: 45 });
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");

  // Countdown simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let newSeconds = prev.seconds - 1;
        let { days, hours, minutes } = prev;
        if (newSeconds < 0) {
          newSeconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        return { days, hours, minutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCoupon = () => {
    if (coupon === "Extra10") {
      setMessage("🎉 Congratulations! You unlocked 10% OFF");
    } else {
      setMessage("❌ Invalid coupon code, try again.");
    }
  };

  return (
    <div className="App"> 

    
    <div>
      {/* Header */}
      <header>
        <img src="/logo.png" alt="CarzzyCars.pk Logo" />
      </header>

      {/* Hero Section */}
      <section className="hero">
        🚗 We Are Coming Soon!
        <div className="subheading">Your #1 Destination for Car Accessories in Pakistan</div>
      </section>

      {/* Countdown */}
      <div className="countdown">
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
      </div>

      {/* Coupon Section */}
      <div className="coupon">
        <p>Get 10% OFF with Coupon Code: <strong>Extra10</strong></p>
        <input 
          type="text" 
          placeholder="Enter coupon code" 
          value={coupon} 
          onChange={(e) => setCoupon(e.target.value)} 
        />
        <button onClick={handleCoupon}>Apply</button>
        <div className="message">{message}</div>
      </div>

      {/* Subscribe Section */}
      <div className="subscribe">
        <input type="email" placeholder="Enter your email to get notified" />
        <button>Subscribe</button>
      </div>

      {/* Footer */}
      <footer>
        <p>📧 support@carzzycars.pk | 📞 0309-4676310</p>
        <p>🌐 Facebook | Instagram | WhatsApp</p>
        <p>© 2025 CarzzyCars.pk</p>
      </footer>
    </div>
    </div>
  );
}
