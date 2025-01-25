import {Navbar, Nav, Container} from 'react-bootstrap';
import './App.css'
import { useState } from 'react';
import data from './data.js'

function App() {
  let [shoes] = useState(data)
  return (
    <div className="App">
      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"> </div>
      <div className="container">
        <div className="row"> 
        {
        shoes.map(function(a, i){
          let copy = [...shoes];
            return (
              <div className="col-md-4" key = {i}>
              <img src= {`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width= "80%"/>
              <h4>{copy[i].title}</h4>
              <p>{copy[i].price}</p>

              </div>
            )
          })
        } 
          {/* <Comp1 shoes = {shoes}></Comp1>
          <Comp2 shoes = {shoes}></Comp2>
          <Comp3 shoes = {shoes}></Comp3>
          <div className="col-md-4">
            <img src= "https://codingapple1.github.io/shop/shoes1.jpg" width= "80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src= "https://codingapple1.github.io/shop/shoes2.jpg" width= "80%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src= "https://codingapple1.github.io/shop/shoes3.jpg" width= "80%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div> */}
        </div>
      </div> 
    

    </div> 
  );
}

// function Comp1(props) {
//   let copy = [...props.shoes];
//   return (
//     <div className="col-md-4">
//     <img src= "https://codingapple1.github.io/shop/shoes1.jpg" width= "80%"/>
//     <h4>{copy[0].title}</h4>
//     <p>{copy[0].price}</p>
//     </div>
//   );
// }
// function Comp2(props) {
//   let copy = [...props.shoes];
//   return (
//     <div className="col-md-4">
//     <img src= "https://codingapple1.github.io/shop/shoes2.jpg" width= "80%"/>
//     <h4>{copy[1].title}</h4>
//     <p>{copy[1].price}</p>
//     </div>
    
//   );
// }
// function Comp3(props) {
//   let copy = [...props.shoes];
//   return (
//     <div className="col-md-4">
//     <img src= "https://codingapple1.github.io/shop/shoes3.jpg" width= "80%"/>
//     <h4>{copy[2].title}</h4>
//     <p>{copy[2].price}</p>
//     </div>
//   );
// }



export default App
