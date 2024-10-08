import { useWindowSize } from "@react-hook/window-size"
import { useEffect, useState } from "react"
import JobListSection from "./JobListSection"
import { useDispatch, useSelector } from 'react-redux'
import { clearFilter, removeJob } from "./features/JobList/listSlice"

const App = () => {
  const dispatch = useDispatch()
  const [img,setImg] = useState()
  const [width] = useWindowSize()
 const { FilterArr } = useSelector((store) => store.list)
  useEffect(()=>{
    if (width >= 1114) {
      setImg('/Job_listing images/bg-header-desktop.svg')
    } else if (width >= 700) {
      setImg('/Job_listing images/bg-header-mobile.svg')
    } else {
      setImg('/Job_listing images/bg-header-mobile.svg')
    }
  },[width])

  const singleItem = (name) =>{
    dispatch(removeJob(name))
  }
  return (
    <div>
      <header>
        <div className="bg-[#5ba4a4] w-screen">
          <img src={img} alt="logo" className="w-screen" />
        </div>
      </header>
      <section>
        {FilterArr.length > 0 && (
          <div className={`align-element w-screen sm:w-[45rem] lg:w-[60rem] relative bottom-14 bg-white sm:h-[4rem] box-border border mt-5 shadow-md pt-3 pb-3 rounded-lg flex justify-between `}>
            <div className="flex flex-wrap gap-2">
              {FilterArr.map((job, index) => {
                return (
                  <button
                    key={index}
                    className=" bg-[#eef6f6] border rounded flex justify-between  gap-4 mr-3 "
                    onClick={()=>singleItem(job)}
                  >
                    <p className="text-[#5ba4a4] pl-2 mt-1 font-medium">{job}</p>
                    <div className="bg-[#5ba4a4] w-8 h-9  rounded-br rounded-tr hover:bg-black ">
                      <img
                        src="/Job_listing images/icon-remove.svg"
                        alt="remove"
                        className="mt-[10px] ml-[10px]"
                      />
                    </div>
                  </button>
                )
              })}
            </div>

            <button className=" text-[#5ba4a4] hover:underline" onClick={()=>dispatch(clearFilter())}>clear</button>
          </div>
        )}
        <JobListSection />
      </section>
    </div>
  )
}

export default App
