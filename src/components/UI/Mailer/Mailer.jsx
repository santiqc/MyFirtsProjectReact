import React from 'react'
import emailjs from '@emailjs/browser';
export const Mailer = () => {

    const sendEmail = (event) => {
      event.preventDefault();
  
      emailjs.sendForm('service_jt1oons','template_88umcgl',event.target,'18IHO-Ep4xSiS73ze')
      .then(response => console.log(response))
      .catch(error => console.log(error))
      alert("mensaje enviado")
    }
    
  
    return (
      <div className='div-form'>
        <h1 className='title-form'>Contact Us</h1>
        <form className='form-mail' onSubmit={sendEmail}>
          <label>Name</label>
          <br />
          <input type="text" name='user_name' />
          <hr />
  
          <label>Email</label>
          <input type="email" name='user_email' />
          <hr />
  
          <label>Message</label>
          <textarea name="user_message" id="" cols="30" rows="10"></textarea>
          <hr />
          <button>Send</button>
        </form>
      </div>
    )
  }
