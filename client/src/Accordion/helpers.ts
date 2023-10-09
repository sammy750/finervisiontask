import React, { useState, ChangeEvent } from "react";
import type { AvailableFields } from "./types";

const getInputProps = (
  fieldName: AvailableFields,
  fieldValue: string,
  updateFormData: (fieldName: AvailableFields, value: string) => void
) => {
  return {
    type: "text",
    name: fieldName,
    id: fieldName,
    value: fieldValue,
    onChange: (event: ChangeEvent<HTMLInputElement>) =>
      updateFormData(fieldName, event.target.value),
  };
};

export default getInputProps;
