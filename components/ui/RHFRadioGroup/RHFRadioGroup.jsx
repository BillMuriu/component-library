import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export function RHFRadioGroup({ name, options = [], label }) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl {...field} error={!!error}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup>
            {options?.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id}
                control={<Radio checked={field.value === option.id} />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}
