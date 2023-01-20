import './index_ho.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

const Home = () => {

    return(
        <div className='container home-page' >
            <div className="text-zone">
                <h1>Hi, <br/> I'm   
                <img src={ LogoTitle } alt="developer" />
                @therine
                <br/>
                Web developer
                </h1>
                <h2>Frontend Developer / Javascript / Project Managment</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                <Link to="/portfolio" className="flat-button">PORTFOLIO</Link>
            </div>
        </div>
    )
}

export default Home;