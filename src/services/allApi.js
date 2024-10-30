import { commonApi } from "./commonApi"
import {serverurl} from "./serverurl"
 

 export const AddCategoryApi = async(reqbody)=>{
    return await commonApi('POST',`${serverurl}/category`,reqbody)
 }

  //add audiobook history

  export const addAudiobookHistoryApi = async(reqBody)=>{
   return await commonApi('POST',`${serverurl}/history`,reqBody)
}

// get audiobook from history
export const getAudiobookHistoryApi = async()=>{
   return await commonApi('GET',`${serverurl}/history`)
}

//delete audiobook from history
export const deleteHistoryAudiobookApi = async(id)=>{
   return await commonApi('DELETE',`${serverurl}/history/${id}`)
} 