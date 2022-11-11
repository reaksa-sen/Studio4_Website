import { Control, FieldName, UseFormSetValue } from 'react-hook-form';

export interface FormControlProps<Schema> {
  name: FieldName<Schema>;
  control: Control<Schema, object>;
  setValue?: UseFormSetValue<Schema>;
}
