import { UploadSVG } from ".";

interface Props{
    setCreateForm: React.Dispatch<React.SetStateAction<{
        title: string;
        area: number;
        price: number;
        description: string;
        location: string;
        mainImage: string;
        images: string[];
    }>>;
    mainImage:string;
    images: string[];
}

const AddImage = ({mainImage,setCreateForm, images }:Props) => {

  const handleMainFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setCreateForm((prevForm) => ({
        ...prevForm,
        mainImage: reader.result as string,
      }));
    };
    reader.readAsDataURL(file as Blob);
 
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setCreateForm((prevForm) => ({
        ...prevForm,
        images: [...prevForm.images, reader.result as string],
      }));
    };
    reader.readAsDataURL(file as Blob);
  };
  return (
   
        <div className="form">
          <h4 className="title">Images</h4>
          <div className="all-images-container">
            <div className="image-input-container">
              <h5>Main Image</h5>
              {mainImage ? (
                <img src={mainImage} className="inputed-image" />
              ) : (
                <div className="no-image-container">
                  <h6>No image uploaded</h6>
                </div>
              )}
              <div className="input-div-image">
                <input
                  className="input-image"
                  name="file"
                  type="file"
                  onChange={handleMainFileChange}
                />
                <UploadSVG />
              </div>
            </div>
            <div className="image-input-container">
              <h5> Image 2</h5>
              {images[1] ? (
                <img src={images[1]} className="inputed-image" />
              ) : (
                <div className="no-image-container">
                  <h6>No image uploaded</h6>
                </div>
              )}
              <div className="input-div-image">
                <input
                  className="input-image"
                  name="file"
                  type="file"
                  onChange={handleFileChange}
                />
                <UploadSVG />
              </div>
            </div>
            <div className="image-input-container">
              <h5>Image 3</h5>
              {images[2] ? (
                <img src={images[2]} className="inputed-image" />
              ) : (
                <div className="no-image-container">
                  <h6>No image uploaded</h6>
                </div>
              )}
              <div className="input-div-image">
                <input
                  className="input-image"
                  name="file"
                  type="file"
                  onChange={handleFileChange}
                />
                <UploadSVG />
              </div>
            </div>
          </div>
        </div>
  )
}

export default AddImage