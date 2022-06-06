import React from "react";

const FormDetail = React.memo(function FormDetail({ input, onChangeHandle }) {
  const { name, value, label } = input;
  return (
    <div>
      <label>{label}</label>
      <input
        disabled={name === 'email'}
        name={name}
        type={name === 'dob' ? 'date' : 'text'}
        value={name === 'dob' ? value.slice(0, value.indexOf("T")) : value}
        onChange={(event) => onChangeHandle(event)}
      />
    </div>
  );
});

export default FormDetail;
