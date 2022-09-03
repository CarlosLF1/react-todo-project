import './App.css';
import Main from "./components/main";
import Image from "./components/BackgroundImage";
import ToDo from "./components/ToDo"
import {useState} from 'react'
function App() {
  let toDoData = [{ id: 1, text: 'textData', done: true},{id: 2, text: 'textData2', done: false}];
  
  //let [toDoData, setToDoData] = useState([])
  return (
    <>
    <Image>      
      <Main 
        headlineText="ToDo List" 
        subText="It's not rocket sience"
      />
      <ToDo toDoData={toDoData} />
      </Image>

    </>
  );
}

export default App;
