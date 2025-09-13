import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    car: "",
    city: "",
    email: "",
    note: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCoupon = () => {
    // Check if all form fields except note are filled
    const { name, age, car, city, email } = formData;
    if (!name || !age || !car || !city || !email) {
      setMessage("❌ Please fill all the required fields to get the coupon.");
      return;
    }

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
          <img src="logo.png" alt="CarzzyCars.pk Logo" />
        </header>

        {/* Hero Section */}
        <section className="hero">
          🚗 We Are Coming Soon!
          <div className="subheading">
            Your #1 Destination for Car Accessories in Pakistan
          </div>
        </section>

        {/* Countdown */}
        <div className="countdown">
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
          {timeLeft.seconds}s
        </div>

        {/* Coupon Section */}
        <div className="coupon">
          <p>
            Get 10% OFF with Coupon Code: <strong>Extra10</strong>
          </p>
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
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="car"
            placeholder="Enter your car name"
            value={formData.car}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email to get notified"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="note"
            placeholder="Note (Suggestion)"
            value={formData.note}
            onChange={handleChange}
          />

          <button onClick={handleCoupon}>Subscribe & Get Coupon</button>
        </div>

        {/* Footer */}
        <footer>
          <p>📧 support@carzzycars.pk | 📞 03284010007</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://wa.me/923094676310"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="icon"
              />
            </a>
            <a
              href="https://www.instagram.com/crazzycars.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="icon"
              />
            </a>
            <a
              href="https://www.tiktok.com/@crazzycars.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3046/3046126.png"
                alt="TikTok"
                className="icon"
              />
            </a>
          </div>

          <p>© 2025 CarzzyCars.pk</p>
        </footer>
      </div>
    </div>
  );
}
