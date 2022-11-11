import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';

function resolveInputClassName(fullWidth?: boolean, error?: boolean, className?: string): string {
  return classNames(
    className,
    fullWidth ? 'w-full' : '',
    error ? 'border-red-500 placeholder-red-500' : '',
    'block border border-gray-600 px-4 py-3 placeholder-gray-500'
  );
}

export interface InputBaseProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'id' | 'className' | 'disabled' | 'placeholder' | 'name' | 'type' | 'value' | 'onChange'
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

export const InputBase: React.FC<InputBaseProps> = (props) => {
  const { className, error, fullWidth, type = 'text', ...restProps } = props;
  return (
    <input
      type={type}
      autoComplete="off"
      className={resolveInputClassName(fullWidth, error, className)}
      {...restProps}
    />
  );
};
