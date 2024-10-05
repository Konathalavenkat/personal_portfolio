import { useState, useEffect } from "react";

const Certificate = ({certname, embedlink, link})=>{
    const [show,setshow] = useState(false);
    return <div>
        <h3>    {certname}
            <button className="mx-1 btn btn-outline-success" onClick={()=>setshow(!show)}>{show ? "Hide Certificate" : "Show Certificate"}</button>
            <a href={link} className="mx-1 btn btn-outline-success" target="_blank">Download Certificate</a>
        </h3>
        {show && <div className="d-flex flex-row justify-content-center">
            <iframe src={embedlink} title="Certificate" width="100%" height="500"></iframe>
        </div>}
        <hr/>
    </div>
}

export default Certificate;