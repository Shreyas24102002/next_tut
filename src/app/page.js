"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1>Linking and Navigation</h1>
      <Link href="/login">Go to Login Page</Link>
      <Link href="/aboutus">Go to About Us Page</Link>

      <button onClick={() => router.push("/login")}>Go to Login Page</button>
    </main>
  );
}

// const User = (props) => {
//   return (
//     <div>
//       <h2>Hi {props.name} !!!</h2>
//     </div>
//   );
// };
