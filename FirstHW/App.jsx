/* eslint-disable */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




let logo = 'ReactBlog';

function App() {



  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집','파이썬독학']);
  
 
  let [따봉,따봉변경] = useState([0,0,0]);
  // let [따봉,따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [날짜, 날짜변경] = useState([]);
  

  return (

   <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>        
      </div>      
     <button onClick= {()=>{
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
      }}>가나다순정렬</button>

      <button onClick= {()=>{
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}>글수정</button>
      
    
      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i); }}>{ 글제목[i] } 
                <span onClick={(e)=>{e.stopPropagation(); let copy = [...따봉]; copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}>👍</span> {따봉[i]} </h4> 
              <p>2월 17일 발행</p> 
              <p>{날짜[i]}</p>
            
              <button onClick= {()=>{let del = [...글제목]; del.splice(i, 1); console.log(del); 글제목변경(del)}}>삭제</button>  
            </div>
            )
        })
      }

      <input onChange= {(e)=>{ 
          입력값변경(e.target.value);
       }} />
       <button onClick= {()=>{let add = [...글제목]; 
          if (입력값 == "") {
            alert("다시 입력해주세요")
          }
          else { 
            add.unshift(입력값);
            글제목변경(add)
            let copy = [...날짜];
            copy.unshift(new Date().toLocaleString());
            날짜변경(copy);
          }
          }}>글발행</button>
      {
        //state도 함께 props에 넣을 수 있구나
        modal == true? <Modal title = {title} 글제목변경= {글제목변경} 글제목= {글제목}/> : null
      }
    </div>
    );
}




function Modal(props) {
    return(

      <div className="modal" style= {{background : props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{ let copy = [...props.글제목]; 
          copy[0] = '여자 코트 추천'; props.글제목변경(copy)}}>글수정</button>
        
      </div>
    )
  }





export default App;
