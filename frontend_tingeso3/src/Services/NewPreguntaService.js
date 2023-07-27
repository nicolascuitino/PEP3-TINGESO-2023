import axios from "axios";

const PROVEEDOR_URL = "http://localhost:8080/preguntaService/post2";

class NewPreguntaService {
    

    createPregunta(pregunta){
        return axios.post(PROVEEDOR_URL, pregunta);
    }
}

export default new NewPreguntaService()