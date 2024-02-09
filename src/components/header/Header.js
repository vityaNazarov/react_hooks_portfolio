import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-bg"></div>
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Victor</em>{' '}
          </strong>
          <br />
          i`m <em>WEB DEVELOPER</em>
        </h1>
        <div className="header__text">
          {/* <p>with passion for learning and creating</p> */}
        </div>
        <a
          href="https://vityanazarov.github.io/my_Portfolio/"
          target="_blank"
          rel="noreferrer"
          className="btn header__btn"
        >
          my CV
        </a>
      </div>
    </header>
  );
};

export default Header;
