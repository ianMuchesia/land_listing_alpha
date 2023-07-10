import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import UploadSVG from "../../components/UploadSVG";

const Settings = () => {
  const [createForm, setCreateForm] = useState({
    title: "",
    metres: 0,
    price: 0,
    description: "",
    location: "",
    mainImage: "",
    images: [""],
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

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
    console.log(createForm.mainImage);
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


  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault()
    console.log("submitting form", createForm );
  }

  return (
    <section>
      <BreadCrumb title="Settings" link="/setings" />

      <form action="" className="settings-container" onSubmit={handleSubmit}>
        <div className="settings-header">
          <button className="btn">Edit A Property</button>
          <button className="btn">Delete A Property</button>
        </div>
        <div className="form">
          <h4 className="title">Add Property</h4>
          <div className="input-container">
            <label htmlFor="property-title" className="form-label">
              Name
            </label>
            <input type="text" className="form-input"
            name="title" value={createForm.title} onChange={handleChange} />
          </div>
          <div className="input-container">
            <label htmlFor="property-area" className="form-label">
              Area in metres<sup>2</sup>
            </label>
            <input type="number" className="form-input" placeholder="e.g 600" 
            name="metres" value={createForm.metres} onChange={handleChange}/>
          </div>
          <div className="input-container">
            <label htmlFor="property-price" className="form-label">
              Price(Ksh)
            </label>
            <input type="text" className="form-input" placeholder="e.g 60000"
            name="price" value={createForm.price} onChange={handleChange} />
          </div>
          <div className="input-container">
            <label htmlFor="property-description" className="form-label">
              Description
            </label>
            <textarea rows={7} className="form-textarea" 
            name="description" value={createForm.description} onChange={handleChange}/>
          </div>
          <div className="input-container">
            <label htmlFor="property-location" className="form-label">
              Location
            </label>
            <select  id="" name="location"  onChange={handleChange} className="form-input" >
              <option value="">--please select--</option>
              <option value="Kizingo">Kizingo</option>
              <option value="Likoni">Likoni</option>
            </select>
          </div>
        </div>

        <div className="form">
          <h4 className="title">Images</h4>
          <div className="all-images-container">
            <div className="image-input-container">
              <h5>Main Image</h5>
              {createForm.mainImage ? (
                <img src={createForm.mainImage} className="inputed-image" />
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
              {createForm.images[1] ? (
                <img src={createForm.images[1]} className="inputed-image" />
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
              {createForm.images[2] ? (
                <img src={createForm.images[2]} className="inputed-image" />
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
        <button className="btn btn-right ">ADD PROPERTY</button>
      </form>
    </section>
  );
};

export default Settings;
