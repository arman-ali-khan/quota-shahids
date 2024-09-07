import Link from "next/link";
function isJsonString(str) {
  try {
    var json = JSON.parse(str);
    return (typeof json === 'object');
  } catch (e) {
    return false;
  }
}
function User({shahid}) {
  console.log( shahid?.profile[0]?.data, isJsonString(shahid?.profile[0]?.data) ,'shahid?.profile[0]?.data')
    return (
        <Link href={`/shahid/${shahid?.id}`} className="card group card-compact bg-base-100 w-full shadow-xl">
        <figure className=" hover:grayscale group-hover:grayscale duration-300 cursor-pointer">
          <img className="h-96 object-cover"
            src={shahid?.profile[0]?.data}
            alt={shahid?.firstName[0]?.data+' '+shahid?.lastName[0]?.data}/>
        </figure>
        <div className="card-body">
          <h2 className="
first-letter:text-xl sm:first-letter:text-2xl md:first-letter:text-4xl first-letter:font-bold text-xs sm:text-xl md:text-2xl first-letter:font-[CharuChandan] font-[SolaimanLipiNormal] text-red-500">{shahid?.firstName[0]?.data+' '+shahid?.lastName[0]?.data}</h2>
          <p className="font-[SolaimanLipiNormal]">{shahid?.description?.data && JSON?.parse(shahid?.description?.data)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-error bg-red-500 font-thin text-white font-[SolaimanLipiNormal]">বিস্তারিত</button>
          </div>
        </div>
      </Link>
    );
}

export default User;