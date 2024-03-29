// npm install -g json-server
// 1 - rodar json-server --watch db.json | dentro do arquivo .json
// 2 - rodar json-server --watch --host 192.168.0.152 db.json | dentro do arquivo .json
import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/users" // https://api.github.com/users/mateusmegamix
});

export default api;