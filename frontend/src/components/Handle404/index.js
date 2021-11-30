import { Link } from "react-router-dom";
import "./Handle404.css";
function Handle404() {
  return (
    <>
      <div className="handle404">
        <p>
          Oops! Looks like there's nothing here! Return to&nbsp;
          <Link to="/posts">Feed!</Link>{" "}
        </p>
      </div>
    </>
  );
}

export default Handle404;
