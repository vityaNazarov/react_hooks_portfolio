import './style.css';

import linkedIn from './../../img/icons/linkedIn.svg';
import instagram from './../../img/icons/instagram.svg';
import gitHub from './../../img/icons/gitHub.svg';
import telegram from './../../img/icons/telegram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/viktor-nazarov/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/_ulianchuck_/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/vityaNazarov"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://t.me/jam_varenie"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram} alt="Link" width={42} height={42} />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© Made at home</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
