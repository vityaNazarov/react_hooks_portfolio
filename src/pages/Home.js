import { NavLink } from 'react-router-dom';
import Header from './../components/header/Header';

const Home = () => {
  const hardSkills = [
    {
      title: 'HTML, CSS/(SASS), TailwindCSS',
    },
    // {
    //   title: 'CSS / (SASS)',
    // },
    {
      title: 'JavaScript, TypeScript',
    },
    // {
    //   title: 'TypeScript',
    // },
    {
      title: 'ReactJS, NextJS',
    },
    {
      title: 'GIT',
    },
    {
      title: 'CI/CD',
    },
    {
      title: 'Responsive layout, Adaptive layout',
    },
    {
      title: 'GitHub',
    },
    {
      title: 'Rest API, Trello, MongoDB',
    },
    {
      title: 'NodeJs, Express',
    },
    // {
    //   title: 'Trello',
    // },
    // {
    //   title: 'MongoDB',
    // },
    {
      title: '...',
    },
  ];

  const softSkills = [
    {
      title: 'Scrum and Agile',
    },
    {
      title: 'Accurate, Committed, Cooperative',
    },
    // {
    //   title: 'Committed',
    // },
    // {
    //   title: 'Cooperative',
    // },
    {
      title: 'Willingness to learn, Teamwork',
    },
    // {
    //   title: 'Teamwork',
    // },
  ];

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1 className="title-1">Technologies</h1>

          <ul className="content-list">
            {hardSkills.map(item => (
              <li className="hard-skills" key={item.title}>
                {item.title}
              </li>
            ))}
          </ul>

          <h1 className="title-1 soft-skills">Soft skills</h1>

          <ul className="content-list">
            {softSkills.map(item => (
              <li className="soft-skill-title" key={item.title}>
                {item.title}
              </li>
            ))}
          </ul>

          <h1 className="title-1 soft-skills">Languages</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <p className="language">English - Intermediate</p>
              <p className="language">Ukrainian - Native</p>
              <p className="pidorasi language">Russian - Native</p>
            </li>
          </ul>
          <div className="btn-projects-link">
            <NavLink to="/projects" className="btn ">
              view my projects
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
