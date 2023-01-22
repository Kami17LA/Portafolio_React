import './index_co.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopesBulk, faMobileRetro } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact Me</h1>
                    <h2>Thank you for coming here... I would love to work with you!! so if you want to say hi, I'll be happy to meet you more! :)</h2>
                    <h2>What music relaxes you? Let's talk ...</h2>
                    <div className='contact-icons'>
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href='mailto:katherine.quispepantoja@gmail.com'
                                >
                                    <FontAwesomeIcon icon={faEnvelopesBulk} color='#F5F5DC'/>
                                </a>
                            </li>

                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href='https://wa.me/916192234'
                                >
                                    <FontAwesomeIcon icon={faMobileRetro} color='#25D366'/>
                                </a>
                            </li>

                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href='https://www.linkedin.com/in/katherine-milagros-quispe-pantoja-a563b51b2/'
                                >
                                    <FontAwesomeIcon icon={faLinkedin} color='#0e76a8'/>
                                </a>
                            </li>

                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href='https://github.com/Kami17LA'
                                >
                                    <FontAwesomeIcon icon={faSquareGithub} color='#86895d'/>
                                </a>
                            </li>
                
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact;