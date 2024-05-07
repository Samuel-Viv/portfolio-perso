import React from "react";
import {Link} from "react-router-dom";
import projectsData from "./projectsData.json"; // Importez les données des projets
//css
import "../css/realisation.css";

function Realisation() {

  return (
    <div className="container">
      <div className="carte mx-2 p-3">
        <h3 className="mx-2">Mes réalisations</h3>

        <div className="row">
          {projectsData.map((project) => (
            <div className="carte-realisation p-3 col-md-4" key={project.id}>
              <div className="card carte-projet">
                <img className="card-img-top img-fluid" src={project.image} alt={project.titre} />
                <div className="card-body">
                  <div className="card-title text-center">
                    <h4>{project.titre}</h4>

                    <button type="button" className="button-rea"><Link to={`/project/${project.id}`}>Voir plus</Link></button>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Realisation;
