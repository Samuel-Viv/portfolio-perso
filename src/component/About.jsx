import { useEffect } from "react";
import {Link} from "react-router-dom";

//css
import "../css/about.css";
//images
import Css from "../images/css-3.png";
import Git from "../images/git.png";
import Github from "../images/github.png";
import Htlm from "../images/html-5.png";
import JS from "../images/js.png";
import React from "../images/react.jpg";
import Vue from "../images/vue.jpg";


function About() {
  useEffect(() => {
    const hash = window.location.hash.substr(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
  return (
    <div>
      <section className="container py-2">
        <div className="carte row my-3 mx-2 p-5">
          <div className="apropos_presentation col-md-6 ">
            <div className="apropos">
              <h3 className="titres">Qui suis-je ? </h3>
            </div>
            <div className="paragraphe mt-3">
              <p>Actuellement en reconversion professionnelle, je suis passionné par l'informatique et les nouvelles technologie. Je suis actuellement une
                formation de <strong>développeur web</strong> au sein du Centre Européen de
                Formation (CEF). Depuis le début de cette formation (octobre 2023), j'ai acquis de solides bases pour travailler dans le domaine du <strong>développement</strong>.
              </p>
              <p>
              Résidant à Lyon, <strong>je suis à la recherche d'un stage de{" "}
                10 semaines minimum, dès que possible
                </strong> au sein d'une entreprise pour valider mon
                diplôme et approfondir mes connaissances dans le domaine du{" "}
                <strong>développement web et web mobile</strong>.
              </p>
              <p>
              Je porte une attention particulière à la qualité du code que je produis et je suis rigoureux et ce, dans le respect des bonnes pratiques du web.
              </p>
            </div>
            <div className="text-center">
              <button type="button" className="button-cv"><Link to="/Cv">Mon CV</Link></button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="hard-skills">
              <h3 className="titres">Compétences numériques</h3>

              <div className="logo ">
                <img className="img-fluid" src={Htlm} alt="Html5" />
                <img className="img-fluid" src={Css} alt="CSS3" />
                <img className="img-fluid" src={JS} alt="JavaScript" />
                <img className="img-fluid" src={Git} alt="git" />
                <img className="img-fluid" src={Github} alt="github" />
                <img className="img-fluid" src={Vue} alt="vue.js" />
                <img className="img-fluid" src={React} alt="React.js" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
