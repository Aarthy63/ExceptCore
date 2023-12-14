import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetContentQuery } from "../../redux/services/adminAPI";



const SiteSetting = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetContentQuery();
  const contents = data?.data;
  
  // console.log(contents);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        <h3>CONTENT ADD </h3>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/addcontent")}
        >
          Add Content
        </button>
      </div>
      <div className="mt-5">
        {" "}
        <h2>TABLES</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col"> ID CONTENT</th>

              <th scope="col">CONTENT</th>

              <th scope="col">DATA</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {contents?.map((content, index) => (
              <tr key={content?._id}>
                <td className="serial-no py-3">{index + 1}</td>
                <td className="serial-no py-3">{content?._id}</td>
                <td className="py-3">{content?.content}</td>
                <td
                  className="py-3"
                  dangerouslySetInnerHTML={{ __html: content?.editorData }}
                />
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/ckeditor/${content?._id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SiteSetting;