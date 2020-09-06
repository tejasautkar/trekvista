import React, { Fragment } from "react";
import "../Pages/Contact.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; //yup library to validate. Shortens the code

const initialValues = { name: "", email: "", number: "", comments: "" };

const notify = () =>
  toast.success(" Thank you! We will contact you soon", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const onSubmit = (values, onSubmitProps) => {
  notify();
  console.log("Form data", values);

  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required(" Required!"),
  email: Yup.string().required(" Required!").email("Invalid email format"),

  number: Yup.string()
    .required(" Required!")
    .length(10, "Enter a valid 10 digit mobile number"),
});

function Contact() {
  return (
    <Fragment>
      <div className=" form-group" id="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-control">
              <div className="text-center heading">
                <h1>Contact Us</h1>
                <hr></hr>
              </div>
              <div className="fieldform">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <div className="errormessage">
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div className="fieldform">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <div className="errormessage">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="fieldform">
                <label htmlFor="number">Phone Number</label>
                <Field type="number" id="number" name="number" />
                <div className="errormessage">
                  <ErrorMessage name="number" />
                </div>
              </div>
            </div>
            <div className="buttonHolder">
              <button id="submit" type="submit">
                Submit
              </button>
            </div>
            <ToastContainer />
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
}

export default Contact;
