import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider,} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";

// import login from "../assets/login.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
export default function Login() {
  const navigate = useNavigate();

  const { signIn, setUser,googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  
  const [errorMsg, setErrorMsg] = useState(""); 
  const [success, setSuccess] = useState(false); 

  const handleLogin = (e) => {
   
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    signIn(Email, Password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");

        setSuccess(true);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setSuccess(false);
      });
  };

  const provider = new GoogleAuthProvider();
  

  const handleGoogleLogin = () => {
    googleSignIn(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
       
         
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setUser(err.message);
      });                            
  };  
  // const handleGitHuLogin = () => {
  //   signInWithPopup(auth, provider2)
  //     .then((result) => {
  //       const user = result.user;

  //       setUser(user);
  //       navigate(from, { replace: true });
  //     })
  //     .catch((err) => {
  //       setUser(err.message);
  //     });
  // };

  // forget password
  const emailRef = useRef();

  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row ">
        <div className="">
          {/* <img src={login} className="w-[450px]" alt="" /> */}
        </div>
        <div>
          
            {/* <Helmet>
              <title>Eco Adventure Login</title> */}
            {/* </Helmet> */}
            <div>
            <div className="bg-white/20 card border-2 border-gray-400 font-medium w-full max-w-sm shrink-0 shadow-2xl md:ml-[390px]  my-10  text-white">
              <form onSubmit={handleLogin} className="card-body">
                <div>
                  <h1 className="font-semibold text-3xl md:ml-28 lg:ml-28 ml-24">
                    Sign in
                  </h1>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-white">Email</span>
                  </label>
                  <input
                    ref={emailRef}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-lg text-white">Password</span>
                  </label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered bg-black border-2 border-white backdrop-blur-md text-white"
                    required
                  />
                </div>
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[235px] right-12"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
                <div className="form-control mt-6">
                  <button className="btn b  rounded-full text-lg font-semibold bg-[#ea4c89] border-2 border-white backdrop-blur-md text-white">
                    Login
                  </button>
                </div>
                {errorMsg && <p className="text-red-400"> {errorMsg}</p>}
                <label className="label flex justify-between">
                  <Link
                    to={`/forget`}
                    state={{ email: emailRef.current?.value }} // Pass email as state
                    className="text-md link link-hover"
                  >
                    Forgot password?
                  </Link>
                  <div>
                    <Link
                      to={`/auth/register`}
                      className="text-md hover:underline"
                    >
                      Create account
                    </Link>
                  </div>
                </label>
                <p className="text-gray-400 mt-2">Or sign in with </p>
                <p className="text-gray-400 "></p>
                <div className="flex">
                  <button
                    onClick={handleGoogleLogin}
                    className=" btn rounded-full w-14 text-4xl bg-white hover:bg-white hover:text-white ml-32"
                  >
                    <FcGoogle />
                  </button> 
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}