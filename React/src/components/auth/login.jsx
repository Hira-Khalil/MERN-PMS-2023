import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(updateState) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/auth/login",

      {
        email,
        password,
      },
      {
        withCredentials: true
      }
    );
    console.log("login", data.response)
    if (data.error) {
      return alert("Invalid Credentials");
    }

    if (data.response.role == "instructor") {
      return navigate("instructor");
    }

    if (data.response.isBlocked == true) {
      return alert("You are blocked");

    }
    if (data.response.isApproved == true) {
      return navigate("trainee");

    }
    if (data.response.isRequested == true) {
      return alert("Your requested has been sent but not approved yet");

    }
    if (data.response.isRequested == false) {

      navigate("onBoarding", { state: { userId: data.response.userId } });
    }




  };
  return (
    <>
      <div className="w-screen h-screen  bg-light-grey flex justify-center">
        <div className="w-1/4 h-full  flex justify-center flex-col ">
          <div className="w-full shadow-md border border-gray-200 flex flex-col bg-white p-4 rounded-lg">
            <div className="w-full border-black flex justify-center mb-4 ">
              <p className="text-black  text-2xl font-semibold    ">Login</p>
            </div>
            <label className="text-md text-black font-medium mb-1">Email</label>
            <input
              className="bg-gray-50 border-2 border-gray-200 py-1 px-2 rounded-lg mb-2 focus:outline-none text-black font-medium"
              required
              type="email"
              placeholder="Abc@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="text-md text-black font-medium mb-1">
              Password
            </label>
            <input
              placeholder="Enter your password"

              className="bg-gray-50 border-2 border-gray-200 py-1 px-2 rounded-lg focus:outline-none text-black font-medium"
              required
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <p className="text-md text-gray-400  mt-2">
              {"Don't have an account?  "}
              <span
                className="hover:text-indigo-500 text-indigo-500  hover:no-underline cursor-pointer "
                onClick={() => {
                  void updateState.updateState(false);
                }}
              >
                Signup
              </span>
            </p>
            <div className="w-full p-4 flex justify-center mt-4">
              <button
                disabled={!(email && password)}
                className="bg-indigo-500 text-white w-36 cursor-pointer focus:outline-none"
                onClick={() => {
                  void login();
                }}
              >
                Login
              </button>
            </div>
          </div>
          <div className="w-full  bg-red-900"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
