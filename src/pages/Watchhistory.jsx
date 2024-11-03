import { faHouse, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import {   DeleteAllWatchHistoryApi, DeleteWatchHistoryApi, GetWatchHistoryApi } from "../services/allApi";
// import { AddAudioApi, GetAudioApi } from "../services/allApi";

function Watchhistory({ allHistory, setAllHistory }) {
  const getAllHistoryData = async () => {
    const result = await GetWatchHistoryApi();
    if (result.status >= 200 && result.status < 300) {
      console.log(result);
      setAllHistory(result.data);
    }
  };

  const handleHistoryDelete = async(id)=>{
    const result = await DeleteWatchHistoryApi(id);
    if(result.status>=200 && result.status<300){
      console.log(result.data)
      getAllHistoryData()
    }
  }

  const clearAllHistory = async () => {
    try {
      // Fetch all history items
      const result = await GetWatchHistoryApi();
  
      // Check if there are any items to delete
      if (result?.data?.length) {
        // Create delete requests for each item in history
        const deletePromises = result.data.map((item) =>
          DeleteWatchHistoryApi(item.id)
        );
  
        // Wait for all delete requests to finish
        await Promise.all(deletePromises);
  
        // Clear the state after successful deletion
        setAllHistory([]);
        console.log("All history cleared successfully.");
      } else {
        console.log("No history to clear.");
      }
    } catch (error) {
      console.error("Error clearing history:", error);
    }
  };
  

  // const clearAllHistory = async() =>{
  //   const his = await GetWatchHistoryApi();
  //   console.log(his.data)
  //   his.data.history=[]
  //   console.log(his.data)

  //   const result = await AllClear(his.data)
  //   if(result.status>=200 && result.status<300){
  //     console.log(result.data)
      
     
  //   }
  // }
  useEffect(() => {
    getAllHistoryData();
  }, []);
  return (
    <div className="p-4">
      <div className="flex items-center mt-5">
        <h4 className="text-xl font-semibold">Watch History</h4>
        <Link
          to={"/"}
          className="ml-auto text-blue-600 hover:underline flex items-center text-xl"
        >
          <h5 className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHouse} className="mr-2" />
            <span>Back Home</span>
          </h5>
        </Link>
      </div>
      <div className="container mx-auto mt-5">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl p-3 overflow-auto">
            {allHistory?.length ? (
              <table className="min-w-full mt-5 border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      SL.NO
                    </th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      Caption
                    </th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      URL
                    </th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      Status
                    </th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allHistory?.map((item,index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border-b border-gray-200">{index+1}</td>
                      <td className="px-4 py-2 border-b border-gray-200">
                        {item?.title}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200">
                        dummy
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200">
                        Watched
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200">
                        <button className="text-red-600 hover:text-red-800"
                        onClick={()=>handleHistoryDelete(item?.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ):(
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVR7FQB3hTcssv0ZD651FqKR2I_u95gCbpw&s" alt="" />
              </div>
            )}
            
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center"><button className="border border-none underline hover:text-yellow-500" onClick={clearAllHistory}>Clear History</button></div>
      {/* <h4>{allHistory.img}</h4>
      <audio controls>
        <source src={allHistory.file} type="audio/mp3"/>
      </audio> */}
    </div>
  );
}

export default Watchhistory;

// const [audioFile, setAudioFile] = useState(null);
// const [audioData, setAudioData] = useState(null);

// const convertToBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// };

// const onFileChange = async(event) => {
//   const file = event.target.files[0];
//   const base64 = await convertToBase64(file);
//   setAudioFile({ name: file.name, data: base64 });
// };

// const fetchAudio = async () => {
//   const response = await GetAudioApi();
//   console.log(response);
//   setAudioData(response.data);
// };

// const submit = async () => {
//   if (audioFile) {
//     const result = await AddAudioApi(audioFile);
//     console.log(result)
//     fetchAudio();
//   }

// <div>
// <input type="file" accept="audio/mp3" onChange={onFileChange} />
// <button onClick={submit}>Click</button>
// {audioData &&
// audioData.map((audio, index) => (
//   <div key={index}>
//     <p>{audio.name}</p>
//     <audio controls src={audio.data} />
//   </div>
// ))}
// </div>
