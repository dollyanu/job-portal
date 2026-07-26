import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'
import { setLoading } from '@/redux/authSlice'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector(store => store.auth);
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const submitHandler = async (e) => {
    e.preventDefault();

    console.log("Signup button clicked");

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.file) {
        formData.append("file", input.file);
    }

    try {
        dispatch(setLoading(true));

        const res = await axios.post(
            `${USER_API_END_POINT}/register`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            }
        );

        console.log(res.data);

        if (res.data.success) {
            toast.success(res.data.message);
            navigate("/login");
        }
    } catch (error) {
        console.log("Signup Error:", error);

        toast.error(
            error?.response?.data?.message ||
            error?.message ||
            "Registration failed"
        );
    } finally {
        dispatch(setLoading(false));
    }
};
   return (
  <>
    <Navbar />

    <div className="min-h-[90vh] bg-linear-to-br from-purple-50 via-white to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-purple-500 to-indigo-500 text-white p-12">
          <h1 className="text-5xl font-bold leading-tight">
            Join <span className="text-yellow-300">JobPortal</span>
          </h1>

          <p className="mt-6 text-lg text-purple-100 leading-8">
            Create your account and discover thousands of verified job
            opportunities from top companies.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-white/10 p-4 rounded-xl">
              ✅ Apply to thousands of jobs
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              ✅ Connect with recruiters
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              ✅ Upload your professional profile
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              ✅ Get hired faster
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 lg:p-12">

          <h2 className="text-3xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Fill in your details to get started.
          </p>

          <form onSubmit={submitHandler} className="space-y-5">

            <div>
              <Label>Full Name</Label>
              <Input
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={changeEventHandler}
                placeholder="Enter your full name"
              />
            </div>

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
              <Label>Phone Number</Label>
              <Input
                type="text"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                placeholder="Create a password"
              />
            </div>

            <div>
              <Label className="mb-2 block">
                Select Role
              </Label>

              <RadioGroup className="flex gap-8">

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
            </div>

            <div>
              <Label>Profile Photo</Label>

              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>

            {loading ? (
              <Button
              variant="outline"
                disabled
                className="w-full bg-purple-700 hover:bg-purple-700"
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Account...
              </Button>
            ) : (
              <Button
             variant="outline"
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-80"
              >
                Create Account
              </Button>
            )}

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-700 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>

          </form>

        </div>

      </div>
    </div>
  </>
);
}
export default Signup