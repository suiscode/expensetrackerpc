import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[500px] flex-col items-center justify-between p-24">
      <Link href='dashboard'>Dashboard</Link>
    </main>
    
  );
}
