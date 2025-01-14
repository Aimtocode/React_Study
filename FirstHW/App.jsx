import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  
  let [글제목, b] = useState(['남자코트 추천', '강남 우동맛집','파이썬독학']);

  let logo = 'ReactBlog';
  return (
   <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>        
      </div>

      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
   </div>
   
  );
}

export default App;
