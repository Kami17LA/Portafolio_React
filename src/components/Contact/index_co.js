import './index_co.scss'

const Contact = () => {
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required/>
                                </li>

                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required/>
                                </li>

                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>

                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Contact;