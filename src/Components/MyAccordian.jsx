import React , {useState} from 'react';

 const MyAccordian = ({anime,answer}) => {
     const [show,setShow] = useState(false);

    return (
        <>
        <div className="main-heading">
        <p onClick={() =>setShow(!show)}>{show? "➖" : "➕"}</p>
        <h3>{anime}</h3>

        </div>
        {
            show && <p className="answers">{answer}</p>
        }
        
            
        </>
    )
}

export default MyAccordian;
