import React, { FC } from 'react';

interface ButtonProps {
  name: string,
  disabled: any
  handleSubmit: () => void
  typeBtn: string
}

const Button: FC<ButtonProps> = ({
  name, 
  disabled, 
  handleSubmit,
}) => (
  <button
    className="auth__form-btn btn btn__size-medium btn--color"
    type="submit"
    disabled={disabled}
    onClick={handleSubmit}
  >
    {name}
  </button>
);

export default Button;
