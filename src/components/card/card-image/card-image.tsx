
type CardImageProps = {
  src: string;
  alt: string;
  classNames: string[];
}

function CardImage({alt, src, classNames}: CardImageProps): JSX.Element {

  return (
    <img className={`${[...classNames]}`} src={src} alt={alt}/>
  );
}

export default CardImage;
