export function valida(input) {
  const tipoDeInput = input.dataset.tipo

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input)
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalido')
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
  } else {
    input.parentElement.classList.remove('input-container--invalido')
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro
  }
}
const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
]

const mensagensDeErro = {
  name: {
    valueMissing: 'O campo de nome não pode estar vazio.'
  },
  email: {
    valueMissing: 'O campo de email não pode estar vazio.',
    typeMismatch: 'O email digitado não é válido.'
  },
  phone: {
    valueMissing: 'O campo de telefone não pode estar vazio.'
  },
  zip: {
    valueMissing: 'O campo de CEP não pode estar vazio.',
    patternMismatch: 'O CEP digitado não é válido.',
    customError: 'Não foi possível buscar o CEP.'
  },
  city: {
    valueMissing: 'O campo de cidade não pode estar vazio.'
  },
  state: {
    valueMissing: 'O campo de estado não pode estar vazio.'
  },
  StreetAddress: {
    valueMissing: 'O campo de logradouro não pode estar vazio.'
  },
  Number: {
    valueMissing: 'O campo de número não pode estar vazio.'
  },
}
 //tratando a resposta da requisição

 req.onload = function () {
  if (req.status === 200) {
    let endereco = JSON.parse(req.response);
    document.getElementById("city").value = endereco.city;
    document.getElementById("state").value = endereco.state;
    document.getElementById("street").value = endereco.street;
    document.getElementById("neighborhood").value = endereco.neighborhood;
  }
  else if (req.status === 404) {
    alert("CEP inválido, por favor insira um CEP válido!")
  }
  else {
    alert("O servidor falhou em responder. Tente mais tarde.")
  }

  //tratando a validação
const validadores ={
  zip:input => recuperarCep(input)
}
function mostraMensagemDeErro(tipoDeInput, input)
let mensagem = ''
tiposDeErro.forEach(erro => {
  if(input.validity[erro]){
    mensagem = mensagensDeErro[tiposDeInput][erro]
  }
  })

  function recuperarCep(input) {
    const cep = input.value.replace(/\D/g, '')
    const url = `https://viacep.com.br/ws/${zip}/json/`
    const options ={
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    }
  }

  if (!input.validity.patternMismatch && !input.validityMissing) {
    fetch(url,options).then(
      response => response.json()
    ).then(
      data => {
       if(data.erro) {
        input.setCustomValidity('Não foi possível buscar o CEP')
        return
       }
       input.setCustomValidity('')
       preencheCamposComCEP(data)
       return
      }
    )
  }


  function preencheCamposComCEP (data) {
    const city = document.querySelector('[data-tipo="cidade')
    const streetAddress = document.querySelector('[data-tipo="logradouro')
    const state = document.querySelector('[data-tipo="state')

    streetAddress.value=data.logradouro
    city.value = data.localidade
    state.value = data.uf
  }
}