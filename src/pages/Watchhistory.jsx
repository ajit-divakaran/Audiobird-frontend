import { faHouse, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GetWatchHistoryApi } from "../services/allApi";
// import { AddAudioApi, GetAudioApi } from "../services/allApi";

function Watchhistory({ allHistory, setAllHistory }) {
  const getAllHistoryData = async () => {
    const result = await GetWatchHistoryApi();
    if (result.status >= 200 && result.status < 300) {
      console.log(result);
      setAllHistory(result.data);
    }
  };
  useEffect(() => {
    getAllHistoryData();
  }, []);
  return (
    <div className="p-4">
      <div className="flex items-center mt-5">
        <h4 className="text-xl font-semibold">Watch History</h4>
        <Link
          to={"/home"}
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
            {allHistory?.length && (
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
                      Time Stamp
                    </th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allHistory.map((item,index) => (
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
                        <button className="text-red-600 hover:text-red-800">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <h3 className="text-yellow-500 text-center mt-4">
              History Cleared
            </h3>
          </div>
        </div>
      </div>
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
