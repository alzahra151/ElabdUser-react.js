import axios from 'axios'


const axiosInstance=  axios.create({
    baseURL:"https://elabdapi-eg.onrender.com/api/elabdfoods/",
//   params:{

//   }

   })


export default axiosInstance