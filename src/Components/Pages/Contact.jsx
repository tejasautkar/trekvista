import React from "react";
import "../Pages/Contact.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; //yup library to validate. Shortens the code

const initialValues = { name: "", email: "",number:"", comments: "" };
const onSubmit = (values,onSubmitProps) => {
  document.getElementById('formthankyou').innerHTML("Thank you! We will contact you soon!")
  
  console.log("Form data", values);
  console.log("Submit Props",onSubmitProps)
  onSubmitProps.resetForm()
 
 
 
  
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format"),
  comments: Yup.string().required("Required!"),
  number: Yup.string()
    .length(10, "Enter a valid 10 digit mobile number")
    ,
});









function Contact() {
  return (
    <div className="justify-content-center">
      <h1 className="text-center">Contact Us</h1>
      <div id="formthankyou"></div>
      <div className="container form-group justify-content-center">
        <Formik
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
              <label htmlFor="number">Phone Number</label>
              <Field type="number" id="number" name="number" />
              <ErrorMessage name="number" />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Message</label>
              <Field as="textarea" id="comments" name="comments" />
              <ErrorMessage name="comments" />
            </div>

            <button id="submit" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Contact;
