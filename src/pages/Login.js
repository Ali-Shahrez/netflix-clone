import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/landing");
  };

  return (
    <div className="main">
      <nav>
        <span>
          <img width="130" src="/assets/images/logo.svg" alt="Netflix Logo" />
        </span>
        <div>
          <button className="btn">English</button>
          <button className="btn btn-red-sm" onClick={handleRedirect}>Sign In</button>
        </div>
      </nav>

      <div className="box"></div>

      <div className="hero">
        <span>Enjoy big movies, hit series and more from Rs 149.</span>
        <span>Join today. Cancel anytime.</span>
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="hero-buttons">
          <input type="text" placeholder="Email Address" />
          <button className="btn btn-red" onClick={handleRedirect}>
            Get Started &gt;
          </button>
        </div>
      </div>

      <div className="separation"></div>

      {/* Sections from your original HTML, directly added as React JSX */}
      <section className="first">
        <div>
          <span>Enjoy on your TV</span>
          <span>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </span>
        </div>
        <div className="secImg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>

      <div className="separation"></div>

      <section className="first second">
        <div className="secImg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
        </div>
        <div>
          <span>Download your shows to watch offline</span>
          <span>
            Save your favourites easily and always have something to watch.
          </span>
        </div>
      </section>

      <div className="separation"></div>

      <section className="first third">
        <div>
          <span>Watch everywhere</span>
          <span>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </span>
        </div>
        <div className="secImg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>

      <div className="separation"></div>

      <section className="first second">
        <div className="secImg">
          <img
            src="https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt=""
          />
        </div>
        <div>
          <span>Create profiles for kids</span>
          <span>
            Send children on adventures with their favourite characters in a space
            made just for them—free with your membership.
          </span>
        </div>
      </section>

      <div className="separation"></div>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {[
          "What is Netflix?",
          "How much does Netflix cost?",
          "What can I watch on Netflix?",
          "Where can I watch?",
        ].map((q, i) => (
          <div className="faqbox" key={i}>
            <span>{q}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 4V20"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </section>

      <div className="separation"></div>

      <footer>
        <div className="questions">Questions? Call 000-800-919-1694</div>
        <div className="footer">
          {[
            ["Investor Relations", "Jobs", "Ways to Watch", "Terms of Use"],
            ["Help Centre", "Account", "Speed Test", "Legal Notices"],
            ["Media Centre", "Privacy", "Cookie Preferences", "Corporate"],
            ["Contact Us", "Speed Test", "Legal Notices", "Only on Netflix"],
          ].map((col, i) => (
            <div className="footer-item" key={i}>
              {col.map((item, idx) => (
                <a key={idx} href="#faq">
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Login;
