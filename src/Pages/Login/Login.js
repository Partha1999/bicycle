import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "../../Images/login.webp";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signInWithGoogle, loginUser, isLoading, authError } = useAuth();
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const role = "buyer";
  const handleLogin = (data) => {
    loginUser(data.email, data.password, location, navigate);
  };

  const handelGoogleSignUp = (
    signInWithGoogle,
    location,

    navigate
  ) => {
    signInWithGoogle(role, location, navigate);
  };

  return (
    
  );
};

export default Login;
