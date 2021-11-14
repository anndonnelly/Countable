import "./Footer.css";
function Footer (){
  return (
    <div className="footerDiv">
      <div className="socialMedia">
        <label> Created by: Ann Donnelly</label>
        <a href="https://github.com/anndonnelly">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="githubLogo"
          />
        </a>
        <a href="https://www.linkedin.com/in/ann-donnelly/">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            alt="linkedInLogo"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;