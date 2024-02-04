"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import axios from "axios";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const [signIn, setSignIn] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.post("/api/signin", {
      email: signIn.email,
      password: signIn.password,
    });
    if (response.data !== "success") {
      setError("Email or password is wrong");
      setLoading(false);
    } else {
      router.push("/dashboard");
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col items-center gap-4 w-full">
      <input
        value={signIn.email}
        onChange={(e) =>
          setSignIn((prev) => ({ ...prev, email: e.target.value }))
        }
        type="text"
        placeholder="Email"
        className="input input-bordered w-full bg-gray-100"
      />
      <input
        value={signIn.password}
        onChange={(e) =>
          setSignIn((prev) => ({ ...prev, password: e.target.value }))
        }
        type="password"
        placeholder="Password"
        className="input input-bordered w-full bg-gray-100"
      />
      {error && <h1 className="text-red-400">{error}</h1>}
      <Button label={"Log in"} handleClick={handleClick} disabled={loading}/>
    </form>
  );
}

export default LoginForm;
