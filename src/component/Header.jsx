import { Link, NavLink } from "react-router-dom";
//css
import "../css/header.css";
//data 
import projectsData from "./projectsData.json"

function Header() {

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand text-uppercase mx-3" to="/">
              samuel vivier
            </Link>
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li><NavLink to="/All"  className="nav-link text-uppercase" activeClassName="active">Accueil</NavLink></li>
               
              {projectsData.map((project)=>
                <li key={project.id}>
                  <NavLink to={`/project/${project.id}`} className="nav-link text-uppercase" activeClassName="active">{project.titre} </NavLink>
                </li>
              )}
               
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
