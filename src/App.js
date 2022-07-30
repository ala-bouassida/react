import './App.css';
import Heder from './component/Heder';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const moto = [
    {
      id: Math.random(),
      brand: "DUCATI",
      praice: "4000",
    },
    {
      id: Math.random(),
      brand: "GSXR",
      praice: "3500",
    },
    {
      id: Math.random(),
      brand: "BMW",
      praice: "4000",
    },
    {
      id: Math.random(),
      brand: "Z1000",
      praice: "2500",
    },
  ];
  const str = "hello props"
  return (
    <div className="App">
    < moto mikanik = {moto} chaine = {str}/>

    <Heder />
    </div>
  );
}

export default App;