import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Contacts() {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={style.formsBlock}>
              <div className={style.inputForm}>
                <Field type="" name="your name" placeholder="Your Name *" />
              </div>
              <div className={style.inputForm}>
                <Field type="email" name="email" placeholder="Your email *" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className={style.inputForm}>
                <Field type="" name="theme" placeholder="Write a Subject" />
              </div>
              <div className={style.inputForm}>
                <Field type="textarea" name="textarea" placeholder="Your message" />
              </div>
              <button className={style.button} type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>

      </div>
      {/*         <form className={style.form}>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="E-mail"></input>
          <textarea placeholder="message"></textarea>
        </form>
        <button type="submit" className={style.button}>Send</button> */}

    </div>

  );
}

export default Contacts;
