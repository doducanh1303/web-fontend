import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";
import { Controller } from "react-hook-form";
function QuantityField(props) {
  const { name, form, label } = props;
  return (
    <Controller
      name={name}
      control={form.control}
      render={(onChange, value, name) => {
        <InputNumber id={name} onChange={onChange} label={label} />;
      }}
    />
  );
}

QuantityField.propTypes = {};

export default QuantityField;
