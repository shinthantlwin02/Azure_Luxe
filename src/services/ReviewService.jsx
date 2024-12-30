import axios from "axios"
import { toast } from "react-toastify";

const baseURl = import.meta.env.VITE_API_BASE_URL

export const getAllReview = async() => {
    const response = await axios.get(`${baseURl}/room/rate`)
    return  response.data;
}


export const saveReview = async (data) => {
    try {
         const response = await axios.post(`${baseURl}/room/rate`,data,{
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        });
        toast.success(response.data._metadata.message)
        return response.data; 
      } catch (error) {
        toast.error(error)
        throw error; 
      }
}