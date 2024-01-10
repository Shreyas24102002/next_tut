"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push("/login/" + name);
  };

  return (
    <div>
      <h1 className="heading">Login Page</h1>
      <Link href="/">Go to Home Page</Link>
      <br />
      <br />
      <button
        onClick={() => {
          navigate("loginstudent");
        }}
      >
        Go to student login
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          navigate("loginteacher");
        }}
      >
        Go to teacher login
      </button>
    </div>
  );
};

export default Login;
