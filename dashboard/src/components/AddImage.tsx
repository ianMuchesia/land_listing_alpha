import { UploadSVG } from ".";
import { typeImage } from "../@types/@types";

interface Props {
  setCreateForm: React.Dispatch<
    React.SetStateAction<{
      title: string;
      area: number;
      price: number;
      description: string;
      location: string;
      mainImage: { url: string };
      images: { url: string }[];
    }>
  >;
  mainImage: typeImage;
  images: typeImage[];
}

const AddImage = ({ mainImage, setCreateForm, images }: Props) => {
  const handleMainFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setCreateForm((prevForm) => {
        return {
          ...prevForm,
          mainImage: { ...prevForm.mainImage, url: reader.result as string },
        };
      });
    };
   
    reader.readAsDataURL(file as Blob);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setCreateForm((prevForm) => {
        const updatedImages = prevForm.images.filter((img) => img.url !== "");
        return {
        ...prevForm,
        images: [...updatedImages, { url: reader.result as string }],
      }});
    };
    reader.readAsDataURL(file as Blob);
  };
 
  return (
    <div className="form">
      <h4 className="title">Images</h4>
      <div className="all-images-container">
        <div className="image-input-container">
          <h5>Main Image</h5>
          {mainImage.url ? (
            <img src={mainImage.url} className="inputed-image" />
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
          {images[0]?.url ? (
            <img src={images[0].url} className="inputed-image" />
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
          {images[1]?.url ? (
            <img src={images[1].url} className="inputed-image" />
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
  );
};

export default AddImage;
