import './App.css';
import Main from "./components/main";
import Image from "./components/BackgroundImage";
import ToDo from "./components/ToDo"

function App() {
  return (
    <>
    <Image>      
      <Main 
        headlineText="ToDo List" 
        subText="It's not rocket sience"
      />
      <ToDo />
      </Image>

    </>
  );
}

export default App;
