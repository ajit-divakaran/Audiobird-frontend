import { commonApi } from "./commonApi"
import {serverurl} from "./serverurl"
// import { systemcommonApi } from "./systemcommonApi"

 

 export const AddCategoryApi = async(reqbody)=>{
    return await commonApi('POST',`${serverurl}/category`,reqbody)
 }
 export const GetCategoryApi = async()=>{
    return await commonApi('GET',`${serverurl}/category`)
 }

 export const DeleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/category/${id}`)
 }


 export const UpdateMetaDataApi = async(reqbody,id)=>{
    return await commonApi('PUT',`${serverurl}/category/${id}`,reqbody)
 }

 export const GetMetaDataApi = async(id)=>{
   return await commonApi('GET',`${serverurl}/category/${id}`)
}
//  export const AddAudioApi = async(reqbody)=>{
//    return await commonApi('POST',`${serverurl}/audios`,reqbody)
// }
 export const GetAudioApi = async(id)=>{
   return await commonApi('GET',`${serverurl}/category/${id}`)
}
export const AddToWatchHistoryApi = async(reqbody)=>{
   return await commonApi('POST',`${serverurl}/history`,reqbody)
}
export const GetWatchHistoryApi = async()=>{
   return await commonApi('GET',`${serverurl}/history`)
}