import React from "react";

import './signup.css'
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { authLogin, authRegister } from "../../redux/apicall";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Block1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone:"",
  };

  const { values, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log(values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

    const handleRegister = async(e)=>{
        e.preventDefault();
        try {
          let user = {
            name:values.name,
            email:values.email,
            phone:values.phone,
            password:values.password
          };
          const res = await authRegister(user);
          console.log(res);
          if(res && res.data && res.data.status==='SUCCESS'){
            let data = {
              username:values.email,
              password:values.password
            }
            const result = await authLogin(data,dispatch);
            console.log(result);
            
            if(result && result.data && result.data.status === 'SUCCESS'){
                navigate('/');
                enqueueSnackbar('Congrats! You have Successfully registered', {
                  variant: 'success',
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                  },
                  });
            }
            else{
                navigate('/login');
                enqueueSnackbar('Congrats! You have Successfully registered, Please Login', {
                  variant: 'success',
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                  },
                  });
            }
          }
          else{
            enqueueSnackbar('Some error occoured, Please try after sometime!', {
              variant: 'error',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
              },
              });
          }
        } catch (error) {
          console.log(error);
          enqueueSnackbar('Some error occoured, Please try after sometime!', {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            });
        }
        
    }
  

  return (
    <div>
    
     
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To The BookWorld & Register Yourself Here.
                </p>
                <form onSubmit={handleRegister}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="phone" className="input-label">
                      Mobile No
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      name="phone"
                      id="phone"
                      placeholder="Mobile No"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone ? (
                      <p className="form-error">{errors.phone}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    <a href="#" className="" style={{display:'flex',alignItems:'center'}}>
                    Want to register using <AiFillGoogleCircle style={{color:'green',fontSize:'25px'}}/>Google
                    </a>
                    <button className="input-button" type="submit">
                      Registration
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="/login">Sign In now</a>
                </p>
              </div>
              <div className="modal-right">
                <img
                  src="https://img.freepik.com/free-psd/flyer-template-creative-pottery-workshop-with-woman_23-2148957392.jpg?size=626&ext=jpg&ga=GA1.2.669828460.1689154101&semt=ais"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};



export default Block1