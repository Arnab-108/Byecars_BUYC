import axios from "axios"
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";




export const getcars=(obj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`http://localhost:8080/market`,obj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS , payload:res.data})
    })
    .then(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
};