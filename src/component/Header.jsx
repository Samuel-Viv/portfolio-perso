import { Link } from "react-router-dom";
//css
import "../css/header.css";

function Header() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand text-uppercase mx-3" href="/">
              samuel vivier
            </a>
            <button
              class="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/about">
                    A propos
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Portfolio">
                    Portfolio
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
