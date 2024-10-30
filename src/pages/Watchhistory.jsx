import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Watchhistory() {
  const [allHisPlaylist, setallHisPlaylist] = useState([])

  const getAllHistory = async()=>{
    const result = await getAudiobookHistoryApi()
    setallHisPlaylist(result.data);
    
  }

  console.log(allHisPlaylist);
  
  const handleDelete = async(id)=>{
    const result = await deleteHistoryAudiobookApi(id)
    console.log(result);
    
  }

  useEffect(()=>{
    getAllHistory()
  },[])
  return (
    <div className='p-4'>
      <div className="flex items-center mt-5">
        <h4 className="text-xl font-semibold">Watch History</h4>
        <Link to={'/home'} className='ml-auto text-blue-600 hover:underline flex items-center text-xl'>
          <h5 className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHouse} className='mr-2' />
            <span>Back Home</span>
          </h5>
        </Link>
      </div>
      <div className="container mx-auto mt-5">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl p-3 overflow-auto">
           {allHisPlaylist?.length>0? <table className='min-w-full mt-5 border border-gray-200'>
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left border-b border-gray-200">SL.NO</th>
                  <th className="px-4 py-2 text-left border-b border-gray-200">Caption</th>
                  <th className="px-4 py-2 text-left border-b border-gray-200">URL</th>
                  <th className="px-4 py-2 text-left border-b border-gray-200">Time Stamp</th>
                  <th className="px-4 py-2 text-left border-b border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody>
                {allHisPlaylist?.map((item)=>(
                  <tr>
                  <td className="px-4 py-2 border-b border-gray-200">1</td>
                  <td className="px-4 py-2 border-b border-gray-200">dummy</td>
                  <td className="px-4 py-2 border-b border-gray-200">dummy</td>
                  <td className="px-4 py-2 border-b border-gray-200">dummy</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    <button onClick={()=>handleDelete(item?.id)} className='text-red-600 hover:text-red-800'>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                ))
                }
              </tbody>
            </table>
              :
            <h3 className='text-yellow-500 text-center mt-4'>History Cleared</h3>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watchhistory;
