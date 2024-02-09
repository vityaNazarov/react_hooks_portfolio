import { NavLink } from 'react-router-dom';
import Header from './../components/header/Header';

const Home = () => {
  const hardSkills = [
    {
      title: 'HTML',
    },
    {
      title: 'CSS / (SASS)',
    },
    {
      title: 'JavaScript',
    },
    {
      title: 'TypeScript',
    },
    {
      title: 'ReactJS',
    },
    {
      title: 'GIT',
    },
    {
      title: 'Responsive layout',
    },
    {
      title: 'GitHub',
    },
    {
      title: 'Rest API',
    },
    {
      title: 'Trello',
    },
    {
      title: 'MongoDB',
    },
    {
      title: '...',
    },
  ];

  const softSkills = [
    {
      title: 'Accurate',
    },
    {
      title: 'Committed',
    },
    {
      title: 'Cooperative',
    },
    {
      title: 'Willingness to learn',
    },
    {
      title: 'Teamwork',
    },
  ];

  const qwe = qwe => {
    console.log(qwe);
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1 className="title-1">Hard skills</h1>

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
              wiew my projects
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
