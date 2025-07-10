import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { motion } from "motion/react";
import ProfilePhotoSelector from "../../components/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";

type SignUpProps = {
  setCurrentPage: (currentPage: string) => void;
};

const SignUp = ({ setCurrentPage }: SignUpProps) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const goToLogin = () => {
    setCurrentPage("login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";
    console.log("submit called");
    if (!fullName) {
      setError("Please enter full name");
      return;
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    } else if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    // Sign-up api call
    try {
    } catch (error) {
      if (error?.response && error?.response?.data?.message) {
        setError(error?.response?.data?.message);
      } else {
        setError("Something went wrong! Please try again.");
      }
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Create an Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Join us today by entering your details below.
      </p>
      <form onSubmit={handleSignUp}>
        <div className="grid grid-cols-1 gap-2">
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <Input
            name="fullName"
            value={fullName}
            onChange={handleInputChange}
            label="Full Name"
            placeholder="John"
            type="text"
          />

          <Input
            name="email"
            value={email}
            onChange={handleInputChange}
            label="Email Address"
            placeholder="John@example.com"
            type="text"
          />

          <Input
            name="password"
            value={password}
            onChange={handleInputChange}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <motion.button
            type="submit"
            className="btn-primary"
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>

          <p className="text[13px] text-slate-800 mt-3">
            Already an account?{" "}
            <button
              className="font-medium text-primary underline cursor-pointer"
              onClick={goToLogin}
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
