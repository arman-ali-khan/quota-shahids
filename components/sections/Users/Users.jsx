'use client';
import PaginatedItems from "@/lib/PaginatedItems";
import User from "./User";
import useSWR from "swr";
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data)

const Users = () =>{
  const { data, error,isLoading } = useSWR('/api/shahids', fetcher)
  console.log(data,'data');
    return <>
 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5">
      {
        data?.map((shahid,i)=><User key={i} shahid={shahid} />)
      }
    </div>
   <div className="pagination py-12">
   <PaginatedItems itemsPerPage={4} />
   </div>
    </>
}

export default Users