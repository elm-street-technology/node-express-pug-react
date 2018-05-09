import React, { Component } from "react";
import Alert from "elevate-ui/Alert";
import Button from "elevate-ui/Button";
import Input from "elevate-ui/Input";
import Paper from "elevate-ui/Paper";
import ThemeProvider from "elevate-ui/ThemeProvider";
import withStyles from "elevate-ui/withStyles";
import { Field, Form, Formik } from "formik";
import Yup from "yup";

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // *client, no-referrer
  }).then((response) => response.json()); // parses response to JSON
}

class UserProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: props.error || false,
      success: props.success || false,
      user: props.user || {},
    };
  }

  render() {
    const { classes } = this.props;
    const { error, success, user } = this.state;
    return (
      <div className={classes.root}>
        <a href="/">
          <img
            src="/icons/pwa-icon-512x512.png"
            width="200"
            height="200"
            style={{ marginBottom: 24 }}
          />
        </a>
        {error && (
          <Alert color="danger" style={{ marginBottom: 24 }}>
            Error!
          </Alert>
        )}
        {success && (
          <Alert color="success" style={{ marginBottom: 24 }}>
            Success!
          </Alert>
        )}
        <Paper>
          <Formik
            initialValues={{
              firstName: user.firstName || "",
              lastName: user.lastName || "",
            }}
            validationSchema={() =>
              Yup.object().shape({
                firstName: Yup.string().required("First name is required"),
                lastName: Yup.string().required("Last name is required"),
              })
            }
            onSubmit={(values, { setSubmitting }) => {
              postData("/api/user-profile-react", values)
                .then((data) => {
                  setSubmitting(false);
                  this.setState(data);
                })
                .catch((error) => console.error(error));
            }}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid,
            }) => (
              <Form method="POST" noValidate className={classes.form}>
                <Field
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  component={Input}
                />
                <Field
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  component={Input}
                />
                <Button type="submit">Save and Continue</Button>
              </Form>
            )}
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "640px",
    margin: "0 auto",
    padding: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "0 auto",
  },
}))(UserProfileForm);
