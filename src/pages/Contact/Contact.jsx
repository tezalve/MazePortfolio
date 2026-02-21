import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_di8da0j', 'template_z5wyeob', form.current, 'Ou2alc25V1HC2HRGJ')
            .then((result) => {
                console.log(result.text);
                toast.success("_email received");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                toast.error("Failed to send email");
            });
    };

    return (
        <div>
            <div className='text-center'>
                <h1 className='display-1'> <span>{'<'}</span><span>contact_us</span><span>{'>'}</span> </h1>
                <p style={{ color: "khaki" }}>...send us an email;</p>
            </div>

            <div className='px-5'>
                <form ref={form} onSubmit={sendEmail} className='row g-0'>
                    <input
                        className='p-5 border-bottom col-md-12 border-info'
                        style={{ color: 'slateblue' }}
                        type="text"
                        name="from_name"
                        placeholder="_name*"
                        required
                    />
                    <br />
                    <input
                        className='p-5 border-bottom col-md-12 border-info'
                        style={{ color: 'slateblue' }}
                        type="email"
                        name="reply_to"
                        placeholder="_email*"
                        required
                    />
                    <br />
                    <textarea
                        className='p-5 border-bottom col-md-12 border-info'
                        style={{ color: 'slateblue' }}
                        name="message"
                        placeholder="_message*"
                        required
                    />
                    <br />
                    <input
                        className='btn btn-info col-md-2 mx-auto my-5'
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
        </div>
    );
};

export default Contact;
