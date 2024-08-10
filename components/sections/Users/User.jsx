import Link from "next/link";

function User({shahid}) {
    return (
        <Link href={`/shahid/${shahid?.id}`} className="card group card-compact bg-base-100 w-full shadow-xl">
        <figure className=" hover:grayscale group-hover:grayscale duration-300 cursor-pointer">
          <img className="h-96 object-cover"
            src={shahid?.photo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="
first-letter:text-xl sm:first-letter:text-2xl md:first-letter:text-4xl first-letter:font-bold text-xs sm:text-xl md:text-2xl first-letter:font-[CharuChandan] font-[SolaimanLipiNormal] text-red-500">{shahid?.firstName+' '+shahid?.lastName}</h2>
          <p className="font-[SolaimanLipiNormal]">{JSON.parse(shahid?.description)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-error bg-red-500 font-thin text-white font-[SolaimanLipiNormal]">বিস্তারিত</button>
          </div>
        </div>
      </Link>
    );
}

export default User;