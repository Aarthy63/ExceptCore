import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";
import {
  useGetContentByIDQuery,
  useUpdateContentByIdMutation,
} from "../../redux/services/adminAPI";

const CkEditor = () => {
  const [content, setContent] = useState(null);
  const [updateContent] = useUpdateContentByIdMutation();
  const params = useParams();
  console.log(params.id);
  const { data, isLoading, isError } = useGetContentByIDQuery(params.id);
  
  const contentForEdit = data?.data.editorData;

  console.log(contentForEdit);
  useEffect(() => {
    if (contentForEdit) {
      setContent(contentForEdit);
    }
  }, [contentForEdit]);

  const handleData = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const handleSubmit = async () => {
    const res = await updateContent({ id: params.id, updatedData: content });
    console.log(content);
  };

  return (
    <div>
      {" "}
      <CKEditor
        editor={ClassicEditor}
        data={content}
        style={{ height: "200px" }}
        onChange={handleData}
      />
      <button className="btn btn-primary my-3" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CkEditor;