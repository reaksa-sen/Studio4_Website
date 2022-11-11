import { Controller } from 'react-hook-form';
import { TextAreaField, TextAreaFieldProps } from '../BasicForm/TextAreaField';

import { FormControlProps } from './types';

type ControlTextAreaFieldProps<Schema> = TextAreaFieldProps & FormControlProps<Schema>;

export function ControlTextAreaField<T>(props: ControlTextAreaFieldProps<T>) {
  const { control, helperText, ...restProps } = props;
  return (
    <Controller
      name={props.name as any}
      control={control}
      defaultValue={'' as any}
      render={({ field, fieldState: { error } }) => (
        <TextAreaField
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
