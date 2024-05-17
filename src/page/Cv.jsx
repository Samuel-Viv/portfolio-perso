//component
import Header from "../component/Header";
import Footer from "../component/Footer";
//css
import "../assets/css/cv.css";
//images
import Samuel from "../assets/images/Samuel_vivier.png";

function Cv() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <header className="header-cv">
          <figure className="Photo_Sam my-5">
            <a href="./Photos_et_icones/Samuel_vivier.png" target="_blank">
              <img className="Profil" src={Samuel} alt="Samuel VIVIER" />
            </a>
          </figure>

          <h1>SAMUEL VIVIER</h1>
          <h2>Développeur web junior</h2>
        </header>

        <main >
            
          {/* <!--partie gauche  --> */}
          <div className="main-cv">
          <section className="bloc_left">
            <div>
              <h3>A propos</h3>
              <p className="paragraphe_gauche my-2">
                Passionné de développement web et web mobile, je suis actuellement en formation et à
                la recherche d'un <strong> stage de 10 semaines minimum </strong> pour concrétiser mes compétences et
                contribuer à des projets passionnants.
              </p>
            </div>

            <div className="my-2">
              <h3>Compétences</h3>
              <ul className="my-2">
                <li>Html-5 - Intermédiaire</li>
                <li>CSS - Intermédiaire</li>
                <li>JavaScrit - Intermédiaire</li>
                <li>Git et GitHub</li>
                <li>Vue.js</li>
                <li>React.js</li>
              </ul>
            </div>

            <div className="my-2">
              <h3>Softskills</h3>
                <p className="my-2 paragraphe_gauche">Créatif, Rigoureux, Autonome, Minutieux, Ponctuel, Travail en équipe</p>
            </div>

            <div className="my-2">
            <h3>Centres d'intérêts</h3>
            <ul className="my-2">
              <li>Fitness</li>
              <li>Karaté (loisir, ceinture bleu)</li>
              <li>Plongée sous-marine</li>
              <li>Jeux de société (plateau, statégie en équipe)</li>
              <li>Jeux vidéos (jeux de stratégie)</li>
              <li>Casse-tête et énigmes</li>
            </ul></div>

            <div className="my-2">
              <h3>Langues parlées</h3>
              <ul className="my-2">
                <li>Francais - Langue maternelle</li>
                <li>Anglais - Intermédiaire</li>
                <li>Japonais - Débutant</li>
              </ul>
            </div>

            <div className="my-2">
              <h3>Contact</h3>
              <ul className="my-2">
                <li>samvivier25@gmail.com</li>
                <li>06 78 06 92 61</li>
                <li>Permis B - véhiculé</li>
              </ul>
            </div>
          </section>
          {/* <!-- partie droite --> */}
          <section className="bloc_right">
            <article>
              <h3>Expériences professionnelles</h3>
              <h4>Opérateur machine chez Compagnie&Co, Dissay (86)</h4>
              <p>De juillet 2022 à août 2023</p>
              <ul>
                <li>Conditionnement</li>
                <li>Entretien machine</li>
                <li>Contrôle qualité</li>
              </ul>

              <h4>Pâtissier chez E.Leclerc, Châtellerault (86)</h4>
              <p>De juin 2021 à février 2022</p>
              <ul>
                <li>Mise en place</li>
                <li>Préparation et décoration d'entremets</li>
                <li>Confection de pâtisseries</li>
              </ul>

              <h4>Mission d'interim, Châtellerault (86)</h4>
              <p>De 2016 à 2020</p>
              <ul>
                <li>Mécanicien/Monteur à Fenwick</li>
                <li>Tourneur à SARL Rousseau & Fils</li>
                <li>Ouvrier sur commande numérique à Mécafi</li>
                <li>Ouvrier industriel aux Fonderies du Poitou</li>
              </ul>

              <h4>Pâtissier/Boulanger à l'Atelier de Maxime, Châtellerault (86)</h4>
              <p>De 2013 à 2016</p>
              <ul>
                <li>Confection de pains et de viennoiseries</li>
                <li>Confection de pâtisseries</li>
                <li>Décoration</li>

              </ul>
            </article>

            <article className="mb-3">
              <h3>Diplôme/Formations</h3>
              <h4>Titre Professionnel Développeur web et web mobile</h4>
              <p>De 2023 à 2024</p>
              <p>Centre Européen de Formation</p>

              <h4>CAP Pâtissier/Boulanger</h4>
              <p>De 2013 à 2016</p>
              <p>CFA de Chantejeau (86)</p>

              <h4>Bac pro Restauration</h4>
              <p>De 2010 à 2013</p>
              <p>Lycée Kyoto, Poitiers (86)</p>

              <h4>BEP Hôtellerie</h4>
              <p>De 2010 à 2012</p>
              <p>Lycée Kyoto, Poitier (86)</p>
            </article>

           
          </section>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Cv;
