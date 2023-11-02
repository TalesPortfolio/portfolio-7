import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/main";
import DadosMachine from './components/Dados-machine/main';
import DadosExterior from './components/Dados-exterior/main';
import './App.css'


function App() {
 
  

  return (
    <>
    <div className="container" id='conteudoHTML'>
      <Header />
      <DadosMachine />
      <DadosExterior />
    </div>
     <button>Enviar PDF</button>
    </>
    
    
    
    
  )
}

export default App

