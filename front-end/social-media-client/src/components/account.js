import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import { message, Upload } from 'antd';

const getBase64 = (img, callback) =>{
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const prepUpload = (file) => {
  //check the file type, only jpeg or png allowed
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng){
    message.error('You can only upload a JPG or PNG file');
  }
  //check the file size
  const isSize = file.size / 1024 / 1024 < 2;
  if (!isSize){
    message.error('Image must be smaller than 2MB');
  }
  return isJpgOrPng && isSize;
}

function Account(props) {
  let { id } = useParams();  
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) =>{
    if (info.file.status === 'uploading'){
      setLoading(true);
      return;
    }

    if (info.file.status === 'done'){
      //get this url from response
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style ={{border:0, background: 'none',}} type="button">
      {loading ? <LoadingOutlined/>:<PlusOutlined/>}
      <div style={{marginTop: 8,}}>
        Upload
      </div>
    </button>
  );
  return (
    
    <>
      <h1>Account ID: {id}</h1>
      <p>This is where your account is displayed</p>
      <p>Upload an avatar</p>
      <Upload
      name="avatar"
      listType='picture-card'
      className='avatar-uploader'
      showUploadList={false}
      action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
      beforeUpload={prepUpload}
      onChange={handleChange}>
        {imageUrl ? (
          <img src={imageUrl}
          alt='avatar'
          style={{ width: '100%',}}/>
        ):(uploadButton)}
      </Upload>

      <Upload
      name='avatar'
      listType='picture-circle'
      className='avatar-uploader'
      showUploadList={false}
      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
      beforeUpload={prepUpload}
      onChange={handleChange}>
        {imageUrl ? (
          <img src={imageUrl}
          alt='avatar'
          style={{width: '100%',}}/>
        ):(uploadButton)}
      </Upload>
    </>
  );
}
export default Account;
