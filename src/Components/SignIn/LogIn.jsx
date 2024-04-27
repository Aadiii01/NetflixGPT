import React,{useState} from 'react'
import { Formik, Field, Form } from "formik";
import {Link} from "react-router-dom"
import * as Yup from 'yup';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Utils/firebase"
import "./Login.css"

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <div className='grow mx-auto my-0 py-0 px-[5%] sm:mb-[50px] sm:max-w-[450px]'>
      <div className='bg-[#000000b3] rounded flex flex-col w-[435px] sm:ml-[-70px] sm:mt-[-10px] sm:w-[450px] sm:px-[68px] sm:py-[48px] sm:h-[505px]'>
        <header className='text-left'>
          <h1 className='mb-7 text-white text-[2rem] tracking-[-1px] font-NetflixB font-thin'>Sign In</h1>
        </header>
        <Formik
          initialValues={{email:'',password:''}}
          validationSchema={Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required()
          })}
          onSubmit={(value,{setSubmitting,resetForm}) => {
            signInWithEmailAndPassword(auth, value.email, value.password)
              .then((userCredential) => {
                const user = userCredential.user;
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode){
                  setErrorMessage("Either Email or Password is Wrong! Check again")
                }else{
                  setErrorMessage(errorMessage)
                }
              })
              .finally(() => {
                setSubmitting(false);
                resetForm();
              })
          }}
        >
          {formik => (
          <Form onSubmit={formik.handleSubmit} className='flex flex-col gap-10'>
            <div className='flex flex-col grow border-solid w-[390px] ssmm:w-[390px] ssm:w-[320px] smm:w-[340px] adm:w-[440px] sm:w-[314px]  rounded-[3px] border-[0.5px] bg-[#465A7E66] border-[#696969]'>
              <div className='relative inline-flex flex-wrap align-text-top'>
                <label className='text-[#ffffffb3] text-[0.75rem] font-extralight font-NetflixT leading-4 absolute z-1 overflow-hidden cl'>Email or phone number</label>
                <div className='w-full p-0 min-w-48 text-[1rem] font-medium text-white flex-row items-center gap-[2px] tracking-normal leading-[100%] relative z-0 text-center'>
                  <Field id='email' type="email" className='font-NetflixT outline-none leading-4 w-full px-4 pt-6 pb-2 min-h-4 min-w-4 text-[1rem] text-[#ffffff] font-extralight bg-transparent' {...formik.getFieldProps('email')}/>
                  {formik.touched.email && formik.errors.email ? (<p className='text-[10px] pb-[2px] pl-4 text-left text-red-500'>{formik.errors.email}</p>) : null}
                </div>
              </div>
            </div>
            <div className='relative border-solid rounded-[3px] sm:w-[314px] w-[390px] ssmm:w-[390px] ssm:w-[320px] smm:w-[340px] adm:w-[440px] border-[0.5px] bg-[#465A7E66] border-[#696969]'>
              <div className='relative inline-flex flex-wrap align-text-top w-full'>
                <label className='text-[#ffffffb3] text-[0.75rem] font-extralight leading-4 absolute z-1 overflow-hidden font-NetflixT cl'>Password</label>
                <div className='w-full p-0 min-w-48 text-[1rem] font-medium text-white flex-row items-center gap-[2px] tracking-normal leading-[100%] relative z-0 text-center'>
                  <Field id='password' type="password" className='outline-none leading-4 font-NetflixT w-full px-4 pt-6 pb-2 min-h-4 min-w-4 text-[1rem] text-[#ffffff] font-extralight bg-transparent' {...formik.getFieldProps('password')}/>
                  {formik.touched.password && formik.errors.password ? (<p className='text-[10px] pb-[2px] pl-4 text-left text-red-500'>{formik.errors.password}</p>) : null}
                </div>
              </div>
            </div>
            <button type='submit' className='inline-flex sm:w-[314px] w-[390px] ssmm:w-[390px] ssm:w-[320px] smm:w-[340px] adm:w-[440px] justify-center rounded cursor-pointer relative font-bold text-[1rem] min-h-10 bg-[#e50914] border-[#696969] border-[1px] hover:bg-[#e50914a4] px-4 py-[0.375rem] font-NetflixT text-white'>Sign In</button>
          
          </Form>
          )}
        </Formik>
        <p className='text-[#ffffffb3] text-[1rem] mt-[20px] font-NetflixT adm:ml-[110px] ssmm:ml-[90px] ssm:ml-[50px]  sm:ml-[55px] '>New to Netflix?{"\u00A0"} 
          <Link to='/' className='cursor-pointer font-light text-[#ffffff] font-NetflixL text-[1rem] hover:text-[#ffffffb3]'>Sign Up now</Link>.
        </p>
        {errorMessage && <p className='text-[#e50914] text-center sm:pl-[70px] text-[12px] pt-4 smm:pr-[98px] ssmm:pr-[72px] ssm:pr-[107px] adm:pr-[18px] font-NetflixL uppercase'>{errorMessage}</p>}
      </div>
    </div>
  )
}

export default Login;