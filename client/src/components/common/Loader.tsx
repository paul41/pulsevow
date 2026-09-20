import "../../styles/loader.css";

type LoaderProps = {
  message?: string;
  fullScreen?: boolean;
};

export default function Loader({
  message = "Loading intelligence...",
  fullScreen = false,
}: LoaderProps) {
  return (
    <div className={`loader-wrapper ${fullScreen ? "loader-fullscreen" : ""}`}>
      <div className="pulse-loader">
        <div className="pulse-mark">P</div>

        <div className="pulse-loader-content">
          <div className="pulse-loader-line">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="pulse-loader-message">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}