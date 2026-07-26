import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import loginImage from "@/assets/login.svg";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_END_POINT}/login`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[90vh] bg-linear-to-br from-purple-50 to-indigo-100 flex items-center justify-center px-4 py-10">
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

          {/* Left Section */}
          <div className="hidden md:flex flex-col justify-center bg-linear-to-br from-purple-500 to-indigo-500 text-white p-12">
            <h1 className="text-5xl font-bold leading-tight">
              Welcome Back 👋
            </h1>

            <p className="mt-6 text-lg text-purple-100 leading-8">
              Log in to access thousands of verified job opportunities,
              connect with recruiters, and take the next step in your career.
            </p>

            <img
  src={loginImage}
  alt="Login"
  className="mt-10 w-full max-w-md"
/>
          </div>

          {/* Right Section */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Login
            </h2>

            <p className="text-gray-500 mt-2">
              Welcome back! Please login to continue.
            </p>

            <form onSubmit={submitHandler} className="mt-8 space-y-5">

              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={changeEventHandler}
                  placeholder="Enter your password"
                />
              </div>

              <RadioGroup className="flex gap-6">

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                  />
                  Student
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                  />
                  Recruiter
                </label>

              </RadioGroup>

              {loading ? (
                <Button 
                variant="outline"
                className="w-full bg-purple-700">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait...
                </Button>
              ) : (
                <Button
                variant="outline"
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800"
                >
                  Login
                </Button>
              )}

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-purple-700 font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;