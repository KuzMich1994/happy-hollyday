import s from './style.module.scss';

type ButtonProps = {
  onClick?: () => void;
  buttonName: string;
}

function Button({buttonName, onClick}: ButtonProps): JSX.Element {

  return (
    <button
      className={s.button}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}

export default Button;
