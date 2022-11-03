import React from 'react'
import ActorsPerson from './ActorsPerson'


export default function Actors(props) {
  return (
      <div>
            <h1>Рөлдерде</h1>
            <div className='actorsGroup'> 
            <ActorsPerson ActorsAvaUrl = "https://cdn.qazaqstan.tv/20211129-akhmet-01.jpg?w=300" 
            RoleName = "Ахмет Байтұрсынұлы"
            ActorsName = "Актер Байғали Есенәлиев"/>

            <ActorsPerson ActorsAvaUrl = "https://cdn.qazaqstan.tv/20211129-akhmet-05.jpg?w=300" 
            RoleName = "Бәдрисафа Мұхамедсадыққызы"
            ActorsName = "Актриса Майя Веронская"/>

            <ActorsPerson ActorsAvaUrl = "https://cdn.qazaqstan.tv/20211129-akhmet-03.jpg?w=300" 
            RoleName = "Mіржақып Дулатұлы"
            ActorsName = "Актер Бақыт Қажыбаев"/>

            <ActorsPerson ActorsAvaUrl = "https://cdn.qazaqstan.tv/20211129-akhmet-04.jpg?w=300" 
            RoleName = "Әліби Жангелдин"
            ActorsName = "Актер Азат Сейтметов"/>

            <ActorsPerson ActorsAvaUrl = "https://cdn.qazaqstan.tv/20211129-akhmet-02.jpg?w=300" 
            RoleName = "Әлихан Бөкейханов"
            ActorsName = "Актер Бауыржан Қаптағай"/>
            </div>
      
      </div>

    
  )
}
