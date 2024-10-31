import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { GetWatchHistoryApi, DeleteFromWatchHistoryApi } from '../services/allApi'; // Import API functions

function Watchhistory() {
  const [history, setHistory] = useState([]); // State to store watch history
  const [loading, setLoading] = useState(true); // State to manage loading status

 
  const fetchWatchHistory = async () => {
    const result = await GetWatchHistoryApi();
    if (result.status >= 200 && result.status < 300) {
      setHistory(result.data); 
    }
    setLoading(false); a
  };

  // clear watch history
  const clearHistory = async () => {
    const result = await DeleteFromWatchHistoryApi();
    if (result.status >= 200 && result.status < 300) {
      setHistory([]); // Clear local state
      alert('Watch history cleared successfully!'); 
    }
  };

  useEffect(() => {
    fetchWatchHistory(); 
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Loading message
  }

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
            <table className='min-w-full mt-5 border border-gray-200'>
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
                {history.length>0?(
                  history.map((item, index)=>(
                    <tr key={index}>
                      <td className="px-4 py-2 border-b border-gray-200">{index + 1}</td>
                      <td className="px-4 py-2 border-b border-gray-200">{item.caption}</td>
                      <td className="px-4 py-2 border-b border-gray-200">{item.url}</td>
                      <td className="px-4 py-2 border-b border-gray-200">{new Date(item.timestamp).toLocaleString()}</td>
                      <td className="px-4 py-2 border-b border-gray-200">
                        <button className='text-red-600 hover:text-red-800' onClick={() => console.log('Delete item')}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-4 py-2 border-b border-gray-200 text-center">No watch history available</td>
                  </tr>
                )}
              </tbody>
            </table>
            {history.length > 0 && (
              <div className="mt-4">
                <button 
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={clearHistory} // Button to clear history
                >
                  Clear Watch History
                </button>
              </div>
            )}
            <h3 className='text-yellow-500 text-center mt-4'>History Cleared</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watchhistory;
