import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import styles from './ResponsiveImage.module.scss';

type ResponsiveImageProps = ImageProps & {
  caption?: string;
  linkTarget?: string;
};

const ResponsiveImage = (props: ResponsiveImageProps) => {
  const { caption, linkTarget, ...attributes } = props;

  return (
    <figure className={styles.wrapper}>
      {linkTarget ? (
        <Link href={linkTarget}>
          <a className={styles.link}>
            <Image alt={attributes.alt} layout="intrinsic" {...attributes} />
            {caption && (
              <figcaption className={styles.caption}>{caption}</figcaption>
            )}
          </a>
        </Link>
      ) : (
        <>
          <Image alt={attributes.alt} layout="intrinsic" {...attributes} />
          {caption && (
            <figcaption className={styles.caption}>{caption}</figcaption>
          )}
        </>
      )}
    </figure>
  );
};

export default ResponsiveImage;
