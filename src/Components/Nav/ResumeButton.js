import { Link } from "react-router-dom";
import "./ResumeButton.css";

function ResumeButton() {
  return (
    <Link
      className="navItem resumeButton"
      to="/DallasGiles.docx"
      target="_blank"
    >
      <h3>Resume</h3>
    </Link>
  );
}

export default ResumeButton;