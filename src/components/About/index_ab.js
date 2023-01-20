import { faAngular, faCss3, faGitAlt, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index_ab.scss'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About <br/>  Me</h1>
                <p>I am an Industrial Engineer and Web Developer, I worked in a consulting company where I performed different roles such as customer service, event management, and project formulation for Mypes. Now I am looking for a Web Developer position, where I can apply my previous experience, learn, teach and grow together with the team.</p>
                <p>I love learning new things, technology allows me to do it through problem-solving, organization, process improvement, and automation.I am fascinated by how technology can solve problems in a simple and practical way.</p>
                <p>I would like to continue specializing in the Front-end part, of Web Development.Learn: VueJs and continue specializing in React and Angular.
</p>
            </div>

            <div className='icons-cont'>
                <div className='icons'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>

                    <div className='icon'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>

                    <div className='icon'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>

                    <div className='icon'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>

                    <div className='icon'>
                        <FontAwesomeIcon icon={faNodeJs} color='#68a063'/>
                    </div>

                    <div className='icon'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About;