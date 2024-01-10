"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About Us</h1>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Go to Home Page
      </button>
      <br />
      <br />

      <Link href="/aboutus/aboutclg">Go to About College</Link>
      <br />
      <br />
      <Link href="/aboutus/aboutstudent">Go to About Student</Link>
    </div>
  );
};

export default About;
