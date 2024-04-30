//css 
import "../css/about.css"
//images
import Css from "../images/css-3.png";
import Git from "../images/git.png";
import Github from "../images/github.png";
import Htlm from "../images/html-5.png";
import JS from "../images/js.png";
import React from "../images/react.jpg";
import Vue from "../images/vue.jpg";


function About() {
  return (
    <div>
        
      
        
        <section className="container py-5">
          <div className="carte row my-3 mx-2 p-5">
            <div className="apropos_presentation col-md-6 ">
              <div className="apropos" id="apropos">
                <h3 className="titres ">À propos</h3>
              </div>
              <div className="paragraphe mt-3">
                <p>
                  Passionné par l'informatique et des nouvelles technologie, je suit actuellement
                  une formation de <strong>développeur web</strong> au seins du centre européen de
                  formation (CEF). J'ai acquis depuis le debut de cette formation de nombreuses
                  bases solides afin de pouvoir travailler dans le domaine du{" "}
                  <strong>développement</strong>.
                </p>
                <p>
                  Basé à Lyon, je suis à la recherche d'un stage de{" "}
                  <strong>10 semaines minimum</strong> au sein d'une entreprise pour validier mon
                  diplome et approfondir mes connaissance dans le domaine du{" "}
                  <strong>développement web et web mobile</strong>.
                </p>
                <p>
                  J'accorde une attention particulière à la qualité du code que j'écris et je
                  respecte les bonnes pratiques du web.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="hard-skills">
                <h3 className="titres">Hard Skills</h3>

                <div className="logo">
                  <img src={Htlm} alt="Html5" />
                  <img src={Css} alt="CSS3" />
                  <img src={JS} alt="JavaScript" />
                  <img src={Git} alt="git" />
                  <img src={Github} alt="github" />
                  <img src={Vue} alt="vue.js" />
                  <img src={React} alt="React.js" />
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </div>
  );
}

export default About;