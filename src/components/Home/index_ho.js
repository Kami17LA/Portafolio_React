import './index_ho.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

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
                <h2>Frontend Developer / Industrial Engineer / Project Managment</h2>
                <div className='img-download'>
                    <FontAwesomeIcon icon={faDownload} color='#FEF9E7'/>
                </div>

                <div className='button-contact'>
                    <a className='cv-button' href='https://drive.google.com/file/d/13GBRoxuRZRdCJw1CpaTykFzP23v4uDkX/view?usp=share_link' 
                    download="cv-KatherinE-Quispe.pdf">DOWNLOAD MY CV</a>
                    
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                    <Link to="/portfolio" className="flat-button">PORTFOLIO</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;