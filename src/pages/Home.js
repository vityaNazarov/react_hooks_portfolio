import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1 className="title-1">Tech skills</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, React Hooks, Redux/Redux
                toolkit, HTML, CSS, SASS, NPM, MaterialUI, StyledComponents,
                Responsive layout, GIT, GitHub, Parcel, Webpack, Rest API,
                Trello...
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>
                NodeJS, MongoDB ,Mongoose, Postman, Express, HTTP, CORS, JWT,
                Multer, Jest, Nodemailer, SendGrid, WebSockets
              </p>
            </li>
          </ul>

          <h1 className="title-1 soft-skills">Soft skills</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <p>
                Accurate, Committed, Cooperative, Willingness to learn, Teamwork
              </p>
            </li>
          </ul>

          <h1 className="title-1 soft-skills">Languages</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <p>English - Intermediate</p>
              <p>Ukrainian - Native</p>
              <p className="pidorasi">Russian - Native</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
