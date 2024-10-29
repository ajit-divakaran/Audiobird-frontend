import { commonApi } from "./commonApi"
import {serverurl} from "./serverurl"
 

 export const AddCategoryApi = async(reqbody)=>{
    return await commonApi('POST',`${serverurl}/category`,reqbody)
 }
 export const GetCategoryApi = async()=>{
    return await commonApi('GET',`${serverurl}/category`)
 }
 export const AddMetaDataApi = async(reqbody,id)=>{
    return await commonApi('POST',`${serverurl}/category/${id}/cards`,reqbody)
 }

 export const GetMetaDataApi = async(id)=>{
   return await commonApi('GET',`${serverurl}/category/${id}/cards`)
}