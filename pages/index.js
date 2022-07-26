import axios from 'axios';

const Index = (dados) => (
    <div>
        <h1>Doação de computadores usados</h1>
        {console.log(dados)}

        <p> Api online </p>
    </div>

);

Index.getInitialProps = async () =>{
const response = await axios.get(
     'https://doar-computador-api.herokuapp.com/'
);
    
    return { dados : response.data}

}
export default Index;