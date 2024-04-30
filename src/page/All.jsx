//component
import Header from '../component/Header';
import About from '../component/About';
import Contact from '../component/Contact'
function All(){
    return(
        <div>
            <Header></Header>
            <main>
                <About></About>
                <Contact></Contact>
            </main>
        </div>
    )
}

export default All;