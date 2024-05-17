import {Link} from "react-router-dom";
import projectsData from "../assets/data/projectsData.json"
import "../assets/css/footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row text-center">
            <address className="col-md-6 py-3 px-3">
              <p className="name">Samuel VIVIER</p>
              <div className="my-2">
                <div>
                  <p>samvivier25@gmail.com</p>
                </div>
                <div>
                  <a href="telto:06.78.06.92.61">06.78.06.92.61</a>
                </div>
              </div>
              <div className="icons">
                <a href="https://github.com/Samuel-Viv" target="_blank">
                  <i className="fa-brands fa-github icon-48"></i>
                </a>

                <a href="https://www.linkedin.com/in/samuel-vivier-57a4a61a3/" target="_blank">
                  <i className="fa-brands fa-linkedin icon-48"></i>
                </a>
              </div>
            </address>

            <div className="footer_realisation col-md-6 py-3 px-3">
              <h5>Mes dernières réalisations</h5>
              <div className="py-2">
              <ul className="list-unstyled">
                {projectsData.map((project)=>
                <li key={project.id}>
                  <Link to={`/project/${project.id}`}> <i className="fa-solid fa-chevron-right "></i> {project.titre} </Link>
                </li>
              )}
              </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright ">
          <p className="copy text-white text-center my-0">
            <small>
              <i className="fa-regular fa-copyright"></i> Designed by Samuel VIVIER
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
