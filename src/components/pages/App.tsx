import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefas';
import Cronometro from "../Cronometro";
import Formulario from "../Formulario";
import Lista from "../Lista";
import Style from './App.module.scss';

function App() {

    const [tarefas, setTarefas] = useState<ITarefa[]>([]);

    return (
        <div className={Style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Lista tarefas={tarefas} />
            <Cronometro />
        </div>
    );
}

export default App;
