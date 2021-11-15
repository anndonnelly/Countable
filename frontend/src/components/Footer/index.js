import "./Footer.css";
function Footer (){
  return (
    <div className="footerDiv">
      <div className="socialMedia">
        <p>Created by: Ann Donnelly</p>
        <a className="icons" href="https://github.com/anndonnelly">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="githubLogo"
          />
        </a>
        <a className="icons" href="https://www.linkedin.com/in/ann-donnelly/">
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