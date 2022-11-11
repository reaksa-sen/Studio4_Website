import { HelperText, HelperTextProps } from './HelperText';
import { InputBase, InputBaseProps } from './InputBase';

export type TextFieldProps = InputBaseProps & HelperTextProps;

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { helperText, ...restProps } = props;

  return (
    <div>
      <div className="relative mt-2">
        <InputBase id={props.name} {...restProps} />
      </div>
      <HelperText error={props.error} helperText={helperText} />
    </div>
  );
};
