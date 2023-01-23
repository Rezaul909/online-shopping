import axios from 'axios'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  
  axios.defaults.headers["Accept"] = "application/json";
  axios.defaults.headers.post["Content-Type"] =
    "multipart/form-data; charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

  return <Component {...pageProps} />
}

export default MyApp


