import { Link } from "react-router-dom";
import "../assets/css/home.css";


function Home() {
  return (
    <div>
      <main className="home">
        <div className="center text-center">
          <h1 >Samuel VIVIER</h1>
          <h2 className="py-5">Développeur Web et Web Mobile full stack</h2>
          <h3 >Bienvenue sur mon site </h3>
          <h3>Cliquez ici pour me découvrir</h3>
          <div className="containerChevron">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
          <button type="button" className="button">
            <Link to="/all">Me découvrir</Link>
          </button>
        </div>
      </main>
    </div>
  );
}
export default Home;
