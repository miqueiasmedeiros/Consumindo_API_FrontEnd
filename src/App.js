import { useState } from 'react';
import {MdPersonSearch} from 'react-icons/md';
import './styles.css';
import api from './services/api';
function App() {

  const [ input, setInput] = useState("");
  const [nome, setNome] = useState({});

  async function handleSearch(){
    
    if (input === ''){
      alert('Preencha este campo para prosseguir!')
      return;
    }
      try{
          const response = await api.get(`/students/${input}`);
          console.log(response);
          setNome(response.data);
          setInput("");

      }catch{
        alert("Erro ao Solicitar!");
        setInput('');

      }
  }

  return (
    <div className="container">
     <h1 className="title">Buscar Aluno</h1>
    <div className="containerInput">
      <input type="text"
        placeholder="Digite o ID do Aluno... "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

    <button className="buttonSearch" onClick={handleSearch}>
        <MdPersonSearch size={25} color="#000"/>
    </button>
    </div>

     {Object.keys(nome).length > 0 && (
      <main className='main'>
        <h2>Nome: {nome.data}</h2>
        <span>Curso: {nome.course} </span>
     </main>

     )};     
    </div>
  );
}

export default App;


//MdPersonSearch