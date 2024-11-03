import axios from "axios"


export const systemcommonApi = async(httpmethod, url, reqbody) =>{
            const reqConfig ={
                method:httpmethod,
                url,
                data:reqbody,
                headers:{"Content-Type":"multipart/form-data"}
            }
    return await axios(reqConfig).then((result)=>{
        return result
       }).catch((error)=>{
        return error
       })
}