import { useNavigate } from "react-router-dom";
import "./GetStarted.css";
// GetStarted Component
const GetStarted = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/scheduleCall");
  };

  return (
    <div className="get-started-section">
      <div className="get-started-card">
        <div className="growth-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path
              fill="#4fc3ba"
              d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
            />
          </svg>
        </div>

        <h2 className="get-started-title">
          Invest in long terms portfolios to grow your wealth
        </h2>

        <p className="get-started-requirement">Requires Min ₹50,000</p>

        <ul className="benefits-list">
          <li className="benefit-item">
            <svg
              className="check-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="10" fill="#4fc3ba" />
              <path
                d="M9 12l2 2 4-4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Managed by experts</span>
          </li>
          <li className="benefit-item">
            <svg
              className="check-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="10" fill="#4fc3ba" />
              <path
                d="M9 12l2 2 4-4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Managed by experts</span>
          </li>
          <li className="benefit-item">
            <svg
              className="check-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="10" fill="#4fc3ba" />
              <path
                d="M9 12l2 2 4-4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Maximise your returns</span>
          </li>
        </ul>

        <button className="start-button" onClick={() => handleContinue()}>
          Get started
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
