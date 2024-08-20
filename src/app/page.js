import Image from "next/image";
import ExampleComponent from "@/components/exampleComponent/ExampleComponent";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ExampleComponent/>
      <Link href = "/sampleRoute" className="bg-blue-400 p-3">Link!</Link>
    </div>
      

  );
}
