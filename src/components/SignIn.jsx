import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //   firebase sign in
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        //   update last sign in time to the db
        fetch("https://coffee-store-server-five-nu.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after update patch", data);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card bg-base-100  max-w-sm mx-auto mt-12 shrink-0 shadow-2xl">
      <h1 className="text-center text-5xl font-bold">Sign In now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
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
          <p className="text-xs hover:underline">Forgot Password?</p>
          <button className="btn btn-neutral mt-4">Sign in</button>
        </form>
        <p className="text-center">
          Don't Have any account?{" "}
          <Link to={"/signup"}>
            <span className="underline text-blue-500">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
