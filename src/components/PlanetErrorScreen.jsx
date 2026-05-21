import { AlertTriangle } from "lucide-react";

const ErrorScreen = ({ onRetry }) => {
  return (
    <section className="error-screen">
      <AlertTriangle size={38} color="#e53535" strokeWidth={1.5} />
      <h2>Something went wrong</h2>
      <p>
        We couldn't load the planet data. Please check your connection and try
        again.
      </p>
      {onRetry && (
        <button className="error-retry-btn" onClick={onRetry}>
          Try again
        </button>
      )}
    </section>
  );
};

export default ErrorScreen;