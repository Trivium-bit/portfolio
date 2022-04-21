import React from 'react';
import style from './Contacts.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Contacts() {
  return (
    <div className={style.contactsBlock}>
      <div className={style.contactsContainer}>
        <Formik
          initialValues={{ email: '', name: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.name) {
              errors.name = 'Required';
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
              <Field className={style.inputForm} type="input" name="name" placeholder="Your Name *" />
              <ErrorMessage className={style.error} name="name" component="div" />
              <Field className={style.inputForm} type="email" name="email" placeholder="Your email *" />
              <ErrorMessage className={style.error} name="email" component="div" />
              <Field className={style.inputForm} type="input" name="theme" placeholder="Write a Subject" />
              <Field className={style.inputForm} type="textarea" name="textarea" placeholder="Your message" />
              <button className={style.button} type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>

  );
}

export default Contacts;
