import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import React from "react";

const Watchlist = () => {

        const cardRef = useRef(null);
        const [cardHeight, setCardHeight] = useState(null);
      
        // Function to update card height
        const updateCardHeight = () => {
          if (cardRef.current) {
            setCardHeight(cardRef.current.offsetHeight);
          }
        };
      
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
        <h1>Science Fiction</h1>
        <hr className="border-t-1 border-gray-700 w-1/2 " />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-y-5 md:gap-x-2 place-items-center">
          <div className="card flex flex-col border border-solid border-sky-400 w-11/12 justify-between rounded-md" ref={cardRef}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm8GC2zXFmi6LR50M69scCiQyasKYRUeKkg&s"
              alt=""
              style={{ height: "10rem" }}
            />
            <div className="p-3 px-4">
              <h2>Card title</h2>
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
              <h2>Card title</h2>
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
              <h2>Card title</h2>
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
              <h2>Card title</h2>
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
      <div className="category mt-8">
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
              <h2>Card title</h2>
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
              <h2>Card title</h2>
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
              <h2>Card title</h2>
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
              <h2>Card title</h2>
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
      </div>

      <button className="fixed right-10 bottom-6 bg-[#ffca2c] px-4 py-2 rounded-full text-black">
        <FontAwesomeIcon icon={faAdd} className="mr-2" />
        Add Category
      </button>
    </div>
  );
};

export default Watchlist;
