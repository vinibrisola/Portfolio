import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vinibrisola2@gmail.com</h5>
            <a href="mailto:vinibrisola2@gmail.com" target="_blank" rel="noreferrer">send message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>vinicius brisola</h5>
            <a href="https://m.me/vinicius.brisola.1" target="_blank" rel="noreferrer">send message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+5551997905379</h5>
            <a href="https://api.whatsapp.com/send?phone=5551997905379&text=Ol%C3%A1%2C%20Vim%20pelo%20Portifolio" target="_blank" rel="noreferrer">send message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Digite seu nome' required />
          <input type="email" name="email" placeholder='Digite seu E-mail' required />
          <textarea name="message" placeholder='Digite sua mensagem' rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
