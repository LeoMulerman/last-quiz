import { useState } from 'react'
import React from 'react';
import './App.css';

const questions = [
  {
  title: 'Какая фамилия у Ильдара?',
  variants: ['Хулио', 'Мингазов', 'Романов'],
  correct: 1
  },
  {
    title: 'Какого цвета волосы у Рамиля?',
    variants: ['Кто это?', 'Рыжего', 'У него нет волос'],
    correct: 1
  },
{
  title: 'На чем ездит Рустам?',
  variants: ['Ходит пешком', 'На лошади', 'Reno'],
  correct: 0
},
{
  title: 'Какой рост у Ленара?',
  variants: ['190', '191', '170'],
  correct: 2
},
{
  title: 'Как обычно говорит Рамиль?',
  variants: ['А хуле!', ' Тааак...', 'Извольте, мессир'],
  correct: 1
}, 
{
  title: 'С какого города Ильдар?',
  variants: ['Нижний новгород', 'Сан-хосе-дела-баста', 'Бавлы'],
  correct: 2
},
{
  title: 'Какой национальности Ленар?',
  variants: ['Чуваш', 'Татарин', 'Эскимос'],
  correct: 1
}
]

function Game ({question, step, answer}) {
  let prog = step/questions.length*100;
  return (
    <div className='container-game'>
      <div className='progres-div' >
        <div style={{width: `${prog}%`}} className='progress'></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
       {question.variants.map((elem, index) => <li onClick={() => answer(index)} key={elem}>{elem}</li>)}
      </ul>
     
    </div>
  )
}

function Result ({count}) {
  let res;
  if (count <= 2 && count >=0) {
    res = 'Залупа'
  } else if (count >= 3 && count <= 5) {
    res = 'Хороший друг'
  } else if (count >= 6 && count <= 8) {
    res = 'Лучший друг'
  }
let description;
  if (res === 'Залупа') {
    description = 'Залупа ничего не знает о своих друзьях.'
  } else if (res === 'Хороший друг') {
    description = 'Хороший друг знает много о своих друзьях, но не все.'
  } else if (res === 'Лучший друг') {
    description = 'Поздравляем! Вы знакток своих друзей!'
  }
  return (
    <div className='container-result'>
      <h1>Вы ответили правильно на {count} вопроса</h1>
      <p>Ваш уровень: <span className='res'>{res}</span> </p>
      <p>{description}</p>
      <a href="/"><button className='zanovo'>Заново</button></a>
    </div>
  )
}
 
function App() {
const [step, setStep] = useState(0);
const [count, setCount] = useState(0);

let question = questions[step];

const answer = (index) => {
 
  setStep(step + 1);
  if (index === question.correct) {
    setCount(count + 1);
  }
} 


  return (
    <div className="App">
      
  { step !== questions.length  ? (<Game question={question} step={step} answer={answer} />): (<Result count={count}/>)}  

    </div>
  );
}

export default App;
