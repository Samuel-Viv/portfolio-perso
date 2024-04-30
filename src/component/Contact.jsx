import '../css/contact.css'
function Contact(){
    return(
        
        <div class="container">
        <div class="carte row my-3 mx-2 p-5">
            <div class="col-md-6 text-center">
                <h3>Contact</h3>
                <div class="contact ">
                    <p class="m-1"><a href="mailto:samvivier25@gmail.com"
                            class="text-decoration-none">samvivier25@gmail.com</a></p>
                    <p class="m-1"><a href="tel:0678069261" class="text-decoration-none">06.78.06.92.61</a></p>
                </div>
            </div>

            <div class="col-md-6 text-center">
                <h3>Réseaux sociaux</h3>
                <div class="reseaux">
                    <a href="https://www.linkedin.com/in/samuel-vivier-57a4a61a3/"> <i class="fa-brands fa-linkedin icon-48"></i></a>
                    <a href="https://github.com/Samuel-Viv"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>

            
        </div>
    </div>
    
    )
}

export default Contact;