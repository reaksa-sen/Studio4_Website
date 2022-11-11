import classNames from 'classnames';
import { TextareaHTMLAttributes } from 'react';

export interface TextAreaBaseProps
  extends Pick<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'id' | 'disabled' | 'placeholder' | 'name' | 'value' | 'onChange' | 'rows'
  > {
  /**
   * If `true`, the input will indicate an error.
   */
  error?: boolean;
  /**
   * 	If `true`, the input will take up the full width of its container.
   */
  fullWidth?: boolean;
}

export const TextAreaBase: React.FC<TextAreaBaseProps> = (props) => {
  const { error, fullWidth, ...restProps } = props;
  return (
    <textarea
      className={classNames(
        fullWidth ? 'w-full' : '',
        error ? 'border-red-500  placeholder-red-500 ' : '',
        'block border border-gray-600 px-4 py-3 placeholder-gray-500'
      )}
      rows={4}
      {...restProps}
    />
  );
};
