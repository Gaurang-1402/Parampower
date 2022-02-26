import React from "react"
import patientImg from "../../assets/images/bedpatient.png"
import LoginForm from "../../Components/LoginForm/LoginForm"
import Logo from "../../assets/images/logo.png"
const LoginPage = () => {
  return (
    <div>
      {" "}
      <div>
        <div className='flex bg-primary justify-center items-center align-center flex-wrap w-full'>
          <div className='flex-col w-full md:w-1/2'>
            <div>
              <img className='m-auto mb-8' src={Logo} alt='logo' />
            </div>
            <LoginForm />
          </div>
          <div className='flex flex-col w-full md:w-1/2'>
            <img
              className='hidden object-cover w-full h-screen md:block'
              src={patientImg}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
