import classNames from 'classnames';

export interface HelperTextProps {
  /**
   * Helper's content
   */
  helperText?: string;
  /**
   * 	If `true`, the input will take up the full width of its container.
   */
  error?: boolean;
}

export const HelperText: React.FC<HelperTextProps> = (props) => {
  const { error, helperText } = props;
  if (!helperText) return null;
  return (
    <p
      className={classNames('mt-1 text-sm', {
        'text-red-500': error,
        'text-gray-500': !error,
      })}
    >
      {helperText}
    </p>
  );
};
