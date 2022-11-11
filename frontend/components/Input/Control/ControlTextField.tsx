import { Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '../BasicForm/TextField';

import { FormControlProps } from './types';

type ControlTextFieldProps<Schema> = TextFieldProps & FormControlProps<Schema>;

export function ControlTextField<T>(props: ControlTextFieldProps<T>) {
  const { control, helperText, ...restProps } = props;
  return (
    <Controller
      name={props.name as any}
      control={control}
      defaultValue={props.type === 'number' ? 0 : ('' as any)}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...restProps}
          error={!!error}
          helperText={error?.message || helperText}
          onChange={field.onChange}
          value={field.value as any}
        />
      )}
    />
  );
}
