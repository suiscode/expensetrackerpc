"use client";
import React, { useState } from "react";
import axios from "axios";
import Button from "@/components/Button";
import { useGlobalContext } from "../context/Context";

function SignupForm() {
  const { credential, setCredential, setStage } = useGlobalContext();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (credential.password !== credential.rePassword) {
      setError("Passwords does not match");
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await axios.post("/api/signup/init", {
        name: credential.name,
        email: credential.email,
        password: credential.password,
      });
      if (response.data == "Email already exists") {
        setError(response.data);
        setIsSubmitting(false);

        return;
      } else {
        console.log("next page");
        setStage(1);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <form className="flex flex-col items-center gap-4 w-full" onSubmit={handleSubmit}>
      <input
        value={credential.name}
        required
        onChange={(e) =>
          setCredential((prev) => ({ ...prev, name: e.target.value }))
        }
        type="text"
        placeholder="Name"
        className="input input-bordered w-full bg-gray-100"
      />
      <input
        value={credential.email}
        required
        onChange={(e) =>
          setCredential((prev) => ({ ...prev, email: e.target.value }))
        }
        type="email"
        placeholder="Email"
        className="input input-bordered w-full bg-gray-100"
      />
      <input
        value={credential.password}
        required
        onChange={(e) =>
          setCredential((prev) => ({ ...prev, password: e.target.value }))
        }
        type="password"
        placeholder="Password"
        className="input input-bordered w-full bg-gray-100"
      />
      <input
        value={credential.rePassword}
        required
        onChange={(e) =>
          setCredential((prev) => ({ ...prev, rePassword: e.target.value }))
        }
        type="password"
        placeholder="Re-password"
        className="input input-bordered w-full bg-gray-100"
      />
      {error &&<h1 className="text-red-400">{error}</h1>}
      <Button label={"Sign up"} />
    </form>
  );
}

export default SignupForm;
