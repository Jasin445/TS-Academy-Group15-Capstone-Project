import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-i">
        <h3>About</h3>
        <p>To God be the glory, this project was designed by Jason Dagana (Captain), Mark O. Ojieabu, Bethel Amadi, Alexander Hotonu, Henry Igbozurik, Eugene Acheampong, Amira Abdulhamid, Faith Ojo</p>
      </div>

      <hr />

      <div className="footer-ii">
        <span>©2026 Design by Amaka & Ifeoma A. </span>
        <div className="flex">
          <span>
            Built by{" "}
            <Link
              to={
                "https://github.com/Jasin445/TS-Academy-Group15-Capstone-Project"
              }
              className="footer-link"
            >
              Group 15.
            </Link>{" "}
            <br className="break-footer-note" />
            All rights reserved
          </span>
          <Link to={"https://tsacademyonline.com/"} className="footer-link">
            TSAcademy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
