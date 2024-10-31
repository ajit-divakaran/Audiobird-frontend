import { commonApi } from "./commonApi"
import {serverurl} from "./serverurl"
 

 export const AddCategoryApi = async(reqbody)=>{
    return await commonApi('POST',`${serverurl}/category`,reqbody)
 }
 export const GetCategoryApi = async()=>{
    return await commonApi('GET',`${serverurl}/category`)
 }
 export const UpdateMetaDataApi = async(reqbody,id)=>{
    return await commonApi('PUT',`${serverurl}/category/${id}`,reqbody)
 }

 export const GetMetaDataApi = async(id)=>{
   return await commonApi('GET',`${serverurl}/category/${id}`)
}