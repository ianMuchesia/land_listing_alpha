import { typeProperties } from "../../@types/@types";
import BreadCrumb from "../../components/BreadCrumb";
import { Icon } from '@iconify/react';
import { useGetAllPropertiesQuery } from "../../redux/Services/Api";
import { Loader } from "../../components";
import { useState } from "react";
import { Edit } from "../../components/modals";
interface queryData {
  data: {
    nbHits: number;
    properties: typeProperties[];
    totalProperties: number;
  };
  isLoading: boolean;

}

const Properties = () => {

  const [openEditModal , setOpenEditModal] = useState(false)

  const { data, isLoading } = useGetAllPropertiesQuery<queryData>({
   
  })



  return (
    <section>
      <BreadCrumb title="Properties" link="/properties" />
    <h5>Total Properties: {data?.nbHits}</h5> 
      <div className="properties-container">
        {isLoading && <Loader/>}
       {!isLoading && (<table>
          <thead>
            <tr>
              <th>index</th>
              <th>Name</th>
              <th>Area (m)<sup>2</sup></th>
              <th>Location</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          
            {data.properties.map((property, index)=>(
             
              <tr key={property._id}>
              <td>{index + 1}</td>
              <td>{property.title}</td>
              <td>{property.area}</td>
              <td>{property.location}</td>
              <td>Ksh.{property.price}</td>
              <td className="table-edit-icon" onClick={()=>setOpenEditModal(true)}><Icon icon="material-symbols:edit" /></td>
              <td className="table-delete-icon"><Icon icon="ic:baseline-delete" /></td>
              {openEditModal && <Edit property={property}/>}
            </tr>

            ))}
          </tbody>
        </table>)}

      </div>
    </section>
  );
};

export default Properties;
