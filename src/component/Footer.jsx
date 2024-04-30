import '../css/footer.css'

function Footer() {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="row text-center">
            <address class="col-md-6 py-3 px-3">
              <p class="name">Samuel VIVIER</p>
              <div className='my-2'>
              <div>
                <a href="mailto: samvivier25@gmail.com">samvivier25@gmail.com</a>
              </div>
              <div>
                <a href="telto:06.78.06.92.61">06.78.06.92.61</a>
              </div>
              </div>
              <div class="icons">
                <a
                  href="https://github.com/Samuel-Viv"
                  target="_blank"
                >
                  <i class="fa-brands fa-github icon-48"></i>
                </a>

                <a href="https://www.linkedin.com/in/samuel-vivier-57a4a61a3/" target="_blank">
                  <i class="fa-brands fa-linkedin icon-48"></i>
                </a>
              </div>
            </address>

          

            <div class="footer_realisation col-md-6 py-3 px-3">
              <h5>Mes dernières réalisations</h5>
              <div class="lien_mentions">
                <a class="icon-link " to="/">
                  <i class="fa-solid fa-chevron-right "></i>Trouve ton Artisan !
                </a>
              </div>

              <div class="lien_mentions">
                <a class="icon-link " to="/">
                  <i class="fa-solid fa-chevron-right "></i>Portofolio avec React
                </a>
              </div>

              <div class="lien_mentions">
                <a class="icon-link " to="/realisation#realisation3">
                  <i class="fa-solid fa-chevron-right "></i>Espace bien-être
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="copyright ">
          <p class="copy text-white text-center my-0">
            <small>
              <i class="fa-regular fa-copyright"></i> Designed by Samuel VIVIER
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
