import {
  faAdd,
  faPlay,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import React from "react";
import {
  AddCategoryApi,
  AddToWatchHistoryApi,
  DeleteCategoryApi,
  GetAudioApi,
  GetCategoryApi,
  GetMetaDataApi,
  UpdateMetaDataApi,
} from "../services/allApi";

const Watchlist = ({setAllHistory}) => {
  const cardRef = useRef(null); // To get the width of the first element card height
  const inputRefCategoryName = useRef(null); // To get the category name input value
  const inputRefImage = useRef(null); // To get the card image input value
  const inputRefTitle = useRef(null); // To get the card title input value
  const inputRefDesc = useRef(null); // To get the card description input value
  const [cardHeight, setCardHeight] = useState(340); // stores card height from cardRef
  // const [category, setCategory] = useState({ name: "" }); // category details
  const [allcategory, setAllcategory] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // toggle Add category modal
  const [isOpen1, setIsOpen1] = useState(false); // toggle Add category modal
  // const[allMetaData,setAllMetaData] = useState({})
  const [id, setId] = useState(null);
  const [isPlayClicked, setIsPlayClicked] = useState(false);
  // const [playDetails, setPlayDetails] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [errorfile, setErrorfile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [audioData, setAudioData] = useState(null);
  const [addCategoryStatus,setAddCategoryStatus] = useState(null);
  const [deleteAudioCardStatus,setDeleteAudioCardStatus] = useState(null)
  const [loading,setLoading] = useState(false)
  // const [inputValue, setInputValue] = useState(null)
  // const [getCategoryStatus, setGetCategoryStatus] = useState({});

  const toggleModalCategory = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (newIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      // setInputValue(inputRef.current.value);
    }
  };

  // console.log(inputValue)

  // Function to update card height
  const updateCardHeight = () => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  };

  const getAllcategory = async() => {
    const result = await GetCategoryApi();
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setAllcategory(result.data);
    }
  };

  const handleAddCategory = async (categoryInput) => {
    const result = await AddCategoryApi(categoryInput);
    if (result.status >= 200 && result.status < 300) {
      getAllcategory();

      console.log(result);
      toggleModalCategory();
      setAddCategoryStatus(result.data)
    }
    // setGetCategoryStatus(result.data);
  };

  const handleInput = () => {
    if (
      inputRefCategoryName.current &&
      inputRefCategoryName.current.value != ""
    ) {
      // setCategory({ name: "test audiobook" });
      console.log(inputRefCategoryName.current.value);
      // console.log(category);
      handleAddCategory({
        name: inputRefCategoryName.current.value,
        cards: [],
      });
    } else {
      alert("Category cannot be blank");
    }
    toggleModalCategory();
  };

  const toggleModalMedia = () => {
    const newIsOpen = !isOpen1;
    setIsOpen1(newIsOpen);

    if (newIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      // setInputValue(inputRef.current.value);
    }
  };

  const handleMetaDataClick = (id) => {
    setId(id);
    setIsFileSelected(false)
    toggleModalMedia();
  };

  const alreadyExists = (arr, data, key) => {
    return arr.some(x=>x[key]==data)
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const addMetadata = async () => {

    if (
      inputRefDesc.current.value != "" &&
      inputRefImage.current.value != "" &&
      inputRefTitle.current.value != ""
    ) {
      setLoading(true)
      console.log(
        inputRefImage.current.value,
        inputRefTitle.current.value,
        inputRefDesc.current.value
      );
      console.log(id);
      const result = await GetMetaDataApi(id);
      if (result.status >= 200 && result.status < 300) {
        console.log(result.data, Array.isArray(result.data.cards));
        // result.data.cards.map(x=>console.log(x))
        const val = alreadyExists(
          result.data.cards,
          inputRefTitle.current.value,
          "title"
        );
        console.log(val);
         if(!(val))
          { const card = {
            img: inputRefImage.current.value,
            title: inputRefTitle.current.value,
            desc: inputRefDesc.current.value,
            file:audioFile
          };
          result.data.cards.push(card);
          console.log(result.data);
          const update = await UpdateMetaDataApi(result.data, id);
          if(update.status>=200 && update.status<300){
            setLoading(false)
          }
          console.log(update.data);
        }
          else{
            alert("oops title already taken")
          }
      }
      
      getAllcategory();
    } else {
      alert("Input fields cannot be empty");
    }

    toggleModalMedia();
  };

  const toggleModalPlayer = () => {
    const newIsOpen = !isPlayClicked;
    setIsPlayClicked(newIsOpen);

    if (newIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const addToWatchHistory = async(audio) =>{
    const add = await AddToWatchHistoryApi(audio)
    if(add.status>=200 && add.status<300){
      console.log(add.data)
    }
  }

  const handlePlayAndCardClick = async(details,categoryId) => {
    // const {img,title,desc} = details

    // setPlayDetails(details);
    const result = await GetAudioApi(categoryId)
    if(result.status>=200 && result.status<300){
      console.log(result.data.cards)
      const audio = result.data.cards.filter(x=>x.title==details.title)[0];
      console.log(audio);
      setAudioData(audio)
      addToWatchHistory(audio);
    }
    toggleModalPlayer();

  };

  const handleSelectFile = async(event) => {
    const fileStr = event.target.value;
    console.log(fileStr.slice(-3));
    if (fileStr.slice(-3) != "mp3" && fileStr.slice(-4) != "mpeg") {
      setErrorfile("Please select a valid file");
    } else {
      console.log("hello");
      setErrorfile(null);
      setIsFileSelected(true);
      const file = event.target.files[0];
      const base64 = await convertToBase64(file);
      setAudioFile( base64 );
    }
  };
  const handleDelete = async(categoryId,title) => {
    setLoading(true)
    const result = await GetMetaDataApi(categoryId)
    console.log(result)
    if(result.status>=200 && result.status<300){
       result.data.cards = result.data.cards.filter(x=>x.title!=title)
      
      const datas = await UpdateMetaDataApi(result.data,categoryId)
      console.log(datas)
      if(datas.status>=200 && datas.status<300){
        setDeleteAudioCardStatus(result.data)
        getAllcategory()
      }
    }

    setLoading(false)
    
  };

  const handleCategoryDelete = async(id) =>{
    setLoading(true)
    const result = await DeleteCategoryApi(id);
    console.log(result.data)
    if(result.status>=200 && result.status<300){
      getAllcategory()
      setLoading(false)
    }
  }

  //   const handleCardClick = async(cardId)=>{
  // alert(`${cardId}`)
  //   }
  useEffect(() => {
    // Measure height on mount
    updateCardHeight();
    getAllcategory();

    // Add event listener for window resize
    window.addEventListener("resize", updateCardHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCardHeight);
    };
  }, [addCategoryStatus,deleteAudioCardStatus]);

  return (
    <div
      className={`p-6 px-7 ${loading?'cursor-wait':''}` }
      style={{
        backgroundColor: "#262626",
        color: "#ebeff5",
        minHeight: "90vh",
      }}
    >
      <div className="text-center">
        <h1 className="fsize" style={{ "--bs-font": "1.15rem" }}>
          Categories
        </h1>
        {/* <hr className="border-t-1 border-gray-700 w-1/2 "/> */}
      </div>

      {allcategory?.length > 0 ? (
        <div className="category mt-8">
          {allcategory?.map((item) => (
            <div key={item?.id}>
              <div className="flex gap-x-[30%] items-center mt-8">
                <h1 className="fsize" style={{ "--bs-font": "1.9rem" }}>
                  {item?.name}
                </h1>
                <button
                         
                          className="bg-red-600 text-white mt-0 py-2 px-4 rounded hover:bg-red-500  max-w-[50px] w-[20%] text-sm "
                          onClick={()=>handleCategoryDelete(item?.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <hr className="border-t-1 border-gray-700 w-1/2 " />
              <div className="grid grid-cols-1 auto-rows-minmax-300px-auto md:grid-cols-3 lg:grid-cols-4 mt-5 gap-y-5 md:gap-x-2 place-items-center">
                {item?.cards.map((data,index) => (
                  <div
                    key={index}
                    ref={cardRef}
                    className="border h-full border-solid border-sky-400  mt-3 flex flex-col w-11/12 justify-between rounded-md"
                    // onClick={()=>handleCardClick(data?.id)}
                  >
                    <div className="relative w-full ">
                      <img
                        src={data?.img}
                        alt=""
                        style={{ height: "10rem", width: "100%" }}
                      />
                      <FontAwesomeIcon
                        onClick={() =>
                          handlePlayAndCardClick({img:data?.img, title:data?.title ,desc:data?.desc},item?.id)
                        }
                        icon={faPlay}
                        className="scale-105 rounded-[50%] bg-[#38bff8] p-4 py-3 text-white absolute top-[35%] left-[40%] transition-transform hover:scale-125 hover:cursor-pointer"
                      />
                    </div>
                    <div className="pb-7 px-4 bg-transparent">
                      <h2 className="fsize" style={{ "--bs-font": "1.65rem" }}>
                        {data?.title}
                      </h2>
                      <p className="text-xs mt-2">
                        {data?.desc.length > 50
                          ? data?.desc.slice(50) + "..."
                          : data?.desc}
                      </p>
                      <div className="flex justify-between items-center">
                        <button className="bg-[#38bff8c0] text-white  py-2 px-4 rounded hover:bg-blue-700 mt-4 w-[60%] text-sm">
                          Get original
                        </button>
                        <button
                          onClick={()=>handleDelete(item?.id,data?.title)}
                          className="bg-red-600 text-white  py-2 px-4 rounded hover:bg-red-500 mt-4 max-w-[50px] w-[20%] text-sm"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  className="flex flex-col min-h-[300px] border-2 border-dotted border-sky-400 w-11/12 justify-center items-center rounded-md min-h-full bg-[#38bff826]"
                  style={{ minHeight: `${cardHeight}px` }}
                  onClick={() => handleMetaDataClick(item?.id)}
                >
                  {console.log(cardHeight)}
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="fa-3x w-[fit-content] bg-white rounded-full hover:scale-110 transition-transform hover:cursor-pointer"
                    style={{ color: "#38bff8" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <img src="/images/Empty-pana.png" alt="no image" width={"40%"} />
        </div>
      )}

      <button
        className="fixed right-10 bottom-6 bg-[#ffca2c] px-4 py-2 rounded-full text-black"
        onClick={toggleModalCategory}
      >
        <FontAwesomeIcon icon={faAdd} className="mr-2" />
        Add Category
      </button>

      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">/ */}

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-start justify-center z-50">
          <div className="bg-black rounded-lg shadow-lg max-w-md w-full p-6 mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Add Category</h2>
              <FontAwesomeIcon
                icon={faTimes}
                className="scale-125"
                onClick={toggleModalCategory}
              />
            </div>
            <label htmlFor="category">Category name</label>
            <input
              type="text"
              id="category"
              placeholder="Enter category name"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffca2c] focus:border-transparent mt-2"
              ref={inputRefCategoryName}
            />
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleInput}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add category
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen1 && (
        <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-start justify-center z-50 ${loading?'cursor-wait':''}`} >
          <div className="bg-black rounded-lg shadow-lg max-w-md w-full p-6 mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Add Media</h2>
              <FontAwesomeIcon
                icon={faTimes}
                className="scale-125"
                onClick={toggleModalMedia}
              />
            </div>
            <label htmlFor="img">Add image url</label>
            <input
              type="text"
              id="img"
              placeholder="Image url"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffca2c] focus:border-transparent mt-2 mb-4"
              ref={inputRefImage}
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffca2c] focus:border-transparent mt-2 mb-4"
              ref={inputRefTitle}
            />
            <label htmlFor="desc">Comments</label>
            <input
              type="text"
              id="desc"
              placeholder="Comments"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffca2c] focus:border-transparent mt-2 mb-4"
              ref={inputRefDesc}
            />
            <label htmlFor="file">Select the audio file: <span className="text-xs text-slate-500 ms-6">(only mp3 file accepted)</span></label>
            <input
              type="file"
              id="file"
              placeholder="Description"
              className="w-full text-black px-4 py-2 bg-blue-100 rounded mt-2"
              onChange={handleSelectFile}
            />
            {errorfile}
            <div className="mt-6 flex justify-end">
              <button
                onClick={addMetadata}
                className={`bg-blue-500 text-white px-4 py-2 rounded ${
                  isFileSelected
                    ? "hover:bg-blue-600"
                    : "opacity-50 hover:cursor-not-allowed"
                } ${loading?'cursor-wait':''}`}
                disabled={!isFileSelected}
              >
                Add media
              </button>
            </div>
          </div>
        </div>
      )}

      {isPlayClicked && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-start justify-center z-50">
          <div className="bg-black rounded-lg shadow-lg max-w-md w-full p-6 mt-8 h-[85vh] overflow-auto scrollbar-hide">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{audioData.title}</h2>

              <FontAwesomeIcon
                icon={faTimes}
                className="scale-125"
                onClick={toggleModalPlayer}
              />
            </div>
            <hr className=" border-t-1 border-slate-700 w-full" />
            <div className="flex justify-center w-[100%] h-[50vh]">
              {console.log(audioData)}
              <img src={audioData.img} alt="" className="w-[100%]" />
            </div>
            <div className="flex items-center justify-center mt-4 p-4 bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
              <audio controls className="w-full">
                <source
                  src={audioData.file}
                  type="audio/mp3"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div>
              <h3 className="my-4">Comments</h3>
              <p>{audioData.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
