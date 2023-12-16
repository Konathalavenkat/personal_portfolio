import React from 'react';
const Resume = () => {
  const downloadPdf = () => {
    window.open(process.env.REACT_APP_Resume_download_link);
  };

  return (
    <div>
      <div className='d-flex justify-content-center'>
            <button onClick={downloadPdf} className='btn btn-primary'>Download Resume</button>
      </div>
      <div style={{ height: '1080px', overflow: 'hidden'}} className='d-flex justify-content-center'>
      <iframe
        title="PDF Viewer"
        src={process.env.REACT_APP_Resume_Link}
        width={'40%'}
        height="1080px"
        style={{paddingTop:"50px",paddingBottom:"50px"}}
      ></iframe> 
      </div>
    </div>
  );
};

export default Resume;