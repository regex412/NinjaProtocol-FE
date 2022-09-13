import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import Layout from '../../components/Layout';
import './style.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [captchaKey, setCaptchaKey] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [expired, setExpired] = useState(false);

  const handleOnChange = () => {
    setExpired(!expired);
  };

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setCaptchaKey(captchaKey + 1);
    setExpired(false);
  };

  const handleEmailSend = () => {
    if (name && email && message) {
      let params = {
        from_name: name,
        from_email: email,
        message: message,
      };
      emailjs
        .send(
          'service_3aot2qu',
          'template_l15zgtg',
          params,
          'user_zjZJlIOjCgPUfYjFUBc8b'
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            reset();
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    } else {
      return;
    }
  };

  return (
    <Layout isPositionFixed={true}>
      <div className='contact-container'>
        <div className='container-box'>
          <div className='discord-image'>
            <a href='https://discord.com/invite/ninjaprotocol' target='_blank' rel="noopener noreferrer">
              <img
                className='discord-img'
                alt=''
                src='/images/big-discord.png'
              />
            </a>
          </div>
          <div className='form-container'>
            <div className='form-box'>
              <p className='form-title'>Contact us</p>
              <label className='form-lb'>
                <input
                  required
                  value={name}
                  className='form-input'
                  type='text'
                  placeholder='Name'
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
              <label className='form-lb'>
                <input
                  required
                  value={email}
                  type='email'
                  placeholder='Email'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>
              <label className='form-lb form-textarea'>
                <textarea
                  className='form-text'
                  value={message}
                  type='text'
                  placeholder='Message'
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </label>
              <div className='captcha'>
                <ReCAPTCHA
                  className='g-recaptcha'
                  sitekey='6LeefTgdAAAAAMaiwlt1wmDVeQNXG_q4SpKSJ97U'
                  onChange={handleOnChange}
                  key={captchaKey}
                />
              </div>
              <div className='button-box'>
                <div className={expired ? 'submit-box' : 'submit-box-expired'}>
                  <button
                    disabled={!expired}
                    className='form-submit'
                    onClick={handleEmailSend}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className='midline'></div>
            <div className='form-text-box'>
              <p className='box-text'>
                Our team is always available at The DOJO Come join us!
              </p>
              <div className='text-box-submit'>
                <a
                  href='https://discord.com/invite/ninjaprotocol'
                  target='_blank'
                  className='text-box-sub'
                  rel = "noopener noreferrer"
                >
                  LET'S GO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
