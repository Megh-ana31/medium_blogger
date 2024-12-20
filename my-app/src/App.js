import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld/HelloWorld';
import Product from './Product/index';
import apple from './image/apple.jpg';
import vivo from './image/vivo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Product imgpath={apple} name={"apple"}/>
       <Product imgpath={vivo} name={"vivo"} />
      </header>
    </div>
  );
}

export default App;
