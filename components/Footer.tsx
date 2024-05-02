import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex  text-black-100 mt-5 border-t border-gray-100">
      <div className="flex  justify-between gap-5 px-6 py-10">
        <div className="flex  justify-between items-center gap-6">
          <h1 className='text-[25px] text-blue-800 font-bold '>BIKE.<p className='inline text-slate-400'>RECO</p> </h1>
          <p className="text-base text-gray-700">BikeReco 2024 | All Rights Recerved &copy;</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer