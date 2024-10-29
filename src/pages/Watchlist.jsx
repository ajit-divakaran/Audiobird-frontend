import { faAdd, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { AddCategoryApi } from "../services/allApi";

const Watchlist = () => {

        const cardRef = useRef(null); // To get the width of the first element card height
        const inputRef = useRef(null); // To get the input value
        const [cardHeight, setCardHeight] = useState(null); // stores card height from cardRef
        // const [category,setCategory] = useState({name:''}) // category details
        const [isOpen, setIsOpen] = useState(false); // toggle modal
        const [inputValue, setInputValue] = useState(null)

        const toggleModal = () => {
          const newIsOpen = !isOpen;
          setIsOpen(newIsOpen);
          
          if (newIsOpen) {
            document.body.classList.add('overflow-hidden');
          } else {
            document.body.classList.remove('overflow-hidden');
            // setInputValue(inputRef.current.value);
          }
        };
        
        // console.log(inputValue)
        const handleInput = () =>{
          if(inputRef.current && inputRef.current.value!=""){
            console.log(inputRef.current.value)
            
          }
          else{
            alert("Category cannot be blank")
          }
          toggleModal();
        }
      
        // Function to update card height
        const updateCardHeight = () => {
          if (cardRef.current) {
            setCardHeight(cardRef.current.offsetHeight);
          }
        };

          const handleAddCategory = async()=>{
            toggleModal()

            // setCategory({name:"test audiobook"});
            // const result = await AddCategoryApi(category);
            // console.log(result)
          }


          // const getAllcategory = async()=>{

          // }

      
        useEffect(() => {
          // Measure height on mount
          updateCardHeight();
         
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
      style={{ backgroundColor: "#262626", color: "#ebeff5" }}
    >
      <div className="text-center">
        <h1 className="fsize" style={{ "--bs-font": "1.15rem" }}>
          Categories
        </h1>
        {/* <hr className="border-t-1 border-gray-700 w-1/2 "/> */}
      </div>

      <div className="category mt-8">
        <h1 className="fsize" style={{ "--bs-font": "2.1rem" }}>Science Fiction</h1>
        <hr className="border-t-1 border-gray-700 w-1/2 " />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-y-5 md:gap-x-2 place-items-center">
          <div className="card flex flex-col border border-solid border-sky-400 w-11/12 justify-between rounded-md" ref={cardRef}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm8GC2zXFmi6LR50M69scCiQyasKYRUeKkg&s"
              alt=""
              style={{ height: "10rem" }}
            />
            <div className="p-3 px-4 bg-transparent">
              <h2 className="fsize" style={{ "--bs-font": "1.65rem" }}>Card title</h2>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati similique quisquam iste nesciunt, ea modi.
              </p>
              <button className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 mt-4 w-3/4 text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col border border-solid border-sky-400 w-11/12 justify-between rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm8GC2zXFmi6LR50M69scCiQyasKYRUeKkg&s"
              alt=""
              style={{ height: "10rem" }}
            />
            <div className="p-3 px-4">
              <h2 className="fsize" style={{'--bs-font':'1.65rem'}}>Card title</h2>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati similique quisquam iste nesciunt, ea modi.
              </p>
              <button className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 mt-4 w-3/4 text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col border border-solid border-sky-400 w-11/12 justify-between rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm8GC2zXFmi6LR50M69scCiQyasKYRUeKkg&s"
              alt=""
              style={{ height: "10rem" }}
            />
            <div className="p-3 px-4">
              <h2 className="fsize" style={{'--bs-font':'1.65rem'}}>Card title</h2>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati similique quisquam iste nesciunt, ea modi.
              </p>
              <button className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 mt-4 w-3/4 text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col border border-solid border-sky-400 w-11/12 justify-between rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm8GC2zXFmi6LR50M69scCiQyasKYRUeKkg&s"
              alt=""
              style={{ height: "10rem" }}
            />
            <div className="p-3 px-4">
              <h2 className="fsize" style={{'--bs-font':'1.65rem'}}>Card title</h2>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati similique quisquam iste nesciunt, ea modi.
              </p>
              <button className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 mt-4 w-3/4 text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col border-2 border-dotted border-sky-400 w-11/12 justify-center items-center rounded-md min-h-full bg-[#38bff826]" style={{ minHeight: cardHeight }} >
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="fa-3x w-[fit-content] bg-white rounded-full hover:scale-110 transition-transform hover:cursor-pointer"
              style={{ color: "#38bff8" }}
            />
          </div>
        </div>
      </div>
      {/* <div className="category mt-8">
        <h1>Motivational</h1>
        <hr className="border-t-1 border-gray-700 w-1/2 " />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-y-5 md:gap-x-2 place-items-center items-stretch">
          <div className="card flex flex-col border border-solid border-sky-400 w-11/12 justify-between rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm8GC2zXFmi6LR50M69scCiQyasKYRUeKkg&s"
              alt=""
              style={{ height: "10rem" }}
            />
            <div className="p-3 px-4">
              <h2 className="fsize" style={{'--bs-font':'1.65rem'}}>Card title</h2>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati similique quisquam iste nesciunt, ea modi.
              </p>
              <button className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 mt-4 w-3/4 text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col border border-solid border-sky-400 w-11/12 justify-between rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm8GC2zXFmi6LR50M69scCiQyasKYRUeKkg&s"
              alt=""
              style={{ height: "10rem" }}
            />
            <div className="p-3 px-4">
              <h2 className="fsize" style={{'--bs-font':'1.65rem'}}>Card title</h2>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati similique quisquam iste nesciunt, ea modi.
              </p>
              <button className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 mt-4 w-3/4 text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col border border-solid border-sky-400 w-11/12 justify-between rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm8GC2zXFmi6LR50M69scCiQyasKYRUeKkg&s"
              alt=""
              style={{ height: "10rem" }}
            />
            <div className="p-3 px-4">
              <h2 className="fsize" style={{'--bs-font':'1.65rem'}}>Card title</h2>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati similique quisquam iste nesciunt, ea modi.
              </p>
              <button className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 mt-4 w-3/4 text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col border border-solid border-sky-400 w-11/12 justify-between rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm8GC2zXFmi6LR50M69scCiQyasKYRUeKkg&s"
              alt=""
              style={{ height: "10rem" }}
            />
            <div className="p-3 px-4">
              <h2 className="fsize" style={{'--bs-font':'1.65rem'}}>Card title</h2>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati similique quisquam iste nesciunt, ea modi.
              </p>
              <button className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700 mt-4 w-3/4 text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col border-2 border-dotted border-sky-400 w-11/12 justify-center items-center rounded-md h-full bg-[#38bff826]" style={{ minHeight: cardHeight }}>
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="fa-3x w-[fit-content] bg-white rounded-full hover:scale-110 transition-transform hover:cursor-pointer"
              style={{ color: "#38bff8" }}
            />
          </div>
        </div>
      </div> */}

      <button className="fixed right-10 bottom-6 bg-[#ffca2c] px-4 py-2 rounded-full text-black" onClick={handleAddCategory}>
        <FontAwesomeIcon icon={faAdd} className="mr-2" />
        Add Category
      </button>

      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">/ */}


      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-start justify-center z-50">
          <div className="bg-black rounded-lg shadow-lg max-w-md w-full p-6 mt-8">
           <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Add Category</h2>
              <FontAwesomeIcon icon={faTimes} className="scale-125" onClick={toggleModal}/>
           </div>
            <label htmlFor="category">Category name</label>
            <input type="text" id="category" placeholder="Enter category name" className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffca2c] focus:border-transparent mt-2" ref={inputRef}/>
            <div className="mt-6 flex justify-end">
              <button onClick={handleInput} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add category
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
