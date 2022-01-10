import React from "react";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import { Button, InputNumber } from "antd";
import QuantityField from "./QuantityField";

function CartForm({ onSubmit = null }) {
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
  });
  const handleSubmitPro = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmitPro)}>
      <Controller
        control={form.control}
        rules={{
          maxLength: 100,
        }}
        render={({ onChange, onBlur, value }) => (
          <InputNumber onBlur={onBlur} onChange={onChange} value={value} />
        )}
      />
      <input type="submit" title="aaaaa" />
      sdas
    </form>
  );
}

CartForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default CartForm;
