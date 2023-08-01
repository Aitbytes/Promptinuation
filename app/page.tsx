import Image from "next/image";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and share</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        Prompts for The gipiti
      </span>
      <p className="desc text-center">View and share your best prompts</p>
      <Feed />
    </section>
  );
}
