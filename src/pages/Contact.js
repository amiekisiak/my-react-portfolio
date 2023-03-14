import { useRef } from "react";
import { Transition } from 'react-transition-group';
import { useForm } from 'react-hook-form';
import contactImg from "../assets/img/icons8-mailbox.svg";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const formRef = useRef(); // Create a ref for the form element
  const transitionRef = useRef(); // Create a ref for the Transition element

  const onSubmit = async () => {
    const formData = new FormData(formRef.current); // Access form data using the ref
    const { name, email, subject, message } = Object.fromEntries(formData.entries());

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
  };

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
            <img className='contact-img' src={contactImg} alt="Contact Us"/>
              <div className ='Contact-me'>Contact Me!</div>
              <Transition in={true} timeout={duration} nodeRef={transitionRef}>
                {(state) => (
                  <form
                    id='contact-form'
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state]
                    }}
                  >
                    {/* Row 1 of form */}
                    <div className='row formRow'>
                      <div className='col-6'>
                        <input
                          type='text'
                          name='name'
                          {...register('name', {
                            required: { value: true, message: 'Please enter your name' },
                            maxLength: {
                              value: 30,
                              message: 'Please use 30 characters or less'
                            }
                          })}
                          className='form-control formInput'
                          placeholder='Name'
                        ></input>
                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                      </div>
                      <div className='col-6'>
                        <input
                          type='email'
                          name='email'
                          {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                          })}
                          className='form-control formInput'
                          placeholder='Email address'
                        ></input>
                        {errors.email &&<span className='errorMessage'>Please enter a valid email address</span>}
                      </div>
                    </div>
                    {/* Row 2 of form */}
                    <div className='row formRow'>
                      <div className='col-12'>
                        <input
                          type='text'
                          name='subject'
                          {...register('subject', {
                            required: { value: true, message: 'Please enter a subject' },
                            maxLength: {
                              value: 75,
                              message: 'Subject cannot exceed 75 characters'
                            }
                          })}
                          className='form-control formInput'
                          placeholder='Subject'
                          ></input>
                          {errors.subject && <span className='errorMessage'>{errors.subject.message}</span>}
                          </div>
                          </div>
                          {/* Row 3 of form */}
                          <div className='row formRow'>
                          <div className='col-12'>
                          <textarea
                          name='message'
                          {...register('message', {
                          required: true
                          })}
                          className='form-control formInput'
                          placeholder='Message'
                          ></textarea>
                          {errors.message && <span className='errorMessage'>Please enter a message</span>}
                          </div>
                          </div>
                          {/* Row 4 of form */}
                          <div className='row formRow'>
                          <div className='col-12'>
                          <button type='submit' className='btn btn-primary'>
                          Submit
                          </button>
                          <button
                          type='button'
                          className='btn btn-danger'
                          onClick={() => {
                          reset();
                          }}
                          >
                          Clear
                          </button>
                          </div>
                          </div>
                          </form>
                          )}
                          </Transition>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          );
                          };
                          
                          export default ContactForm;
