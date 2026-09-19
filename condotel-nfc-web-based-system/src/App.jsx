import { useState } from "react";
import "./App.css";

function App() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");

  function handleSearch() {
    if (!checkIn || !checkOut) {
      alert("Please select your check-in and check-out dates.");
      return;
    }

    alert(
      `Searching rooms...\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`
    );
  }

  return (
    <div className="app">

      {/* NAVBAR */}
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
          <button className="login-button">
            Login
          </button>

          <button className="register-button">
            Register
          </button>
        </div>
      </nav>


      {/* HERO SECTION */}
      <section className="hero" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-small-title">
            WELCOME TO VISTACONDOTEL
          </p>

          <h1>
            Your Perfect Stay
            <br />
            Awaits
          </h1>

          <p className="hero-description">
            Experience comfort, convenience, and secure access
            with our modern condotel accommodations.
          </p>
        </div>


        {/* BOOKING SEARCH */}
        <div className="booking-box">

          <div className="booking-field">
            <label>CHECK-IN</label>

            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>


          <div className="booking-field">
            <label>CHECK-OUT</label>

            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>


          <div className="booking-field">
            <label>GUESTS</label>

            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
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


          <button
            className="search-button"
            onClick={handleSearch}
          >
            Search Rooms
          </button>

        </div>
      </section>


      {/* FEATURES */}
      <section className="features-section">

        <div className="feature-card">
          <div className="feature-icon">▣</div>

          <div>
            <h3>Modern Rooms</h3>
            <p>
              Fully furnished and comfortable rooms
              for your stay.
            </p>
          </div>
        </div>


        <div className="feature-card">
          <div className="feature-icon">⌕</div>

          <div>
            <h3>Secure Access</h3>
            <p>
              NFC-enabled access for authorized guests.
            </p>
          </div>
        </div>


        <div className="feature-card">
          <div className="feature-icon">✓</div>

          <div>
            <h3>Easy Booking</h3>
            <p>
              Simple and convenient online reservation.
            </p>
          </div>
        </div>


        <div className="feature-card">
          <div className="feature-icon">◷</div>

          <div>
            <h3>24/7 Support</h3>
            <p>
              Assistance whenever you need it.
            </p>
          </div>
        </div>

      </section>


      {/* ROOMS */}
      <section className="rooms-section" id="rooms">

        <div className="section-heading">
          <p>OUR ACCOMMODATIONS</p>

          <h2>Featured Rooms</h2>

          <span>
            Choose from our variety of modern and comfortable units.
          </span>
        </div>


        <div className="rooms-grid">

          {/* ROOM 1 */}
          <div className="room-card">

            <div
              className="room-image studio"
            ></div>

            <div className="room-content">

              <div className="room-title">
                <h3>Studio Room</h3>
                <strong>$80 <small>/ night</small></strong>
              </div>

              <p>
                A comfortable studio unit designed for
                short and relaxing stays.
              </p>

              <div className="room-info">
                <span>👤 2 Guests</span>
                <span>🛏 1 Bed</span>
              </div>

              <button className="room-button">
                View Details
              </button>

            </div>
          </div>


          {/* ROOM 2 */}
          <div className="room-card">

            <div
              className="room-image one-bedroom"
            ></div>

            <div className="room-content">

              <div className="room-title">
                <h3>1 Bedroom Suite</h3>
                <strong>$120 <small>/ night</small></strong>
              </div>

              <p>
                Spacious accommodation with a private
                bedroom and modern amenities.
              </p>

              <div className="room-info">
                <span>👤 3 Guests</span>
                <span>🛏 1 Bed</span>
              </div>

              <button className="room-button">
                View Details
              </button>

            </div>
          </div>


          {/* ROOM 3 */}
          <div className="room-card">

            <div
              className="room-image two-bedroom"
            ></div>

            <div className="room-content">

              <div className="room-title">
                <h3>2 Bedroom Suite</h3>
                <strong>$180 <small>/ night</small></strong>
              </div>

              <p>
                A larger suite suitable for families
                and groups.
              </p>

              <div className="room-info">
                <span>👤 6 Guests</span>
                <span>🛏 2 Beds</span>
              </div>

              <button className="room-button">
                View Details
              </button>

            </div>
          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-image"></div>

        <div className="about-content">

          <p className="section-label">
            ABOUT VISTACONDOTEL
          </p>

          <h2>
            Comfort and Security
            <br />
            in One Place
          </h2>

          <p>
            VistaCondotel provides comfortable accommodations
            with a secure and convenient reservation experience.
          </p>

          <p>
            Our system allows guests to browse rooms, make
            reservations, complete payments, and manage NFC
            access for their authorized stay.
          </p>

          <button className="learn-button">
            Learn More
          </button>

        </div>

      </section>


      {/* FOOTER */}
      <footer id="contact">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="logo footer-logo">
              <span className="logo-icon">⌂</span>
              <span>Vista<span>Condotel</span></span>
            </div>

            <p>
              Modern accommodation with convenient
              reservation and secure NFC access.
            </p>

          </div>


          <div className="footer-column">

            <h4>Navigation</h4>

            <a href="#home">Home</a>
            <a href="#rooms">Rooms</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>

          </div>


          <div className="footer-column">

            <h4>Contact</h4>

            <p>info@vistacondotel.com</p>
            <p>+63 900 000 0000</p>
            <p>Philippines</p>

          </div>

        </div>


        <div className="footer-bottom">
          <p>
            © 2026 VistaCondotel. All rights reserved.
          </p>

          <p>
            Secure Web-Based Condotel System
          </p>
        </div>

      </footer>

    </div>
  );
}

export default App;