import './index_co.scss'

const Contact = () => {
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact Me</h1>
                    <h2>Thank you for coming here... I would love to work with you!! so if you want to say hi, I'll be happy to meet you more! :)

</h2>
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