import React, { useState } from "react";

const FormDetail = React.memo(function FormDetail({ input, onChangeHandle }) {
  const { name, value, label } = input;
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={name === 'dob' ? 'date' : 'text'}
        value={name === 'dob' ? value.slice(0, 10) : value}
        onChange={(event) => onChangeHandle(event)}
      />
    </div>
  );
});

export default FormDetail;
