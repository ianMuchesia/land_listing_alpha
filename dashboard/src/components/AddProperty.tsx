import useSWR from "swr";
import { baseURL } from "../baseURL";
import { typeLocation } from "../@types/@types";

interface Props {
  createForm: {
    title: string;
    area: number;
    price: number;
    description: string;
    location: string;
    mainImage: { url: string };
    images: { url: string }[];
  };
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
}

const fetcher = async (...args: Parameters<typeof fetch>): Promise<any> => {
  const response = await fetch(...args);
  return response.json();
};
const AddProperty = ({ setCreateForm, createForm }: Props) => {

  const {data , error} = useSWR<typeLocation>(`${baseURL}/location`, fetcher)
  
 
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
  return (
    <div className="form">
      <h4 className="title">Add Property</h4>
      <div className="input-container">
        <label htmlFor="property-title" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          name="title"
          value={createForm.title}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="property-area" className="form-label">
          Area in area<sup>2</sup>
        </label>
        <input
          type="number"
          className="form-input"
          placeholder="e.g 600"
          name="area"
          value={createForm.area}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="property-price" className="form-label">
          Price(Ksh)
        </label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g 60000"
          name="price"
          value={createForm.price}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="property-description" className="form-label">
          Description
        </label>
        <textarea
          rows={7}
          className="form-textarea"
          name="description"
          value={createForm.description}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="property-location" className="form-label">
          Location
        </label>
        <select
          id=""
          name="location"
          onChange={handleChange}
          className="form-input"
        >
          <option value="">--please select--</option>
         {data?.locations && data?.locations.map(location=>(
           <option value={location._id} key={location._id}>{location.name}</option>
         
         ))}
         {error && <option value="">{error}</option>}
        </select>
      </div>
    </div>
  );
};

export default AddProperty;
