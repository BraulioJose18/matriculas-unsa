import axios from 'axios'

let baseUrl = "http://127.0.0.1:8000"
let urls = {
    "origin-path": baseUrl+ "/student/",
};


class AlumnosService {
    getAll() {
        return axios.get(urls['origin-path']);
    }
}


export default new AlumnosService();

