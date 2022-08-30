import CardImage from './card-image/card-image';
import cardBg from '../../img/card-bg.png';
import CardText from './card-text/card-text';
import s from './style.module.scss';

const CONTENT_STRINGS = [
  `Поздравляю с днем рожденья! Пусть будет жизнь полна веселья, Не будет грусти и хлопот, А только счастье круглый год!`,
  'Желаю творческих успехов, Прекрасных дней, улыбок, смеха. Любви, душевного тепла, Как сказка, чтобы жизнь была!',
];

function Card(): JSX.Element {

  return (
    <div className={s.card}>
      <div className={s.card__container}>
        <CardImage classNames={[s.card__image]} src={cardBg} alt={'Поздравляшка'}/>
        <div className={s.card__text}>
          {
            CONTENT_STRINGS.map((contentString) => (
              <CardText
                classNames={[s.card__textElement]}
                content={contentString}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Card;
