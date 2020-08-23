import React from "react";
import "../Pages/Contact.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; //yup library to validate. Shortens the code

const initialValues = { name: "", email: "", comments: "" };
const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  comments: Yup.string().required("Required!"),
});

function Contact() {
  return (
    <Formik
      className="container"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>
       

          <div className="form-control">
            <label htmlFor="comments">Message</label>
            <Field as="textarea" id="comments" name="comments" />
            <ErrorMessage name='comments'/>
          </div>
        
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default Contact;
