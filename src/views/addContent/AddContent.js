import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useAddContentMutation } from '../../redux/services/adminAPI'

const AddContent = () => {
  const [content, setContent] = useState(null);
  const [addContent] = useAddContentMutation();

  const handleData = (event, editor) => {
    const data = editor.getData()
    setContent(data)
  }

  const validationSchema = yup.object({
    content: yup.string().required('Content is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data) => {
    const contentData = {...data, editorData: content}
    const res = await addContent(contentData)
    console.log(res);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="border rounded p-4">
        <h4>ADD CONTENT</h4>
        <div className="form-group mb-3 col-md-6">
          <label className="form-label">Content Name:</label>
          <input
            type="text"
            id="content"
            className="form-control"
            style={{ borderColor: errors.content ? 'red' : '#ced4da' }}
            {...register('content')}
          />
          {errors.content && <div className="text-danger">{errors.content.message}</div>}
        </div>
        <div className='mt-3'>
        <label className='mb-2'>Content:</label>
        <CKEditor
        editor={ClassicEditor}
    
        style={{ height: '200px' }}
        onChange={handleData}
      />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default AddContent
