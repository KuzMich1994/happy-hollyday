
type CardTextProps = {
  content: string;
  classNames: string[];
}

function CardText({content, classNames}: CardTextProps): JSX.Element {

  return (
    <p className={`${[...classNames]}`}>{content}</p>
  );
}

export default CardText;
