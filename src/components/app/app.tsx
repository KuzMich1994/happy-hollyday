import Footer from '../footer/footer';
import s from './style.module.scss';
import Header from '../header/header';
import Card from '../card/card';

function App() {
  return (
    <div className={s.container}>
      <Header/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
