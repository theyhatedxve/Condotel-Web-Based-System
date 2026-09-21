import { useState } from "react";
import "./App.css";

function App() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");

  const [authMode, setAuthMode] = useState(null);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("condotelUser")) || null;
  });

  function handleSearch() {
    if (!checkIn || !checkOut) {
      alert("Please select your check-in and check-out dates.");
      return;
    }

    alert(
      `Searching rooms...\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`
    );
  }

  function handleRegister(form) {
    const name = form.name.value.trim();
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please complete all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const newUser = { name, email, password };

    localStorage.setItem("condotelUser", JSON.stringify(newUser));
    setUser(newUser);
    setAuthMode(null);

    alert("Registration successful! Welcome to VistaCondotel.");
  }

  function handleLogin(form) {
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;
    const savedUser = JSON.parse(localStorage.getItem("condotelUser"));

    if (!savedUser) {
      alert("No registered account found. Please register first.");
      return;
    }

    if (email !== savedUser.email || password !== savedUser.password) {
      alert("Invalid email or password.");
      return;
    }

    setUser(savedUser);
    setAuthMode(null);
    alert(`Welcome back, ${savedUser.name}!`);
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("condotelUser");
    alert("You have been logged out.");
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">⌂</span>
          <span>Vista<span>Condotel</span></span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">
          {user ? (
            <>
              <span className="welcome-user">Hi, {user.name}</span>
              <button className="login-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="login-button" onClick={() => setAuthMode("login")}>
                Login
              </button>
              <button className="register-button" onClick={() => setAuthMode("register")}>
                Register
              </button>
            </>
          )}
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-small-title">WELCOME TO VISTACONDOTEL</p>
          <h1>Your Perfect Stay<br />Awaits</h1>
          <p className="hero-description">
            Experience comfort, convenience, and secure access
            with our modern condotel accommodations.
          </p>
        </div>

        <div className="booking-box">
          <div className="booking-field">
            <label>CHECK-IN</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div className="booking-field">
            <label>CHECK-OUT</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
          <div className="booking-field">
            <label>GUESTS</label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7 Guests</option>
              <option value="8">8 Guests</option>
            </select>
          </div>
          <button className="search-button" onClick={handleSearch}>Search Rooms</button>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card"><div className="feature-icon">▣</div><div><h3>Modern Rooms</h3><p>Fully furnished and comfortable rooms for your stay.</p></div></div>
        <div className="feature-card"><div className="feature-icon">⌕</div><div><h3>Secure Access</h3><p>NFC-enabled access for authorized guests.</p></div></div>
        <div className="feature-card"><div className="feature-icon">✓</div><div><h3>Easy Booking</h3><p>Simple and convenient online reservation.</p></div></div>
        <div className="feature-card"><div className="feature-icon">◷</div><div><h3>24/7 Support</h3><p>Assistance whenever you need it.</p></div></div>
      </section>

      <section className="rooms-section" id="rooms">
        <div className="section-heading">
          <p>OUR ACCOMMODATIONS</p>
          <h2>Featured Rooms</h2>
          <span>Choose from our variety of modern and comfortable units.</span>
        </div>

        <div className="rooms-grid">
          <div className="room-card">
            <div className="room-image studio"></div>
            <div className="room-content">
              <div className="room-title"><h3>Studio Room</h3><strong>$80 <small>/ night</small></strong></div>
              <p>A comfortable studio unit designed for short and relaxing stays.</p>
              <div className="room-info"><span>👤 2 Guests</span><span>🛏 1 Bed</span></div>
              <button className="room-button">View Details</button>
            </div>
          </div>

          <div className="room-card">
            <div className="room-image one-bedroom"></div>
            <div className="room-content">
              <div className="room-title"><h3>1 Bedroom Suite</h3><strong>$120 <small>/ night</small></strong></div>
              <p>Spacious accommodation with a private bedroom and modern amenities.</p>
              <div className="room-info"><span>👤 3 Guests</span><span>🛏 1 Bed</span></div>
              <button className="room-button">View Details</button>
            </div>
          </div>

          <div className="room-card">
            <div className="room-image two-bedroom"></div>
            <div className="room-content">
              <div className="room-title"><h3>2 Bedroom Suite</h3><strong>$180 <small>/ night</small></strong></div>
              <p>A larger suite suitable for families and groups.</p>
              <div className="room-info"><span>👤 6 Guests</span><span>🛏 2 Beds</span></div>
              <button className="room-button">View Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-image"></div>
        <div className="about-content">
          <p className="section-label">ABOUT VISTACONDOTEL</p>
          <h2>Comfort and Security<br />in One Place</h2>
          <p>VistaCondotel provides comfortable accommodations with a secure and convenient reservation experience.</p>
          <p>Our system allows guests to browse rooms, make reservations, complete payments, and manage NFC access for their authorized stay.</p>
          <button className="learn-button">Learn More</button>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo footer-logo"><span className="logo-icon">⌂</span><span>Vista<span>Condotel</span></span></div>
            <p>Modern accommodation with convenient reservation and secure NFC access.</p>
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <a href="#home">Home</a><a href="#rooms">Rooms</a><a href="#about">About</a><a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>info@vistacondotel.com</p><p>+63 900 000 0000</p><p>Philippines</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 VistaCondotel. All rights reserved.</p>
          <p>Secure Web-Based Condotel System</p>
        </div>
      </footer>

      {authMode && (
        <div className="auth-overlay" onClick={() => setAuthMode(null)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <button className="auth-close" onClick={() => setAuthMode(null)}>×</button>

            {authMode === "login" ? (
              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); handleLogin(e.target); }}>
                <p className="auth-label">WELCOME BACK</p>
                <h2>Login to Your Account</h2>
                <p className="auth-subtitle">Access your VistaCondotel account.</p>

                <label>Email Address</label>
                <input name="email" type="email" placeholder="Enter your email" required />

                <label>Password</label>
                <input name="password" type="password" placeholder="Enter your password" required />

                <button className="auth-submit" type="submit">Login</button>

                <p className="auth-switch">
                  Don't have an account?{" "}
                  <button type="button" onClick={() => setAuthMode("register")}>Register</button>
                </p>
              </form>
            ) : (
              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); handleRegister(e.target); }}>
                <p className="auth-label">CREATE ACCOUNT</p>
                <h2>Register</h2>
                <p className="auth-subtitle">Create your VistaCondotel guest account.</p>

                <label>Full Name</label>
                <input name="name" type="text" placeholder="Enter your full name" required />

                <label>Email Address</label>
                <input name="email" type="email" placeholder="Enter your email" required />

                <label>Password</label>
                <input name="password" type="password" placeholder="At least 6 characters" required />

                <label>Confirm Password</label>
                <input name="confirmPassword" type="password" placeholder="Confirm your password" required />

                <button className="auth-submit" type="submit">Create Account</button>

                <p className="auth-switch">
                  Already have an account?{" "}
                  <button type="button" onClick={() => setAuthMode("login")}>Login</button>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
