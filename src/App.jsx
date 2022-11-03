
import './App.css';
import Actors from './components/Actors/Actors';
import Avatar from './components/Avatar/Avatar';
import Name from './components/Name/Name';
import Ratings from './components/Ratings/Ratings';
import Review from './components/Review/Review';
import Text from './components/Text/Text';
// import Welcome from './Welcome';

function App() {
  // const username = "React";
  const parametrKino = "Режиссері: Мұрат Есжан Сценаристері: Мұрат Есжан, Ұларбек Нұрғалымұлы Басты кейіпкер: Байғали Есеналиев Рөлдерде: Бәдрисафа Мұхамедсадыққызы - Мая Веронская Тергеуші Cаңғытов – Нартай Сауданбекұлы Міржақып Дулатұлы – Бақыт Қажыбаев Әліби Жангелдин – Азат Сейтметов";

  return <div className='main'>
    {/* <Welcome username = {username}/>
    <Welcome username = {username}/>
    <Welcome username = {username}/> */} 
    <div className='name'> 
      <Name name = "Ахмет. Ұлт ұстазы"/>
    </div>
    
    <div >
      <div className='container'>
        <div>
          <Avatar avatarUrl = {'https://cdn.qazaqstan.tv/2021/11/29/1638157671675.jpg?w=540&h=675&format=jpg&resize=aspectfill&g=center'} 
          name = "Ахмет. Ұлт ұстазы"/>
        </div>
        <div className='parametr'>
          <Text ParametrText = {parametrKino}/>
          <Ratings/>
        </div>
      </div>
    
      <Text TitleText = "Кино туралы"/>
      <Text ParagraphText = "Сериалдың негізгі идеясы ретінде Ахмет Байтұрсынұлының: «Бай болу үшін кәсіп қылу керек, білімді болу үшін оқу керек, күшті болу үшін бірлік керек һәм осы керектердің жолында әрекет қылу керек» деген әйгілі сөзіндегі әрекет ұғымы алынып отыр.
Бұл сериалда ХХ ғасыр басындағы қазақ зиялыларының, оның ішінде Ахмет Байтұрсынұлының басынан кешкен қиын қыстау тағдыры баяндала отырып, ұлт мұраты жолында жасаған дамылсыз әркеті насихатталады."/>
      </div>

    <Actors />

    <Review 
      name = "Sherkhan"
      avatarUrl = {'http://user-life.com/uploads/posts/2018-08/1535615328_kak-udalit-avatarku-postavit-foto-sdelat-zagruzit-dobavit-telegramm-skayp-vayber-vatsap-windows-10.gif'}
      text = "Kerremet kino..."
      date = "03.11.2022 жыл"/>

    


  </div> 
}

export default App;
