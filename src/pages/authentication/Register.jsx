import { Label, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { useAuth } from "../../CustomHooks/useAuth";
import { BiLock, BiSolidHide } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { motion } from "motion/react";
import { fadeIn } from "../variant"

export default function Register() {
    const [hidePass, setHidePass] = useState(true)
    const { createUser, setUser, signInWithGoogle, signInWithGitHub } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [password, setPassword] = useState("");

    const [passError, setPassError] = useState("");
    const [error, setError] = useState('');

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
            const newUser = await createUser(email, password, name, photoURL);
            setUser(newUser)
            toast.success("User Registered Successfully!")
        } catch (error) {
            toast.error(error.message || 'Failed to Register. Please try again.');
        }
        setName("");
        setEmail("");
        setPhotoURL("");
        setPassword("");

    };

    const handleGoogleSingIn = async () => {
        setError('');
        try {
            const newUser = await signInWithGoogle();
            setUser(newUser)
            toast.success("User Logged In Successfully!")
        } catch (error) {
            console.error(error.message)
            toast.error('Failed to sign in with Google.');
        }
        setName("");
        setEmail("");
        setPhotoURL("");
        setPassword("");
    }
    const handleGitHubSignIn = async () => {
        setError('');
        try {
            const newUser = await signInWithGitHub();
            setUser(newUser);
            toast.success("User Logged In Successfully!");
        } catch (error) {
            console.error('Error during GitHub sign-in:', error);
            toast.error('Failed to sign in with GitHub.');
        }
    };
    return (
        <div className="bg-gray-100 dark:bg-sky-950 pb-10">
            <div className="flex max-w-md flex-col gap-4 mx-auto min-h-[calc(100vh-90px)] ">
                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className="text-3xl font-semibold text-center mt-8 dark:text-white">
                    Register Now
                </motion.h2>
                <motion.form
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" />
                        </div>
                        <TextInput
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Tasneem Sahat"
                            required
                            color="default"
                            icon={RiProfileLine}
                        />
                    </div>

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
                            <Label htmlFor="photoURL" value="Profile Picture URL" />
                        </div>
                        <TextInput
                            id="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="https://tasneem.com/photo.png"
                            required
                            color="default"
                            icon={CiImageOn}
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
                                    className="w-full "
                                    type={hidePass ? "password" : "text"}
                                    value={password}
                                    onChange={(e) => {
                                        const newPassword = e.target.value;
                                        setPassword(newPassword);
                                        if (validatePassword(newPassword) || newPassword === "") {
                                            setPassError("");
                                        } else {
                                            setPassError(
                                                "Password must have at least one uppercase, one lowercase, and at least 6 characters."
                                            );
                                        }
                                    }}
                                    icon={BiLock}
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
                            Register
                        </Button>

                        <a href="/login" className="text-sky-500">Already have an account? Login</a>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <GoogleLoginButton onClick={handleGoogleSingIn} />
                        <GithubLoginButton onClick={handleGitHubSignIn} />
                    </div>
                </motion.form>
            </div>
        </div>
    );
}
