import { faAdd, faPlay, faPlayCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import React from "react";
import {
  AddCategoryApi,
  GetCategoryApi,
  GetMetaDataApi,
  UpdateMetaDataApi,
} from "../services/allApi";

const Watchlist = () => {
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
  // const [inputValue, setInputValue] = useState(null)
  // const [getCategoryStatus, setGetCategoryStatus] = useState({});

  const toggleModal = () => {
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

  const getAllcategory = async () => {
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
      toggleModal();
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
    toggleModal();
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
    toggleModalMedia();
  };
  //   const getAllMetaData = async() =>{
  // const result = await GetMetaDataApi(id);
  // console.log(result)
  // setAllMetaData(result.data.cards)
  // }

  const addMetadata = async () => {
    if (
      inputRefDesc.current.value != "" &&
      inputRefImage.current.value != "" &&
      inputRefTitle.current.value != ""
    ) {
      console.log(
        inputRefImage.current.value,
        inputRefTitle.current.value,
        inputRefDesc.current.value
      );
      console.log(id);
      const result = await GetMetaDataApi(id);
      if (result.status >= 200 && result.status < 300) {
        console.log(typeof result.data);
        const card = {
          img: inputRefImage.current.value,
          title: inputRefTitle.current.value,
          desc: inputRefDesc.current.value,
        };
        result.data.cards.push(card);
        console.log(result.data);
        const update = await UpdateMetaDataApi(result.data, id);
        console.log(update.data);
      }
      // getAllMetaData()
      getAllcategory();
    } else {
      alert("Input fields cannot be empty");
    }

    toggleModalMedia();
  };
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
  }, []);

  return (
    <div
      className="p-6 px-7 "
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
              <h1 className="fsize" style={{ "--bs-font": "2.1rem" }}>
                {item.name}
              </h1>
              <hr className="border-t-1 border-gray-700 w-1/2 " />
              <div className="grid grid-cols-1 auto-rows-minmax-300px-auto md:grid-cols-3 lg:grid-cols-4 mt-5 gap-y-5 md:gap-x-2 place-items-center">
                {item?.cards.map((data) => (
                  <div
                    key={item.id}
                    ref={cardRef}
                    className="border h-full border-solid border-sky-400 flex flex-col w-11/12 justify-between rounded-md"
                  >
                    <div className="relative w-full "><img src={data?.img} alt="" style={{ height: "10rem" ,width:'100%'}} />
                    <FontAwesomeIcon icon={faPlay} className="fa-2x text-green-500 absolute top-[50%] left-[45%] transition-transform hover:scale-125"/>
                    </div>
                    <div className="p-3 px-4 bg-transparent">
                      <h2 className="fsize" style={{ "--bs-font": "1.65rem" }}>
                        {data?.title}
                      </h2>
                      <p className="text-xs mt-2">{data?.desc.length>50? data?.desc.slice(50)+"...":data?.desc}</p>
                      <button className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 mt-4 w-3/4 text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}

                <div
                  className="flex flex-col min-h-[300px] border-2 border-dotted border-sky-400 w-11/12 justify-center items-center rounded-md min-h-full bg-[#38bff826]"
                  // style={{ minHeight: `${cardHeight}px` }}
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
        onClick={toggleModal}
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
                onClick={toggleModal}
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
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-start justify-center z-50">
          <div className="bg-black rounded-lg shadow-lg max-w-md w-full p-6 mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Add Media</h2>
              <FontAwesomeIcon
                icon={faTimes}
                className="scale-125"
                onClick={toggleModal}
              />
            </div>
            <label htmlFor="category">Add image url</label>
            <input
              type="text"
              id="category"
              placeholder="Image url"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffca2c] focus:border-transparent mt-2"
              ref={inputRefImage}
            />
            <label htmlFor="category">Title</label>
            <input
              type="text"
              id="category"
              placeholder="Title"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffca2c] focus:border-transparent mt-2"
              ref={inputRefTitle}
            />
            <label htmlFor="category">Description</label>
            <input
              type="text"
              id="category"
              placeholder="Description"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffca2c] focus:border-transparent mt-2"
              ref={inputRefDesc}
            />
            <div className="mt-6 flex justify-end">
              <button
                onClick={addMetadata}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add media
              </button>
            </div>
          </div>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default Watchlist;
