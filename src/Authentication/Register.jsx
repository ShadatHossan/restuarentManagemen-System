import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../ContextApi/AuthProvider";
import SocialLogIn from "../Sheared/SocialLogin/SocialLogIn";
import useTitle from "../Sheared/Title";





const Register = () => {

  useTitle("Sign in")

  const navigate = useNavigate();
  // react hook 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  // firbase working
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {

    // firbase working
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            //Data base User Information sending Proccess start
            const saveUser = {name:data.name, email:data.email, img:data.photoURL, phoneNumber:data.number} //The data Being Sent
            fetch("http://localhost:5000/users",{
              method:"POST",
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(saveUser)// saveUser Object Send
            })
            .then(res =>res.json())
            .then(data =>{
              if(data.insertedId){
                        reset()
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'User Profile Updated Succesfully',
              showConfirmButton: false,
              timer: 1500
            });
            navigate("/")
              }
              //Data base User Information sending Proccess End
            })
    
          })
          .catch(error => console.log(error))
      })
  };
  // react hook end


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now !</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              {/* react-from-hook-uses */}
              <input type="text"  {...register("name", { required: true })} placeholder="name" className="input input-bordered" required />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>



            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              {/* react-from-hook-uses */}
              <input type="number"  {...register("number", { required: true })} placeholder="number" className="input input-bordered" required />
              {errors.number && <span className="text-red-600">This field is required</span>}
            </div>




            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              {/* react-from-hook-uses */}
              <input type="text"  {...register("photoURL", { required: true })} placeholder="PhotoURL" className="input input-bordered" required />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {/* react-from-hook-uses */}
              <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
              {errors.email && <span className="text-red-600">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/* react-from-hook-uses */}
              <input type="password"  {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
              })} placeholder="password" className="input input-bordered" required />
              {errors.password?.type === 'required' && <span className="text-red-600">This Filed is required</span>}
              {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 required</span>}
              {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be 20 required</span>}
              {errors.password?.type === 'pattern' && <span className="text-red-600">At least one lowercase letter (a-z),At least one uppercase letter (A-Z),At least one digit (0-9),At least one special character from the set [@, $, !, %, *, ?, &],Minimum length of 6 characters</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn btn-primary"></input>
            </div>
          </form>
          <p><small>Already have an account ? <Link to="/login">Login</Link></small></p>
      <SocialLogIn></SocialLogIn>
        </div>
      </div>
    </div>
  );
};

export default Register;