import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)
  const [exibirMensagem, setExibirMensagem] = useState(false)

  const incrementarContador = () => {
    setContador(contador+1)
  }

  const mostrarMensagem = () => {
    setExibirMensagem(!exibirMensagem)
  }

  useEffect(() => {
    console.log(`mudou para: ${contador}`);
    return () => {
      console.log('Cleaning up effect for count');
    };
  }, [contador]);

  useEffect(() => {
    console.log(`mudou para: ${exibirMensagem}`);
  }, [exibirMensagem]);

  return (
    <div>
      <h1>Exemplo Simples</h1>
      <p>Contador: {contador}</p>
      <div>
        <button onClick={incrementarContador} >Incrementar Contador</button>
        <button onClick={mostrarMensagem}>{exibirMensagem ? "Esconder Mensagem" : "Exibir Mensagem"}</button>
        {exibirMensagem && (
          <p>Este é um exemplo de renderização condicional!</p>
        )}
      </div>
    </div>
  )
}

export default App
