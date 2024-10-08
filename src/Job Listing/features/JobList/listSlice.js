import { createSlice } from "@reduxjs/toolkit";
import JobListData from '../../data.json'

const initialState = {
  JobList: JobListData.map((i)=>i),
  FilterArr: []
}
  
 
 
 



 const listSlice = createSlice({
  name:'list',
  initialState,
  reducers:{
      addToFilter: (state,action)=>{
              const {value} = action.payload
           const job = state.FilterArr.find((e)=>e === value)  
          if (job) {
             null
          } else {
            state.FilterArr.push(value)
          }
          const selectedList = (job) => {
            return state.FilterArr.every((keyword)=>{
              return (
                job.level.includes(keyword) ||
                job.role.includes(keyword) ||
                job.languages.some((language) => language.includes(keyword)) ||
                job.tools.some((tool) => tool.includes(keyword))
              )
            })
          }
         const filter = JobListData.filter((data) =>selectedList(data))
            state.JobList = filter
           
    
      },
      clearFilter:(state)=>{
        state.JobList = JobListData.map((i) => i),
        state.FilterArr= []
      },
      removeJob: (state,action) =>{
          
          const newFilteredList = state.FilterArr.filter((job)=>job !== action.payload) 

          state.FilterArr = newFilteredList
           const selectedList = (job) => {
             return newFilteredList.every((keyword) => {
               return (
                 job.level.includes(keyword) ||
                 job.role.includes(keyword) ||
                 job.languages.some((language) => language.includes(keyword)) ||
                 job.tools.some((tool) => tool.includes(keyword))
               )
             })
           }
           const filter = JobListData.filter((data) => selectedList(data))
           state.JobList = filter
      }
  }
 })

export const {addToFilter,clearFilter,removeJob} = listSlice.actions

 export default listSlice.reducer