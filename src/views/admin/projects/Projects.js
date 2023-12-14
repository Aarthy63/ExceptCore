import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
  projectName: yup.string().required('Project name is required'),
  type: yup.string().required('Project type is required'),
  createdBy: yup.string().required('Created by is required'),
});

const Projects = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <div className="container" style={{ padding: 20, border: '1px solid #ccc' }}>
    <h1>Projects</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label className="form-label">Project Name:</label>
        <input
          type="text"
          id="projectName"
          className="form-control"
          style={{ borderColor: errors.projectName ? 'red' : '#ced4da' }}
          {...register('projectName')}
        />
        {errors.projectName && <div className="text-danger">{errors.projectName.message}</div>}
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Project Type:</label>
        <select id="type" className="form-select" style={{ borderColor: errors.type ? 'red' : '#ced4da' }} {...register('type')}>
          <option value="">Select Type</option>
          <option value="New">New</option>
          <option value="Ongoing">Ongoing</option>
       
        </select>
        {errors.type && <div className="text-danger">{errors.type.message}</div>}
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Created By:</label>
        <select id="createdBy" className="form-select" style={{ borderColor: errors.createdBy ? 'red' : '#ced4da' }} {...register('createdBy')}>
          <option value="">Select Role</option>
          <option value="designManager">Design Manager</option>
          <option value="itTeamLead">IT Team Lead</option>
          <option value="projectManager">Project Manager</option>
          <option value="admin">Admin</option>
        </select>
        {errors.createdBy && <div className="text-danger">{errors.createdBy.message}</div>}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  );
};

export default Projects;