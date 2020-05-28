import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input } from "antd";

const FormItem = Form.Item;

/* This component works kinda like a function. It is a template
for an input, and we can pass values */

export const InputField: React.SFC<FieldProps<any> & {}> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <FormItem help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
      <Input
        {...field}
        {...props} // spreading the field and the props to put all of their things in our template input
      />
    </FormItem>
  );
};

/* 
I will leave here as reference how an input field was before. It can
now be rendered by this template

values, handleChange, handleBlur, handleSubmit, touched, errors were coming from the props

<FormItem
  help={touched.email && errors.email ? errors.email : null}
  validateStatus={touched.email && errors.email ? "error" : undefined}
>
  <Input
    name="email"
    prefix={<UserOutlined className="site-form-item-icon" />}
    placeholder="Email"
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
  />
</FormItem>
*/
