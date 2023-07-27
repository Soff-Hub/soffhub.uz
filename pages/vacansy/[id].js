import  { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getDataRepository from "../../repository/getData-repository";
import { useSelector } from "react-redux";
import parse from 'html-react-parser'
import Layout from "../../components/layout/Layout";
import BasicModal from "../../components/elements/button";
import ModalAntd from "../../components/elements/button";



export default function VacansyId(){
    let Router = useRouter();
    const {id} = Router.query
    const [data, setData] = useState()
    const languageData = useSelector((state) => state.translations.data);


     const getVacansyIdData = async () => {
        const promise = await getDataRepository.getPromise(
            `vacancy/${id}`,
            languageData.language
        )
        if (promise) {
            setData(promise.data)
        }
     }
     
     useEffect(() => { 
        getVacansyIdData()
     },[])

     var parse = require("html-react-parser");
console.log(data);
    return (
       <>
      <Layout>
      {
        data &&

         <div className="container">
         <div className="row">
             <div className="col-12 card-style-1 hover-up p-3 hover-neon mt-5 mb-5 wow animate__animated animate__fadeInUp mt-70">
                 <h3 className="color-linear"> - {data.title}</h3>
             </div>

             <div className="col-12 d-flex g-2 text-base mb-5 mt-5 align-items-center" style={{gap:'10px'}}>
             <i className="fa-solid fa-calendar-day fa-beat-fade align-items-center"></i> 
               <span>{data.to_day}</span> - 
                <span>{data.from_day}</span>
             </div>

             <div className="col-12 text-base mb-5 g-2 d-flex">
             <i className="fa-solid fa-clock fa-beat-fade me-2 ms-0"></i> 
              <span>{data.start_time}</span> - 
                <span>{data.end_time}</span>
             </div>
             <div className="col-12 text-base mb-5 d-flex align-content-center g-2">
             <i className="fa-solid fa-money-check-dollar fa-beat-fade ms-0  me-2 "></i>
              <span>{data.salary}</span> 
             </div>
             <div className="col-12  d-flex">
              - {parse(data.body)}
             </div>
             <div className="col-12 my-2  d-flex justify-content-end">
             <div style={{cursor:'pointer'}} className="view-more-vacansy-btn ariza-btn"><ModalAntd title={data.title} id={data.id}/></div>
              
             </div>
         </div>
     </div>
       }
     
      </Layout>
       </>
    )
}