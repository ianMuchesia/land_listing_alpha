import React from "react";
import { Icon } from "@iconify/react";
const ImageContainer = () => {
  return (
    <div>
      <div className="main__image-upload-container">
        <label>
          <>
            <div className="main__image-upper-section">
              <Icon icon="uil:image-upload" className="main__image-upload-icon"/>

              <p className="">Click to upload main image</p>
            </div>
            <p className="main__image-text-recommend">
              Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF
              less than 20MB
            </p>
          </>

          <input type="file" name={`shop-image`} />
        </label>
      </div>
    </div>
  );
};

export default ImageContainer;
