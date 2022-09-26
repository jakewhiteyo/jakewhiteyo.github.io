import React from 'react'
import resume from '../../assets/jake-white-resume-2022.pdf'
import './head.css'

const downloadResume = () => {
    console.log('download');
    fetch(resume).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'jake-white-resume-2022.pdf';
            alink.click();
        })
    })
}

const Buttons = () => {
  return (
    <div>
        <button class="resumeButton" onClick={downloadResume} value="download">Download Resume</button>
        <button class="contactButton">Contact</button>
    </div>
  )
}

export default Buttons