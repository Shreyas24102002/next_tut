import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentlist/shreyas">Shreyas</Link>
        </li>

        <li>
          <Link href="/studentlist/shreya">Shreya</Link>
        </li>

        <li>
          <Link href="/studentlist/shrey">Shrey</Link>
        </li>

        <li>
          <Link href="/studentlist/yash">Yash</Link>
        </li>
      </ul>
    </div>
  );
}
