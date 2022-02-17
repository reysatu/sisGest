const baseUrl = "http://127.0.0.1:8000/api/Login";
import axios from "axios";
const Login = {};
Login.list = async () => {
    const urList = baseUrl + "/role";
    const res = await axios
        .get(urList)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};
Login.valida = async (data) => {
    const urlvalida = baseUrl + "/valida";
    const res = await axios
        .post(urlvalida, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};
// Login.ListMenu=async()=>{
//     const urlList=baseUrl+"/list_modulos"
//     const res=await axios.get(urlList)
//     .then(response=>{return response.data})
//     .catch(error =>{return error;})
//     console.log(res);
//     return res;

// }
Login.ListMenu = async (id) => {
    const urlGet = baseUrl + "/list_modulos/" + 1;
    const res = await axios
        .get(urlGet)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};
export default Login;
