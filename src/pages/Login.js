import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleProfileClick = (userName) => {
    navigate("/landing", { state: { userName } });
  };

  return (
    <div className="profile-selection-container">
      <h1>Who's Watching?</h1>
      <div className="profiles">
        <div className="profile-card" onClick={() => handleProfileClick("Ali Shahrez")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Ali Shahrez"
          />
          <p>Ali Shahrez</p>
        </div>
        <div className="profile-card" onClick={() => handleProfileClick("Zaema Faisal")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Zaema Faisal"
          />
          <p>Zaema Faisal</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
