import Layout from "@/layout/Layout";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { LuPenLine } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { useState } from "react";

function index() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  return (
    <Layout title={'নতুন শহীদ যোগ করুন'}>
      <section class="w-full dark:bg-gray-900">
        <div class="flex flex-col">
          <div className="relative flex mt-6 sm:mt-12 md:mt-24 lg:mt-24 justify-center">
            {/* <!-- Cover Image --> */}
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="User Cover"
              class="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[16rem] h-[12rem]"
            />

            {/* <!-- Profile Image --> */}
            <div className="absolute -mt-6 sm:-mt-12 md:-mt-24 text-center">
              <div className="relative group flex items-center justify-center">
                <img
                  src="/placeholder.webp"
                  alt="User Cover"
                  class="w-24 sm:w-32 object-cover md:w-44 lg:w-56 h-24 sm:h-32 md:h-44 lg:h-56 rounded-full border-2 "
                />
                <label
                  htmlFor="profile"
                  className="group-hover:opacity-60 opacity-0 absolute z-50 bg-slate-300 text-black rounded-full btn btn-ghost hover:text-white hover:bg-black hover:rounded-full"
                >
                  <CiImageOn size={24} />
                  <input id="profile" hidden type="file" />
                </label>
              </div>
              <div className="font-[CharuChandan] relative flex justify-center items-center gap-2 text-red-500 font-bold text-sm sm:text-lg md:text-xl lg:text-3xl drop-shadow-xl">
                <p
                  className="px-2 py-2 text-center"
                >{firstName||'আবু'} {lastName||'সাঈদ'}</p>
              </div>
            </div>
          </div>

          <div class="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            {/* <!-- Description --> */}
            <p class="w-full text-gray-700 font-[SolaimanLipiNormal] mt-12 dark:text-gray-400 text-md">
              <textarea
                placeholder="শহীদ এর তথ্য"
                className="textarea textarea-bordered sm:w-96 min-w-full"
              ></textarea>{" "}
            </p>

            {/* <!-- Detail --> */}
            <div class="w-full font-[SolaimanLipiNormal] my-auto py-6 flex flex-col justify-center gap-2">
              <div class="w-full px-2 flex sm:flex-row flex-col gap-2 justify-center">
                <div class="w-full">
                  <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div class="flex flex-col pb-3">
                      <label
                        htmlFor="first-name"
                        class="mb-1 text-balck md:text-lg"
                      >
                        নাম
                      </label>
                      <dd class="text-lg font-semibold">
                        <input
                          onChange={e=>setFirstName(e.target.value)}
                          id="first-name"
                          type="text"
                          className="px-2 rounded-md border-b w-full"
                          placeholder="আবু"
                        />
                      </dd>
                    </div>
                    <div class="flex flex-col py-3">
                      <dt class="mb-1 text-balck md:text-lg">পদবী</dt>
                      <dd class="text-lg font-semibold">
                        <input
                        onChange={e=>setLastName(e.target.value)}
                          type="text"
                          className="px-2 rounded-md border-b w-full"
                          placeholder="সাঈদ"
                        />
                      </dd>
                    </div>
                    <div class="flex flex-col py-3">
                      <dt class="mb-1 text-balck md:text-lg">জন্ম তারিখঃ</dt>
                      <dd class="text-lg font-semibold">
                        <input
                          type="date"
                          className="px-2 rounded-md border-b w-full"
                          placeholder="লিখুন"
                        />
                      </dd>
                    </div>
                    <div class="flex flex-col py-3">
                      <dt class="mb-1 text-balck md:text-lg">লিঙ্গ</dt>
                      <dd class="text-lg font-semibold">
                        <select className="px-2 rounded-md border-b w-full">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </dd>
                    </div>
                    <div class="flex flex-col py-3">
                      <dt class="mb-1 text-balck md:text-lg">লেখাপড়া</dt>
                      <dd class="text-lg font-semibold">
                        <input
                          type="text"
                          className="px-2 rounded-md border-b w-full"
                          placeholder="লিখুন"
                        />
                      </dd>
                    </div>
                    <div class="flex flex-col py-3">
                      <dt class="mb-1 text-balck md:text-lg">স্মৃতি স্মারক</dt>
                      <dd class="text-lg font-semibold">
                        <input
                          type="text"
                          className="px-2 rounded-md border-b w-full"
                          placeholder="লিখুন"
                        />
                      </dd>
                    </div>
                  </dl>
                </div>
                <div class="w-full">
                  <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div class="flex flex-col py-3">
                      <dt class="mb-1 text-balck md:text-lg">পিতা</dt>
                      <dd class="text-lg font-semibold">
                        <input
                          type="text"
                          className="px-2 rounded-md border-b w-full"
                          placeholder="লিখুন"
                        />
                      </dd>
                    </div>
                    <div class="flex flex-col py-3">
                      <dt class="mb-1 text-balck md:text-lg">মাতা</dt>
                      <dd class="text-lg font-semibold">
                        <input
                          type="text"
                          className="px-2 rounded-md border-b w-full"
                          placeholder="লিখুন"
                        />
                      </dd>
                    </div>
                    <div class="flex flex-col pb-3">
                      <dt class="mb-1 text-balck md:text-lg">ঠিকানা</dt>
                      <dd class="text-lg font-semibold">
                        <input
                          type="address"
                          className="px-2 rounded-md border-b w-full"
                          placeholder="লিখুন"
                        />
                      </dd>
                    </div>

                    <div class="flex flex-col py-3">
                      <dt class="mb-1 text-balck md:text-lg">
                        শহীদ হওয়ার তারিখ
                      </dt>
                      <dd class="text-lg font-semibold">
                        <input
                          type="date"
                          className="px-2 rounded-md border-b w-full"
                          placeholder="লিখুন"
                        />
                      </dd>
                    </div>
                    <div class="flex flex-col py-3">
                      <dt class="mb-1 text-balck md:text-lg">
                        শহীদ হওয়ার স্থান
                      </dt>
                      <dd class="text-lg font-semibold">
                        <input
                          type="text"
                          className="px-2 rounded-md border-b w-full"
                          placeholder="লিখুন"
                        />
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {/* add */}
            <div className="flex justify-center">
            <button className="btn rounded text-white btn-success">Publish</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default index;
