import axios from "axios";

axios.defaults.baseURL = "https://rest-framework-project-d7776b473078.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;