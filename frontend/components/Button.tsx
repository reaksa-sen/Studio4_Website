import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type Props = React.PropsWithChildren<{
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: (e: any) => void;
}>;

type NavButtonProps = React.PropsWithChildren<{
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  dense?: boolean;
}>;

const baseClassName = (dense?: boolean, fullWidth?: boolean) =>
  classNames(
    'cursor-pointer bg-primary-100 hover:bg-stone-600 font-bold inline-block text-center rounded ',
    'text-sm md:text-base text-white',
    dense ? 'py-2 px-2' : 'py-2 px-4',
    fullWidth ? 'w-full' : ''
  );

export const BaseButton: React.FC<Props> = ({ children, fullWidth, ...restProps }) => (
  <button className={baseClassName(false, fullWidth)} {...restProps}>
    {children}
  </button>
);

export const LinkButton: React.FC<NavButtonProps> = props => {
  const { children, dense, href, target } = props;
  return (
    <Link href={href} passHref>
      <a target={target}>{children}</a>
    </Link>
  );
};
