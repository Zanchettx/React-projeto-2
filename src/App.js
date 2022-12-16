

import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  function dispararEmail(eve){

    // retirar o padrao do evento submit ! 
    eve.preventDefault();
    //verificando se os campos esta vazio 
    if(name === '' || email === '' || message === ''){
      alert('preencha os campos por favor ');
      return
    }

    // Aloca as variaveis do formulario nos campos predefinidos no template do email
    const templateParametro = {
      from_name: name,
      message: message,
      email: email
    }
    
    // usando a api emailjs  e colocando os dados pra enviar o email seguindo essa sequencia 
    //              (id_do_servico ,   id_do_template ,     parametro_template ,  chave_publica)
    emailjs.send("service_001km7i" , "template_gpjhqum" , templateParametro , "jXZHNRQsqwUYnFRJp")

    // caso der certo 
    .then((resposta) => {
      // monstrando via console os dados e dando um parecer positivo
      alert('Email enviado com sucesso');
      console.log('email enviado' , resposta.status , resposta.text);

      // resetando os campos por padrao
      setName('');
      setEmail('');
      setMessage('');

      // caso houver algum erro nessa operaçao
    },(erro) =>{

      // mostra o erro pelo console
      console.log('erro encontrado ' , erro)
    })
    
  }



  return (
    <div className="container">
      <h1 className="title">Disparador de Email</h1>

      <form className="form" onSubmit={dispararEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;
