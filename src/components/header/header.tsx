import Container from '../container/container';
import s from './style.module.scss';
import Button from '../button/button';

function Header(): JSX.Element {

  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__container}>
          <div className={s.header__buttons}>
            <Button buttonName={'Поменять поздравление'}/>
            <Button buttonName={'Поменять фон'}/>
          </div>
          <Button buttonName={'Выбрать праздник'}/>
        </div>
      </Container>
    </header>
  );
}

export default Header;
