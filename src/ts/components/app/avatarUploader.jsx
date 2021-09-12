/* eslint-disable jsx-a11y/label-has-associated-control */
// import React from 'react';
// import { FC, useState } from 'react';

// interface IAvatarUpload {
//  file: string;
//  imagePreviewUrl: string;
// }

// const ImageUpload : FC<IAvatarUpload> = () => {
//  const [file, setFile] = useState('');
//  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

//  const handleSubmit = (e: { preventDefault: () => void; }) => {
//    e.preventDefault();
//    console.log('handle uploading-', file);
//  }

//  const handleImageChange = (e: { preventDefault: () => void; target: { files: any[]; }; }) => {
//    e.preventDefault();
//    let reader = new FileReader();
//    let file = e.target.files[0];

//      setFile({
//        file: file,
//      });
//      setImagePreviewUrl({
//       imagePreviewUrl: ,
//      });
//    reader.readAsDataURL(file, imagePreviewUrl)
//  }

//  const render() {
//    let {imagePreviewUrl} = this.state;
//    let $imagePreview = null;
//    if (imagePreviewUrl) {
//      $imagePreview = (<img src={imagePreviewUrl} />);
//    } else {
//      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//    }

//    return (
//      <div className="previewComponent">
//        <form onSubmit={(e)=>handleSubmit(e)}>
//          <input className="fileInput"
//            type="file"
//            onChange={(e)=>handleImageChange(e)} />
//          <button className="submitButton"
//            type="submit"
//            onClick={(e)=>handleSubmit(e)}>Upload Image</button>
//        </form>
//        <div className="imgPreview">
//          {$imagePreview}
//        </div>
//      </div>
//    )
//  }
// }

// export default ImageUpload;
import React from 'react';
import './avatarUploader.scss';
import noAvatarLogo from './bot.jpg';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img alt="" src={imagePreviewUrl} />;
    } else {
      $imagePreview = <img alt="" src={noAvatarLogo} />;
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="file">Choose an avatar</label>
          <input
            className="fileInput"
            name="file"
            type="file"
            onChange={(e) => this.handleImageChange(e)}
          />
        </form>
        <div className="imgPreview">{$imagePreview}</div>
      </div>
    );
  }
}

export default ImageUpload;
