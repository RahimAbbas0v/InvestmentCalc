import { useEffect, useState } from "react"
import ResultFile from "./components/ResultFile"
import Header from "./layouts/Header"
import Inputs from "./components/Inputs"

function App() {
  const [formData,setFormData]=useState({
    initialInvestment:10000,
    annualInvestment:1000,
    expectedReturn:8,
    duration:12
  })
  function handleChange(fielName,value){
    setFormData(prevData=>{
      return({
        ...prevData,[fielName]:Number(value)
      })
    })
  }
    console.log(formData);
    
  return (
    <>
    <Header/>
    <Inputs handleChange={handleChange} data={formData}/>
    <ResultFile datas={formData}/>
    </>
  )
}

export default App
