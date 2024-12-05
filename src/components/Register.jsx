
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import registerImg from "../assets/register.jpg"
import {
  GoogleAuthProvider,
  // sendEmailVerification,
  // signInWithPopup,
  // updateProfile,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";


import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
import auth from "../fireBase/firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function Register() {
  const { googleSignIn, createuser, setUser, updateUser } =
    useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState(""); // show success msg when user is sign in
  const [success, setSuccess] = useState(false); // show error msg when user is sign out and anymistake
  // state for password eye show
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
   
    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    const Photo = e.target.photo.value;
    const acceptTearm = e.target.checked.checked;
    // console.log(Name, Email, Password, Photo, acceptTearm);

    setErrorMsg("");
    setSuccess(false);
    if (!acceptTearm) {
      setErrorMsg("please accept the tearm & conditon");
      return;
    }
    if (Password.length < 6) {
      setErrorMsg("Password Should be at least 6 character");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(Password)) {
      setErrorMsg("Password should be at least one uppercase one lowecase ");
      return;
    }
    // create user, email and password
    createuser(Email, Password, Name)
      .then((result) => {
        const user = result.user;
        
        setUser(user);
        setSuccess(true);
        updateUser({ displayName: Name, photoURL: Photo })
          .then(() => {
            setUser((prevUser) => ({
              ...prevUser,
              displayName: Name,
              photoURL: Photo,
            }));
            toast.success("Account created successfully!");
            navigate("/");
          })
          .catch((err) => {
           
            toast.error("Account created, but profile update failed.");
          });
        
      })
      .catch((err) => {
        
        setErrorMsg(err.message);
        setSuccess(false);
      });
  };

  //sign google and github

  const provider = new GoogleAuthProvider();

  // const provider2 = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    googleSignIn(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        
        setUser(err.message)
      });
  };
  // const handleGitHuLogin = () => {
  //   signInWithPopup(auth, provider2)
  //     .then((result) => {
  //       const user = result.user;
        
  //       setUser(user)
  //     })
  //     .catch((err) => {
        
  //       setUser(err,message)
  //     }); 
  // };
  //sign google and github

  return (
    <>
      <div className="flex md:flex-row lg:flex-row flex-col ">
        <div className="lg:w-[600px] h-96 mt-20  animate__animated animate__slideInLeft ">
            {/* <img src={registerImg} alt="" /> */}
        </div>
        <div>
          <div className="">
            {/* <Helmet>
              <title>Eco adventure | Register</title>
            </Helmet> */}
            <div className="border-2 border-gray-400 card  font-medium w-full max-w- shrink-0 shadow-2xl   lg:my-10 animate__animated animate__slideInRight mb-6">
              <form onSubmit={handleRegister} className="card-body ">
                <div>
                  <h1 className="font-semibold text-4xl ml-20 md:ml-14 lg:ml-48">Register</h1>
                </div>
          <section className="flex gap-7 ">
          <section>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg ">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="username"
                    className="input input-bordered border-2 backdrop-blur-md"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg ">Photo</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Photo url"
                    className="input input-bordered  border-2  backdrop-blur-md "
                    required
                  />
                </div>
              </section>
                <section>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg ">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered  border-2  backdrop-blur-md "
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-lg ">Password</span>
                  </label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered border-2 border-white backdrop-blur-md "
                    required
                  />
                </div>
                </section>
          </section>
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[228px] right-12"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
                <div className="form-control ">
                  <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="checkbox"
                      name="checked"
                      className="checkbox"
                    />
                    <span className="label-text ">
                      Accept Tearms & condition
                    </span>
                  </label>
                </div>

                <div className="form-control mt-6">
                  {/* to={`/login`} */}
                  <button className="btn bg-[#ea4c89] border-2 border-gray-300 font-medium  text-lg  hover:text-[#ea4c89]">
                    Sign up
                  </button>
                </div>
                {errorMsg && <p className="text-red-400"> {errorMsg}</p>}
                {/* {
        success && <p className="text-green-500">Sign up successfull</p>
      } */}
                <label className="label flex ">
                  {/* <Link href="#" className="text-md link link-hover">
          Forgot password?
        </Link> */}
                  <p>you have already account? </p>
                  <div>
                    <Link
                      to={`/auth/login`}
                      className="text-md font-semibold btn btn-outline  hover:bg-[#ea4c89]"
                    >
                      Sing in
                    </Link>
                  </div>
                </label>
                <p className=" mt-2">Or sign in with </p>
                <p className=""> </p>
                <div className="flex">
                  <button
                    onClick={handleGoogleLogin}
                    className=" btn rounded-full w-14 text-4xl  ml-32 lg:ml-64"
                  >
                    <FcGoogle />
                  </button>
                  {/* <button
                    onClick={handleGitHuLogin}
                    className=" btn rounded-full w-14 text-4xl bg-white  hover:bg-white ml-10"
                  >
                    <VscGithubInverted />
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}