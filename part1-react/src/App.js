import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  
  return <h2>Esta fue la descripcion</h2>
}

function App() {

  return (
    <div className="App">
      <Mensaje color='green' message='Estamos trabajando'/>
      <Mensaje color='red' message='En un curso'/>
      <Mensaje color='yellow' message='Des react'/>
      <Description />
    </div>
  );
}

export default App;
