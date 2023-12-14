import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilUser, cilLockLocked } from '@coreui/icons';
import PatternLock from 'react-pattern-lock';
import { useAdminRegMutation } from '../../../redux/services/adminAPI'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const [pattern, setPattern] = useState([]);
  const [regAdmin] = useAdminRegMutation()
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const handlePatternFinish = (newPattern) => {

    console.log('Pattern completed:', newPattern);
  };
  const onChange = (newPattern) => {
    setPattern(newPattern);
  };

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      pattern,
    };
    // console.log(formData);
     const res = await regAdmin({formData})   
      Swal.fire(``)
      setTimeout(() => {
        navigate('/')
      }, 5000);
    }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      {...register('username', { required: true })}
                      placeholder="Username"
                      autoComplete="username"
                      error={errors.username}
                    />
                    
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      {...register('email', { required: true })}
                      placeholder="Email"
                      autoComplete="email"
                      error={errors.email}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      {...register('password', { required: true, minLength: 3 })}
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      error={errors.password}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      {...register('confirmPassword', {
                        required: true,
   
                      })}
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      error={errors.confirmPassword}
                    />
                  </CInputGroup>
                  <div className="my-2">
                      <label>Pattern</label>
                      <div className="d-flex justify-content-center">
                        <PatternLock
                          width={300}
                          pointSize={15}
                          size={3}
                          path={pattern}
                          onChange={onChange}
                          onFinish={handlePatternFinish}
                          style={{
                            background: '#0b80f2',
                            borderRadius: '16px',
                          }}
                        />
                      </div>
                    </div>
                  
                  <div className="d-grid">
                    <CButton color="success" type="submit">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
