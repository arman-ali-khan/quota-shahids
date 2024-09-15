import Layout from "@/layout/Layout";
import { MdOutlineAdivPhotoAlternate } from "react-icons/md";
import { LuPenLine } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { useState } from "react";


function index() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
// date picker
const [date, setDate] = useState('');

const handleDateChange = (event) => {
  setDate(event.target.value);
};

  return (
    <Layout title={'নতুন শহীদ যোগ করুন'}>
      <section className="w-full">
        <div className="flex flex-col">
          <div className="relative flex mt-6 sm:mt-12 md:mt-24 lg:mt-24 justify-center">
            {/* <!-- Cover Image --> */}
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="User Cover"
              className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[16rem] h-[12rem]"
            />

            {/* <!-- Profile Image --> */}
            <div className="absolute -mt-6 sm:-mt-12 md:-mt-24 text-center">
              <div className="relative group flex items-center justify-center">
                <img
                  src="/placeholder.webp"
                  alt="User Cover"
                  className="w-24 sm:w-32 object-cover md:w-44 lg:w-56 h-24 sm:h-32 md:h-44 lg:h-56 rounded-full border-2 "
                />
                <label
                  htmlFor="profile"
                  className="group-hover:opacity-60 opacity-0 absolute z-50 bg-slate-300 text-black rounded-full btn btn-ghost hover:text-white hover:bg-black hover:rounded-full"
                >
                  <CiImageOn size={24} />
                  <input id="profile" hidiven type="file" />
                </label>
              </div>
              <div className="font-[CharuChandan] relative flex justify-center items-center gap-2 text-red-500 font-bold text-sm sm:text-lg md:text-xl lg:text-3xl drop-shadow-xl">
                <p
                  className="px-2 py-2 text-center"
                >{firstName||'আবু'} {lastName||'সাঈদ'}</p>
              </div>
            </div>
          </div>\
          {/* Date picker */}
          <div className="relative">
      {/* Hidden Datepicker */}
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />

      {/* Custom Display Button */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => document.querySelector('input[type="date"]').focus()}
      >
        Select Date
      </button>

      {/* Display selected date */}
      {date && (
        <div className="mt-2 text-gray-700">
          Selected Date: <span className="font-medium">{date}</span>
        </div>
      )}
    </div>
          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            {/* <!-- Description --> */}
            <p className="w-full text-gray-700 font-[SolaimanLipiNormal] mt-12 dark:text-gray-400 text-md">
              <textarea
                placeholder="শহীদ এর তথ্য"
                className="textarea textarea-bordered sm:w-96 focus:outline-none focus:border-b-2 duration-300 min-w-full"
              ></textarea>{" "}
            </p>

            {/* <!-- Detail --> */}
            <div className="w-full font-[SolaimanLipiNormal] my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full px-2 flex sm:flex-row flex-col gap-2 justify-center">
                <div className="w-full">
                  <div className="">
                    <div className="flex flex-col py-3">
                     
                      <div className="text-lg font-semibold">
                      <div className="text-lg font-semibold">
                        <input
                        onChange={e=>setLastName(e.target.value)}
                          type="text"
                          className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300"
                          placeholder="First Name"
                        />
                      </div>
                      </div>
                    </div>
                    <div className="flex flex-col py-3">
                     
                      <div className="text-lg font-semibold">
                        <input
                        onChange={e=>setLastName(e.target.value)}
                          type="text"
                          className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col py-3">
                      <div className="text-lg font-semibold">
                        <input
                          type="date"
                          className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300"
                          placeholder="Date of birth"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col py-3">
                      <div className="text-lg font-semibold">
                        <select className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col py-3">
                      <div className="text-lg font-semibold">
                        <input
                          type="text"
                          className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300"
                          placeholder="Education"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col py-3">
                      <div className="text-lg font-semibold">
                        <input
                          type="text"
                          className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300"
                          placeholder="Commemorative honor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="">
                  <div className="flex flex-col py-3">
                      <div className="text-lg font-semibold">
                        <input
                          type="text"
                          className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300"
                          placeholder="Father Name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col py-3">
                      <div className="text-lg font-semibold">
                        <input
                          type="text"
                          className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300"
                          placeholder="Mother Name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col py-3">
                      <div className="text-lg font-semibold">
                        <input
                          type="adivress"
                          className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300"
                          placeholder="Home Address"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col py-3">
                      <div className="text-lg font-semibold">
                        <input
                          type="date"
                          className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300"
                          placeholder="Date of shahid"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col py-3">
                      <div className="text-lg font-semibold">
                        <input
                          type="text"
                          className="px-2 rounded-md border-b w-full focus:outline-none focus:border-b-2 duration-300"
                          placeholder="Place of shahid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* adiv */}
            <div className="flex justify-center">
            <button className="btn rounded text-white px-8 btn-success">Publish</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default index;
