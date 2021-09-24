import axios from 'axios'

let baseUrl = "http://127.0.0.1:8000"
let urls = {
    "origin-path": baseUrl + "/student/enrollment/",
};


class EnrollmentService {
    getStudentDetailById(id) {
        return axios.get(urls['origin-path'] + id);
    }
}


export default new EnrollmentService();
