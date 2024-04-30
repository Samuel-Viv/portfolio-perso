import '../css/contact.css'
function Contact(){
    return(
        
        <div className="container pb-3">
        <div className="carte row mx-2 p-5">
            <div className="col-md-6 text-center">
                <h3>Contact</h3>
                <div className="contact ">
                    <p className="m-1"><a href="mailto:samvivier25@gmail.com"
                            className="text-decoration-none">samvivier25@gmail.com</a></p>
                    <p className="m-1"><a href="tel:0678069261" className="text-decoration-none">06.78.06.92.61</a></p>
                </div>
            </div>

            <div className="col-md-6 text-center">
                <h3>Réseaux sociaux</h3>
                <div className="reseaux">
                    <a href="https://www.linkedin.com/in/samuel-vivier-57a4a61a3/"> <i className="fa-brands fa-linkedin icon-48"></i></a>
                    <a href="https://github.com/Samuel-Viv"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>

            
        </div>
    </div>
    
    )
}

export default Contact;