import './contact.css'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          
          <div className="contact__info">
            <div className="contact__card">
            <i className="contact__card-icon uil uil-phone"></i>
            <h3 className="contact__card-title">Phone</h3>
              
              <span className='contact__details'>+91 9779865975</span>
            </div>
          </div>
        </div>

        <div className="contact__content">
          
          <div className="contact__info">
            
            <div className="contact__card">
            <i className="contact__card-icon uil uil-whatsapp"></i>
            <h3 className="contact__card-title">Whatsapp</h3>
              
              <span className='contact__details'>+91 9779865975</span>
            </div>
          </div>
        </div>

        <div className="contact__content">
          
          <div className="contact__info">
          
            <div className="contact__card">
            <i className="contact__card-icon uil uil-envelope-edit"></i>
            <h3 className="contact__card-title">Email</h3>
              
              <span className='contact__details'>aashinagpal2005@gmail.com</span>
              <br></br>
              <span className='contact__details'>anagpal1_be22@thapar.edu</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact