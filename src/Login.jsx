import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export const Login = () => {

  const url='https://koguilabapi.azurewebsites.net/api/LogIn/LogIn'
    const navigate=useNavigate()
    const {register, handleSubmit}=useForm()
    const onSubmit=(data)=>{
      console.log(data);
      navigate("/app")
      // axios
      // .post(url,data)
      // .then((response) => {
      //   console.log("Respuesta del servidor:", response.data.data.id);
      //   cookies.set("nombre",response.data.data.nombre,{path: "/"});
      //   if (response.data.data.id==0) {
      //     navigate("/trabajadores")
      //   }
      //   if (response.data.data.id==1) {
      //     navigate("/admin")
      //   }
      //   if (response.data.id==2) {
      //     navigate("/admin")
      //   }
        
      // })
      // .catch((error) => {
      //   console.error("Error al enviar datos:", error);
      //   // Manejar errores si es necesario
      // });
      
      
    }
  return (
    <><section class="vh-90 fondo">

    <div class="container-fluid h-custom top">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid" alt="Sample image"/>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p class="lead fw-normal mb-0 me-3 c"><b style={{color: 'white'}}>Software cafetero</b></p>
            </div>
            <br />
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p class="lead fw-normal mb-0 me-3" style={{color: 'white'}}>Login</p>
            </div>
            <br />
           
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control form-control-lg"
                placeholder="Enter a valid email address" {...register("correo")} required={true}/>
              <label class="form-label" for="form3Example3">Email address</label>
            </div>
  
          
            <div data-mdb-input-init class="form-outline mb-3">
              <input type="password" id="form3Example4" class="form-control form-control-lg"
                placeholder="Enter password" {...register("password")} required={true}/>
              <label class="form-label" for="form3Example4" >Password</label>
            </div>
  
            <div class="d-flex justify-content-between align-items-center">
            
              <div class="form-check mb-0">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
            
            </div>
  
            <div class="text-center text-lg-start mt-4 pt-2">
              <button class="btn btn-primary btn-lg styleButton">Login</button>
              <p class="small fw-bold mt-2 pt-1 mb-0"style={{color: 'white'}}>Don't have an account? <a href="#!"
                  class="link-danger" >Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </section></>
  )
}
