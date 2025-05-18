import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  //   console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    const email = form.email.value;
    // console.log(email, userProfile);

    //   create user in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        //   set profile info in db
        fetch("https://coffee-store-server-five-nu.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("after creating user", data);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account has been created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100  max-w-sm mx-auto mt-12 shrink-0 shadow-2xl">
      <h1 className="text-center text-5xl font-bold">Sign up now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter your name"
          />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Enter your address"
          />
          <label className="label">Number</label>
          <input
            type="text"
            name="number"
            className="input"
            placeholder="Enter your number"
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter your email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter your password"
          />
          <button className="btn btn-neutral mt-4">Sign up</button>
        </form>
        <p className="text-center">
          Have an account?{" "}
          <Link to={"/signin"}>
            <span className="underline text-blue-500">Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
