import React from "react";
import { useParams } from "react-router-dom";
//component
import Header from "../component/Header";
import Footer from "../component/Footer";
//carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//css
import "../css/detail.css";
function ProjectDetail({ projectsData }) {
  const { id } = useParams();
  const filteredProjects = projectsData.filter((project) => project.id === id);

  if (filteredProjects.length === 0) {
    return <div>Projet non trouvé</div>;
  }

  const project = filteredProjects[0];
  return (
    <div>
      <main>
        <Header></Header>
        <div className="container py-2">
          <div className="card carte my-3 mx-2 p-5">
            
            <Carousel className="carousel">
              <div>
                <img src={project.image} className="img-fluid" alt={project.titre} />
              </div>
              <div>
                <img src={project.image1} className="img-fluid" alt={project.titre} />
              </div>
              <div>
                <img src={project.image2} className="img-fluid" alt={project.titre} />
              </div>
              <div>
                <img src={project.image3} className="img-fluid" alt={project.titre} />
              </div>
            </Carousel>
            <div className="separation"></div>
            <h3 className="text-center py-2">{project.titre}</h3>
            <div className="text">
            <p><strong>Description du projet:</strong> {project.description}</p>
            <p>
              <strong>Technologies utilisées:</strong> {project.technologie}
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href={project.versionning} target="_blank" rel="noopener noreferrer">
                {project.versionning}
              </a>
            </p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default ProjectDetail;
