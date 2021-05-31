import React , {useState} from 'react';
import {animedata} from '../Data.js';
import "../index.css";
import MyAccordian from './MyAccordian';

 const Accordian = () => {

    const [data,setData] = useState(animedata);
     return (
         <>
         <section className="main-div">
         <h1>Shuffler</h1>
         {
             data.map((curElem) => {
                 const {id,anime,answer}= curElem;
                 return <MyAccordian key ={id}{...curElem}/>
             })
         }

         </section>
         
         </>
     )
 }

export default Accordian;