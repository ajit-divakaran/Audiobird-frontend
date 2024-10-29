import { commonApi } from "./commonApi"
import {serverurl} from "./serverurl"
 

 export const AddCategoryApi = async(reqbody)=>{
    return await commonApi('POST',`${serverurl}/category`,reqbody)
 }

 //add 
export const AddBookApi = async(reqBody)=>{
   return await commonApi('POST',`${serverurl}/playlist`,reqBody)
}
//delete
export const DeleteBookApi = async(id)=>{
   return await commonApi('DELETE', `${serverurl}/playlist/${id}`)
}