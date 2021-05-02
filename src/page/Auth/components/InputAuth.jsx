import React from 'react';
import { useField } from 'formik';

const InputAuth = ({
  // eslint-disable-next-line react/prop-types
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <label htmlFor={props.id || props.name}>{label}</label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default InputAuth;
