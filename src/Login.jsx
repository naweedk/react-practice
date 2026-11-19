
import { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">

        {/* LEFT BRANDING PANEL */}
        <aside className="login-brand-panel">
          <div className="brand-header">
            <div className="brand-mark">NK</div>
            <span>ReactPractice.</span>
          </div>

          <div className="brand-content">
            <span className="brand-eyebrow">
              LEARN. BUILD. CREATE.
            </span>

            <h1>
              Welcome to your
              <span> development space.</span>
            </h1>

            <p>
              Explore projects, experiment with React and
              continue building your frontend development skills.
            </p>

            <div className="brand-features">
              <div className="brand-feature">
                <span className="feature-check">✓</span>
                <span>Modern React Development</span>
              </div>

              <div className="brand-feature">
                <span className="feature-check">✓</span>
                <span>Interactive UI Components</span>
              </div>

              <div className="brand-feature">
                <span className="feature-check">✓</span>
                <span>Practical Learning Projects</span>
              </div>
            </div>
          </div>

          <div className="brand-bottom">
            <div className="brand-line"></div>
            <p>Designed and developed with React.</p>
          </div>

          <div className="brand-decoration decoration-one"></div>
          <div className="brand-decoration decoration-two"></div>
        </aside>

        {/* RIGHT LOGIN PANEL */}
        <section className="login-form-panel">
          <div className="login-form-container">

            <div className="mobile-brand">
              <div className="brand-mark">NK</div>
              <span>ReactPractice.</span>
            </div>

            <div className="login-heading">
              <span className="login-tag">
                WELCOME BACK
              </span>

              <h2>Sign in to your account</h2>

              <p>
                Enter your details below to access your dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <div className="login-field">
                <label htmlFor="login-email">
                  Email Address
                </label>

                <div className="login-input-wrapper">
                  <span className="input-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>

                  <input
                    id="login-email"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="username"
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="login-field">
                <label htmlFor="login-password">
                  Password
                </label>

                <div className="login-input-wrapper">
                  <span className="input-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="4" y="10" width="16" height="11" rx="2" />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                    </svg>
                  </span>

                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME */}
              <div className="login-options">
                <label className="remember-option">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) =>
                      setRememberMe(event.target.checked)
                    }
                  />

                  <span>Remember me</span>
                </label>

                <span className="forgot-password">
                  Forgot password?
                </span>
              </div>

              {/* ERROR */}
              {error && (
                <p className="login-error" role="alert">
                  {error}
                </p>
              )}

              {/* SUBMIT */}
              <button type="submit" className="login-button">
                Sign In
                <span>→</span>
              </button>

            </form>

            <div className="login-divider">
              <span>SECURE ACCESS</span>
            </div>

            <p className="login-bottom-text">
              React Practice Project
              <span> · </span>
              Built for continuous learning
            </p>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Login;
