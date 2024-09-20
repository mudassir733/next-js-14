import Link from "next/link";

const seassion = null
export default function Home() {

  if (!seassion) throw new Error("Authentication is required")
  return (
   <div>
    <h1>Hello World</h1>
   </div>
  );
}
