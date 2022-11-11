import { HelperText, HelperTextProps } from './HelperText';
import { TextAreaBase, TextAreaBaseProps } from './TextAreaBase';

export type TextAreaFieldProps = TextAreaBaseProps & HelperTextProps;

export const TextAreaField: React.FC<TextAreaFieldProps> = (props) => {
  const { helperText, ...restProps } = props;

  return (
    <div>
      <div className="relative mt-2">
        <TextAreaBase {...restProps} />
      </div>

      <HelperText error={props.error} helperText={helperText} />
    </div>
  );
};
