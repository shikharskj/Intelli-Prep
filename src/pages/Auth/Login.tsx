import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import Input from "../../components/Input";

type LoginProps = {
  setCurrentPage: (currentPage: string) => void;
};

const Login = ({ setCurrentPage }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

  };
  // console.log("email = ", email)
  const onInputChange = (e) => {
    const { name, value } = e.target;
    if(name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  const goToSignUp = () => {
      setCurrentPage("signup");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit called")
  }


  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to log in
      </p>

      <form onSubmit={handleSubmit}>
        <Input
          value={email}
          onChange={onInputChange}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
          name="email"
        />

        <Input
          value={password}
          onChange={onInputChange}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
          name="password"
        />

        {error && <p className="text-red-500 text-xs pb-2.5"> {error} </p>}
        <motion.button
          type="submit"
          className="btn-primary"
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>

        <p className="text[13px] text-slate-800 mt-3">
          Don't have an account?{" "}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={goToSignUp}
            type="button"
          >
            Sign-up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
