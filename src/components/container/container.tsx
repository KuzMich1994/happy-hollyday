import {ReactNode} from 'react';
import s from './style.module.scss';

type ContainerProps = {
  children: ReactNode;
}

function Container({children}: ContainerProps): JSX.Element {

  return (
    <div className={s.container}>
      {children}
    </div>
  );
}

export default Container;
