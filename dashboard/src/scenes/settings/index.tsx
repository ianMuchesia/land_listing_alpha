import BreadCrumb from "../../components/BreadCrumb";

const Settings = () => {
  return (
    <section>
      <BreadCrumb title="Settings" link="/setings" />
      <div className="settings-header">
        <button className="btn">Edit A Property</button>
        <button className="btn">Delete A Property</button>
      </div>
      <form action="" className="form">
        <h4 className="title">Add Property</h4>
        <div className="input-container">
          <label htmlFor="property-title" className="form-label">
            Name
          </label>
          <input type="text" className="form-input" />
        </div>
        <div className="input-container">
          <label htmlFor="property-area" className="form-label">
            Area in metres<sup>2</sup>
          </label>
          <input type="number" className="form-input" placeholder="" />
        </div>
        <div className="input-container">
          <label htmlFor="property-price" className="form-label">
            Price(Ksh)
          </label>
          <input type="text" className="form-input" placeholder="e.g 60000" />
        </div>
        <div className="input-container">
          <label htmlFor="property-description" className="form-label">
            Description
          </label>
          <textarea rows={7} className="form-textarea" />
        </div>
        <div className="input-container">
          <label htmlFor="property-location" className="form-label">
            Loaction
          </label>
          <select name="" id="">
            <option value="">Kizingo</option>
            <option value="">Likoni</option>
          </select>
        </div>
      </form>

      <form action="" className="form">
        <h4 className="title">Images</h4>
        <div className="all-images-container">
        <div className="image-input-container">
          <h5>Main Image</h5>
        <div className="no-image-container">
              <h6>No image uploaded</h6>
            </div>
          <div className="input-div-image">
            
            <input className="input-image" name="file" type="file" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              className="icon-image"
            >
              <polyline points="16 16 12 12 8 16"></polyline>
              <line y2="21" x2="12" y1="12" x1="12"></line>
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
              <polyline points="16 16 12 12 8 16"></polyline>
            </svg>
          </div>
        </div>
        <div className="image-input-container">
          <h5> Image 2</h5>
        <div className="no-image-container">
              <h6>No image uploaded</h6>
            </div>
          <div className="input-div-image">
            
            <input className="input-image" name="file" type="file" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              className="icon-image"
            >
              <polyline points="16 16 12 12 8 16"></polyline>
              <line y2="21" x2="12" y1="12" x1="12"></line>
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
              <polyline points="16 16 12 12 8 16"></polyline>
            </svg>
          </div>
        </div>
        <div className="image-input-container">
          <h5>Image 3</h5>
        <div className="no-image-container">
              <h6>No image uploaded</h6>
            </div>
          <div className="input-div-image">
            
            <input className="input-image" name="file" type="file" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              className="icon-image"
            >
              <polyline points="16 16 12 12 8 16"></polyline>
              <line y2="21" x2="12" y1="12" x1="12"></line>
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
              <polyline points="16 16 12 12 8 16"></polyline>
            </svg>
          </div>
        </div>
        </div>
      </form>
      <button className="btn ">ADD PROPERTY</button>
    </section>
  );
};

export default Settings;
