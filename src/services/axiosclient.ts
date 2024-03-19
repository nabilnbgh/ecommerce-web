import {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError,
} from "@/utils/network_debug";
import axios, { Axios, AxiosError, AxiosRequestConfig } from "axios";

class AxiosClient {
  baseUrl: string;
  axios: Axios;

  constructor(baseUrl: string, axios: Axios, headers?: string) {
    this.baseUrl = baseUrl;
    this.axios = axios;

    //axios configuration
    axios.defaults.baseURL = this.baseUrl;
    axios.defaults.timeout = 5000;
    if (headers) {
      axios.defaults.headers;
    }
    axios.interceptors.request.use(onRequest, onRequestError);
    axios.interceptors.response.use(onResponse, onResponseError);
  }

  // async get<T>(
  //     url : string,
  //     config : AxiosRequestConfig|undefined
  // ) : Promise<T | null> {
  //     // eslint-disable-next-line no-useless-catch
  //     try{
  //         let response : Promise<AxiosResponse<T, T>>
  //         if(config){
  //             response = await this.axios.get(url)
  //         }else{
  //             response = await this.axios.get(url,config)
  //         }
  //         return response.data;
  //     }catch(e){
  //         throw e
  //     }
  // }
}

const axiosClient = new AxiosClient("https://fakestoreapi.com/", axios);

export { axiosClient };
// export default {
//   data() {
//     return {
//       posts: []
//     };
//   },
//   async created() {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       this.posts = response.data;
//     } catch (error) {
//       console.error(error);
//     }
//   }
