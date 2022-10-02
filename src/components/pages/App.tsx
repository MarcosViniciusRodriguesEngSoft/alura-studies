import Cronometro from "../Cronometro";
import Formulario from "../Formulario";
import Lista from "../Lista";
import Style from './App.module.scss';

function App() {
  return (
    <div className={Style.AppStyle}>
    <Formulario/>
    <Lista/>
    <Cronometro/>
    </div>
  );
}

export default App;
