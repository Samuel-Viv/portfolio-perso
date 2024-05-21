//component
import Header from '../component/Header';
import About from '../component/About';
import Realisation from '../component/Realisation';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
function All(){
    return(
        <div>
            <Header></Header>
            <main>
                <About></About>
                <Realisation></Realisation>
                <Contact></Contact>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default All;