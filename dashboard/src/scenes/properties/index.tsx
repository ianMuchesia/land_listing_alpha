import { typeProperties } from "../../@types/@types";
import BreadCrumb from "../../components/BreadCrumb";
import { Icon } from "@iconify/react";
import { useGetAllPropertiesQuery } from "../../redux/Services/Api";
import { Loader } from "../../components";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Delete } from "../../components/modals";
interface queryData {
  data: {
    nbHits: number;
    properties: typeProperties[];
    totalProperties: number;
  };
  isLoading: boolean;
  error: {
    error: string;
  };
}

const Properties = () => {
  const { data, isLoading, error } = useGetAllPropertiesQuery<queryData>({});

  const [selectedProperty, setSelectedProperty] =
    useState<null | typeProperties>(null);

  const [openModal, setOpenModal] = useState(false);

  const handleDeleteClick = (property: typeProperties) => {
    setSelectedProperty(property);

    if (selectedProperty !== null) {
      setOpenModal(true);
    }
  };

  return (
    <section>
      <BreadCrumb title="Properties" link="/properties" />
      <h5>Total Properties: {data?.nbHits}</h5>
      <div className="properties-container">
        {isLoading && <Loader />}

        {!isLoading && (
          <table>
            <thead>
              <tr>
                <th>index</th>
                <th>Name</th>
                <th>
                  Area (m)<sup>2</sup>
                </th>
                <th>Location</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.properties.map((property, index) => (
                <tr key={property._id}>
                  <td>{index + 1}</td>
                  <td>{property.title}</td>
                  <td>{property.area}</td>
                  <td>{property.location}</td>
                  <td>Ksh.{property.price}</td>
                  <td className="table-edit-icon">
                    <Link to={`/properties/${property._id}`}>
                      <Icon icon="material-symbols:edit" />
                    </Link>
                  </td>
                  <td
                    className="table-delete-icon"
                    onClick={() => handleDeleteClick(property)}
                  >
                    <Icon icon="ic:baseline-delete" />
                  </td>
                </tr>
              ))}
              {error !== undefined && <h2>{error.error}</h2>}
            </tbody>
          </table>
        )}
      </div>
      {openModal && (
        <Delete setOpenModal={setOpenModal} property={selectedProperty} />
      )}
    </section>
  );
};

export default Properties;
