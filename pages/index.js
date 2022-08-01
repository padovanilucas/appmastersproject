import axios from 'axios';
import useSWR from 'swr';
import { valida } from './API/zip';
import style from 'styled-jsx/css';


function Index(dados) {
  return 
    <main>
    <><header>
    <h1>Doação de computadores usados</h1>
    {console.log(dados)}
  </header>
  <form action="https://doar-computador-api.herokuapp.com/donation" method="GET">
      <fieldset>
        <legend>Insira seus dados</legend>
        <input type="text" id="name" placeholder="Nome" required></input>
        <label for="name"></label>

        <input type="email" id="email" placeholder="Email"></input>
        <label for="email"></label>

        <input type="phone" id="phone" required placeholder="Telefone"></input>
        <label for="phone"></label>

        <input type="number" id="zip" placeholder="CEP" Pattern="[\d]{5}-?[\d]{3}" data-tipo="zip" required></input>
        <label for="zip"></label>

        <input type="text" id="city" placeholder="Cidade" data-tipo="city" required></input>
        <label for="city"></label>

        <input type="text" id="state" placeholder="Estado" data-tipo="state" required></input>
        <label for="state"></label>

        <input type="text" id="streetAddress" placeholder="Rua" data-tipo="streetAddress"required></input>
        <label for="streetAddress"></label>

        <input type="number" id="number" placeholder="Número" required></input>
        <label for="number"></label>

        <input type="text" id="complement" placeholder="Complemento"></input>
        <label for="complement"></label>

        <input type="text" id="neighborhood" placeholder="Bairro" required></input>
        <label for="neighborhood"></label>

        <div> Quantos equipamentos você gostaria de doar?</div>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4 ou mais</option>
        </select>
      </fieldset>
      </form>
      <fieldset>
      <legend>Qual a condição dos equipamentos?</legend>
      <div>Qual o tipo de equipamento?</div>
      <select>
        <option value="notebook"> Notebook</option>
        <option value="desktop"> Desktop</option>
        <option value="netbook">Netbook</option>
        <option value="screen">Monitor</option>
        <option value="printer">Impressora</option>
        <option value="scanner">Scanner</option>
      </select>
      <div>Qual o estado?</div>
      <select>
        <option value="working">Tem todas as partes, liga e funciona normalmente</option>
        <option value="notWorking">Tem todas as partes, mas não liga mais</option>
        <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
      </select>
      <input type="submit" value="Enviar Formulário" class="enviar"></input>
    </fieldset></>
    </main>
      


}

Index.getInitialProps = async () => {
  const response = await axios.get(
    'https://doar-computador-api.herokuapp.com/'
  );

  return { dados: response.data }


}
export default Index;
