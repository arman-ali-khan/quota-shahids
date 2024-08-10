import Layout from "@/layout/Layout"

const page = ({user}) =>{
    console.log(user,'user');
    return <Layout title={`শহীদ আবু সাঈদ - রংপুর`}>
       
<section class="w-full overflow-hidden dark:bg-gray-900">
    <div class="flex flex-col">
      <div className="relative flex mt-6 sm:mt-12 md:mt-24 lg:mt-24 justify-center">
          {/* <!-- Cover Image --> */}
          <img src={user?.cover} alt="User Cover"
                class="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[16rem] h-[12rem]" />

        {/* <!-- Profile Image --> */}
       <div className="absolute -mt-6 sm:-mt-12 md:-mt-24 text-center">
       <img src={user?.photo} alt="User Cover"
                class="w-24 sm:w-32 grayscale object-cover md:w-44 lg:w-56 h-24 sm:h-32 md:h-44 lg:h-56 rounded-full border-2 " />
                <div className="font-[CharuChandan] text-red-500 font-bold text-sm sm:text-lg md:text-xl lg:text-3xl drop-shadow-xl">{user?.firstName+" "+user?.lastName}</div>
       </div>
      </div>

        <div
            class="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            {/* <!-- Description --> */}
            <p class="w-fit text-gray-700 font-[SolaimanLipiNormal] mt-12 dark:text-gray-400 text-md">{JSON.parse(user?.description)} <span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></p>


            {/* <!-- Detail --> */}
            <div class="w-full font-[SolaimanLipiNormal] my-auto py-6 flex flex-col justify-center gap-2">
                <div class="w-full flex sm:flex-row flex-col gap-2 justify-center">
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">নাম<span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.firstName}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">পদবী<span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.lastName}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">জন্ম তারিখঃ
                                <span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.dateOfBirth}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">লিঙ্গ<span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.gender}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">শিক্ষা<span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.education}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">স্মৃতি স্মারক<span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.commemorative}</dd>
                            </div>
                        </dl>
                    </div>
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">পিতা <span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.father}</dd>
                            </div>

                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">মাতা <span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.mother}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">ঠিকানা <span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.address}</dd>
                            </div>

                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">শহীদ হওয়ার তারিখ<span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.dateOfShahid}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex items-center gap-2">শহীদ হওয়ার স্থান
                                <span className="hover:underline cursor-pointer text-green-600 text-sm">Edit</span></dt>
                                <dd class="text-lg font-semibold">{user?.shahidAddress}</dd>
                            </div>
                           
                        </dl>
                    </div>
                </div>
                
                <div class="my-10 w-full">
                    {/* <!--  --> */}
                    <h1
                        class="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl xs:text-xl">
                        Editor's</h1>

                    {/* <!-- Editors --> */}
                   <div className="flex items-center gap-1 flex-wrap">
                    {
                        [...Array(121).keys()]?.map((data,i)=>{
                            return <p className="text-green-600 text-sm hover:underline duration-300 cursor-pointer">hello{i},</p>
                        })
                    }
                   </div>
                </div>
            </div>

           

        </div>
    </div>
</section>

    </Layout>
}



export async function getServerSideProps(context) {
    const { id } = context.params;
  
    const res = await fetch(`http://localhost:3000/api/shahid/${id}`);
    const user = await res.json();
  
    if (res.status !== 200) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        user,
      },
    };
  }
  export default page
