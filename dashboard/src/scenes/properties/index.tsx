import BreadCrumb from "../../components/BreadCrumb";

const Properties = () => {
  return (
    <section>
      <BreadCrumb title="Properties" link="/properties" />
      Properties
      <div className="properties-container">
        <table>
          <thead>
            <tr>
              <th>index</th>
              <th>Name</th>
              <th>Area</th>
              <th>Location</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
};

export default Properties;
