import { useDispatch, useSelector } from "react-redux"
import { addToFilter } from "./features/JobList/listSlice"



const JobListSection = () => {
  const dispatch = useDispatch()
  const { JobList, FilterArr } = useSelector((store) => store.list)
 
  console.log(FilterArr)
  
  const handleRole = (value)=>{
    
     dispatch(addToFilter({ value }))
  }
   
 
  return (
    <div className="align-element">
      {JobList.map((i)=>{
        const {id,company,logo,featured,position,role,level,postedAt,contract,location,languages,tools} = i;
        return (
          <div
            className={`box-border border  mt-20 mb-20  md:mt-5 md:mb-6  shadow-md pt-3 pb-3 rounded-lg ${
              id === 1 && 'border-l-[#5ba4a4] border-l-[5px] rounded-lg'
            } ${id === 2 && 'border-l-[#5ba4a4] border-l-[5px] rounded-lg'}`}
            key={id}
          >
            <section className="grid md:flex justify-between">
              <article className="grid md:flex md:gap-6 ml-8">
                <div className="relative bottom-12 md:bottom-0">
                  <img src={logo} alt={company} className="xxs:w-16 md:w-24" />
                </div>
                <div className="relative bottom-6 md:bottom-0">
                  <div className="flex gap-3 ">
                    <h4 className="text-[#5ba4a4] font-bold text-[1em] sm:text-[2em] md:text-[1em]">
                      {company}
                    </h4>
                    <div className=" sm:mt-3 md:mt-0">
                      {i.new && (
                        <p className="border rounded-full pl-[13px] pr-[13px] sm:pl-[17px] sm:pr-[17px] pb-[1px] pt-[1px] text-[12px] sm:text-[20px] md:text-[13px] text-white bg-[#5ba4a4]">
                          NEW!
                        </p>
                      )}
                    </div>
                    <div className="sm:mt-3 md:mt-0">
                      {featured && (
                        <p className="border rounded-full pl-[13px] pr-[13px] pb-[1.5px] pt-[1.5px] text-[12px] sm:text-[20px] md:text-[13px] text-white bg-black">
                          FEATURED!
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <h2 className="sm:text-[2em] md:text-[1.3rem] font-bold text-[#2c3a3a] hover:text-[#5ba4a4] hover:cursor-pointer ">
                      {position}
                    </h2>
                    <div>
                      <ul className="flex gap-4 sm:text-[1.5em] md:text-[1.2em] ">
                        <li>{postedAt}</li>
                        <li className="list-disc ml-4">{contract}</li>
                        <li className="list-disc ml-4">{location}</li>
                      </ul>
                    </div>
                  </div>
                  <div className=" w-[90%] sm:w-[56.7vh] md:w-0">
                    <div className="border-b mb-4 mt-4  border-2 md:border-none"></div>
                  </div>
                </div>
              </article>
              <section className="flex flex-wrap sm:flex-nowrap items-center gap-4 mb-4  ml-8 md:mr-4 md:ml-0 ">
                <div className="flex gap-4">
                  <button
                    className="rounded-sm border pl-[10px] pr-[10px] bg-[#eef6f6] font-medium text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-white"
                    onClick={() => handleRole(role)}
                  >
                    {role}
                  </button>
                  <button
                    className="rounded-sm border pl-[10px] pr-[10px] bg-[#eef6f6] font-medium text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-white"
                    onClick={() => handleRole(level)}
                  >
                    {level}
                  </button>
                </div>
                <div className="flex gap-4">
                  {languages.map((language, index) => {
                    return (
                      <div key={index}>
                        <button
                          className="rounded-sm border pl-[10px] pr-[10px] bg-[#eef6f6] font-medium text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-white"
                          onClick={() => handleRole(language)}
                        >
                          {language}
                        </button>
                      </div>
                    )
                  })}
                </div>
                <div className="flex gap-4 ">
                  {tools.map((tools, index) => {
                    return (
                      <div key={index}>
                        <button
                          className="rounded-sm border pl-[10px] pr-[10px] bg-[#eef6f6] font-medium text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-white"
                          onClick={() => handleRole(tools)}
                        >
                          {tools}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </section>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default JobListSection
