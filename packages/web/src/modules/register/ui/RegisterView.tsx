import React, { PureComponent } from "react";
import { Form as AntForm, Button } from "antd"; // name conflict with Formik Form
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { validUserSchema } from "@cribswap/common";
import { InputField } from "../../shared/InputField";

const FormItem = AntForm.Item;

/* interfaces are the typescript definitions */
interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
  /* there's not always gonna be errors, so either it receives formikerrors
or null */
}

/* C is wrapped in a high order component withFormik, now we have access
to some props, which are */
/* touched is used to know when a field is being interacted with, eg
not show error messages before the user interacts. help is to show
the error on the field */
export class C extends PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Form
        /* using Form from Formik instead of the normal form saves us
      from having to do a onSubmit={handleSubmit}. Formik does 
      everything. */
        style={{ display: "flex" }}
      >
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            /* using the template InputField component just passing 
            the name and the extra unique things */
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            component={InputField}
          />
          <Field
            /* using the template InputField component just passing 
            the name and the extra unique things */
            name="password"
            type="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
            component={InputField}
          />
          <FormItem>
            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <a href="/">login now!</a>
          </FormItem>
        </div>
      </Form>
    );
  }
}

/* mapPropsToValues has access to the props in the parameters of 
the function. The props that where passed to this view 
and folowing you define the default values of your fields, which we
left "" (I am assuming you can make one of them default as a prop)
Formik requires to have the name of the input there!*/
/* handleSubmit will be called when the form is submited, the values
are the fields which can be expanded {}. The second parameters is the
formik bag  */
/* Formik has a integration with yup in a prop called
validationSchema */

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
