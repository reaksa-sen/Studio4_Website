import { getStrapiMedia } from 'api/media';
import classNames from 'classnames';
import NextImage, { ImageProps } from 'next/image';
import { useState } from 'react';

type ImgProps = Pick<
  ImageProps,
  | 'width'
  | 'height'
  | 'className'
  | 'layout'
  | 'objectFit'
  | 'objectPosition'
  | 'alt'
  | 'placeholder'
>;
interface Props extends ImgProps {
  image: any;
  size?: 'T' | 'S' | 'M';
}

const Image: React.FC<Props> = props => {
  const {
    alt,
    className,
    image,
    size,
    width,
    height,
    layout,
    objectFit,
    objectPosition,
    placeholder
  } = props;
  const { name = '' } = image?.data?.attributes || {};

  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  return (
    <NextImage
      // https://jagad.dev/posts/custom-image-transition-in-nextjs-with-tailwind-css
      className={classNames(
        className,
        'bg-gray-300 transition duration-150',
        isReady ? 'scale-100 bg-gray-300 blur-0' : 'scale-120 blur-xl'
      )}
      priority
      layout={layout}
      width={width}
      height={height}
      objectFit={objectFit || 'cover'}
      objectPosition={objectPosition}
      src={getStrapiMedia(image, size)}
      alt={alt || name || ''}
      // placeholder="blur"
      blurDataURL={getStrapiMedia(image, 'T')}
      onLoadingComplete={onLoadCallback}
      placeholder={placeholder}
    />
  );
};

export default Image;
