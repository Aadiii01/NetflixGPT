import React,{useState} from 'react'
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { addUser } from "../toolkit/userSlice"
import { useDispatch } from "react-redux";
import {auth} from "../../Utils/firebase"
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='text-center box-border max-w-[61.5rem] my-0 mx-auto py-0 px-6'>
      <Formik
        initialValues={{Name:'',email:'',password:''}}
        validationSchema={Yup.object({
          Name: Yup.string().min(5).max(11).required(),
          email: Yup.string().email().required(),
          password: Yup.string().min(8).required()
        })}
        onSubmit={(value,{setSubmitting,resetForm}) => {
          createUserWithEmailAndPassword(auth, value.email, value.password)
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: value.Name
              })
                .then(() => {
                  const { uid, email, displayName } = auth.currentUser;
                  dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                  navigate('/browse')
                })
                .catch((error) => {
                  console.log(error)
                })
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              if (errorCode === 'auth/email-already-in-use') {
                setErrorMessage('The email address is already in use.');
              } else {
                setErrorMessage(errorMessage);
              }
            })
            .finally(() => {
              setSubmitting(false);
              resetForm();
            })
        }}
      >
       {formik => (
        <Form onSubmit={formik.handleSubmit} className='flex flex-col'>
          <h3 className='m-0 text-[1rem] sm:text-[1.25rem] font-NetflixL leading-6'>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className='text-left relative w-full max-w-[36.625rem] flex flex-col items-center mx-auto mb-0 mt-4 '>
            <div className='w-full relative inline-flex flex-wrap align-text-top gap-[12px] sm:w-[368px]'>

              <div className='text-[1rem] font-NetflixL text-white min-w-[12.5rem] p-0 w-full flex-row items-center relative text-left z-0 gap-[2px] bg-[#465A7E66] border-[#696969] rounded-[3px] border-[0.5px]'>
                <label className='font-NetflixL text-[0.75rem] leading-6 text-[#ffffffb3] absolute z-10 whitespace-nowrap overflow-hidden text-ellipsis left-4 right-4 top-1'>Full Name</label>
                <Field id="Name" type="Text" className='font-NetflixT outline-none leading-4 w-full px-4 pt-6 pb-2 min-h-4 min-w-4 text-[1rem] text-[#ffffff] font-extralight bg-transparent' {...formik.getFieldProps('Name')}/>
                {formik.touched.Name && formik.errors.Name ? (<p className='text-[10px] pl-[15px] pb-[2px] text-red-500'>{formik.errors.Name}</p>) : null}
              </div>

              <div className='text-[1rem] font-NetflixL text-white min-w-[12.5rem] p-0 w-full flex-row items-center relative text-left z-0 gap-[2px] bg-[#465A7E66] border-[#696969] rounded-[3px] border-[0.5px]  appearance-none'>
                <label className='font-NetflixL text-[0.75rem] leading-6 text-[#ffffffb3] absolute z-10 whitespace-nowrap overflow-hidden text-ellipsis left-4 right-4'>Email address</label>
                <Field id="email" type="email" className='font-NetflixT outline-none leading-4 w-full px-4 pt-6 pb-2 min-h-4 min-w-4 text-[1rem] text-[#ffffff] font-extralight bg-transparent' {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email ? (<p className='text-[10px] pb-[2px] pl-[15px] text-red-500'>{formik.errors.email}</p>) : null}
              </div>

              <div className='text-[1rem] font-NetflixL text-white min-w-[12.5rem] p-0 w-full flex-row items-center relative text-left z-0 gap-[2px] bg-[#465A7E66] border-[#696969] rounded-[3px] border-[0.5px]'>
                <label className='font-NetflixL text-[0.75rem] leading-6 text-[#ffffffb3] absolute z-10 whitespace-nowrap overflow-hidden text-ellipsis left-4 right-4 top-[1px]'>Password</label>
                <Field id="password" type="password" className='font-NetflixT outline-none leading-4 w-full px-4 pt-6 pb-2 min-h-4 min-w-4 text-[1rem] text-[#ffffff] font-extralight bg-transparent' {...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password ? (<p className='text-[10px] pb-[2px] pl-[15px] text-red-500'>{formik.errors.password}</p>) : null}
              </div>

            </div>
            <button type='submit' className='mt-[1rem] inline-flex items-center justify-center border-[1px] border-solid border-[#696969] box-border rounded-[0.25rem] cursor-pointer font-NetflixM relative w-[170px] text-[1.125rem] min-h-12 text-white bg-[#e50914] hover:bg-[#e50914a4]'>Get Started</button>
          </div>
          {errorMessage && <p className='text-[#e50914] text-[12px] pt-2 font-NetflixM uppercase'>{errorMessage}</p>}

        </Form>
       )} 
      </Formik>
    </div>
  )
}

export default SignUp