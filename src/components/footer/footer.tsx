import Container from '../container/container';
import s from './style.module.scss';
import {ReactComponent as VKIcon} from '../../img/vk.svg';
import {ReactComponent as PinterestIcon} from '../../img/pinterest.svg';
import {ReactComponent as StumbleuponIcon} from '../../img/stumbleupon.svg';
import {ReactComponent as TGIcon} from '../../img/tg.svg';

const SOCIALS = [
  {
    id: 1,
    url: 'https://vk.com/methed',
    icon: VKIcon,
  },
  {
    id: 2,
    url: 'https://t.me/methed_chat_frontend',
    icon: TGIcon,
  },
  {
    id: 3,
    url: 'https://pinterset.com',
    icon: PinterestIcon,
  },
  {
    id: 4,
    url: 'https://stumbleupon.com',
    icon: StumbleuponIcon,
  },
]

function Footer(): JSX.Element {

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer__container}>
          <div className={s.footer__contacts}>
            <p className={s.footer__contactsItem}>Design: <a className={s.footer__contactsLink} href={'https://t.me/Mrshamallowww'} target={'_blank'}>Anastasia Ilina</a></p>
            <p className={s.footer__contactsItem}>Сoder: <a className={s.footer__contactsLink} href={'https://t.me/sergey_kuzmichev'} target={'_blank'}>Sergey Kuzmichev</a></p>
            <p className={s.footer__contactsItem}>&copy; HBCard, 2022</p>
          </div>
          <ul className={s.footer__socials}>
            {
              SOCIALS.map((social) => (
                <li className={s.footer__socialsItem} key={social.id}>
                  <a target={'_blank'} className={s.footer__socialsLink} href={social.url}>{<social.icon/>}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
