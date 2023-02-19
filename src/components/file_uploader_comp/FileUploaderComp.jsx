import React, { useEffect, useState } from "react";

import ms from "./FileUploaderComp.module.css";
import default_profile_image from "../../assets/images/profile_icon.jpg";
import axios from "axios";

const FileUploaderComp = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  const handleChange = (e) => {
    // console.log(e.target.files)
    setFile(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
    // console.log(file);
    console.log(url);
  };

  const upload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    console.log('hello');
    const { data } = await axios.post('/upload-file', formData);
    console.log(data)
    onUpload(data.url); // onUpload should be pass as a parameter to the component
  };

  useEffect(() => {
    if (file) {
      upload();
    }
  }, [file]);


  //   useEffect(() => {
  //     handleChange();
  //   }, [file]);

  return (
    <>
      <div className={ms.file_picker_container}>
        <div className={ms.input_container}>
          <input
            type="file"
            className={ms.file_input}
            onChange={handleChange}
          />
          <div className={ms.select_file_box}>Browse File</div>
          <p className={ms.file_upload_instruction}>maximum size 1 mb</p>
        </div>
        <img src={url ? url : default_profile_image} alt={`profile_image`} />
      </div>
    </>
  );
};

export default FileUploaderComp;
