import { Label, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../CustomHooks/useAuth";
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { BiLock, BiSolidHide } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

import { fadeIn } from "../variant"

export default function LoginComponent() {

  const [hidePass, setHidePass] = useState(true)
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, setUser, signInWithGoogle, signInWithGitHub } = useAuth();
  const [error, setError] = useState('');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    return hasUpperCase && hasLowerCase && hasMinLength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setPassError("Password must have at least one uppercase, one lowercase, and at least 6 characters.");
      return;
    }
    setError('');
    try {
      const newUser = await signIn(email, password);
      setUser(newUser);
      navigate(location?.state?.from || '/');
      toast.success("User Logged In Successfully!");
    } catch (error) {
      toast.error(error.message || 'Failed to sign in. Please try again.');
    }
    setEmail("");
    setPassword("");
  };
  const handleGoogleSignIn = async () => {
    setError('');
    try {
      const newUser = await signInWithGoogle();
      setUser(newUser);
      navigate(location?.state?.from || '/');
      toast.success("User Logged In Successfully!");
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      toast.error('Failed to sign in with Google.');
    }
  };

  const handleGitHubSignIn = async () => {
    setError('');
    try {
      const newUser = await signInWithGitHub();
      setUser(newUser);
      navigate(location?.state?.from || '/');
      toast.success("User Logged In Successfully!");
    } catch (error) {
      console.error('Error during GitHub sign-in:', error);
      toast.error('Another Account Exists with the Same Email');
    }
  };
  return (
    <div className="bg-gray-100 dark:bg-sky-950">
      <div className="flex max-w-md flex-col gap-4 mx-auto min-h-[calc(100vh-90px)]">
        <h2
          
          
          
          
          className="text-3xl font-semibold text-center mt-8 dark:text-white">
          Login
        </h2>
        <form
          variants={fadeIn("right", 0.3)}
          
          
          
          onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gamil.com"
              required
              color="default"
              icon={MdOutlineMailOutline}
            />
          </div>

          <div className="mt-4">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <div className="relative w-full">
              <div>
                <TextInput
                  id="password"
                  type={hidePass ? "password" : "text"}
                  value={password}
                  icon={BiLock}
                  onChange={(e) => {
                    const newPassword = e.target.value;
                    setPassword(newPassword);
                    if (validatePassword(newPassword) || newPassword === "") {
                      setPassError("");
                    } else {
                      setPassError("Password must have at least one uppercase, one lowercase, and at least 6 characters.");
                    }
                  }}
                  placeholder="Password"
                  required
                  color={passError ? "failure" : "default"}
                  helperText={passError}
                />
              </div>
              <div
                className="absolute top-0 translate-y-1/2 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setHidePass(!hidePass)}
              >
                {hidePass ? <BiSolidHide className="text-gray-600" size={20} /> : <IoEye className="text-gray-600" size={20} />}
              </div>
            </div>
          </div>
          <div>
            {error && (
              <p className="mt-2 text-red-500 text-sm">{error}</p>
            )}
          </div>
          <div className="flex justify-between items-center mt-4">
            <Button type="submit" className="text-center py-1 px-4 bg-sky-800 text-white font-medium rounded-lg shadow-md hover:bg-sky-950 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50" >
              Login
            </Button>
            <a href="/register" className="text-sky-500">Don't have an account? Register</a>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <GoogleLoginButton onClick={handleGoogleSignIn} />
            <GithubLoginButton onClick={handleGitHubSignIn} />
          </div>
        </form>
      </div>
    </div>

  )
}

