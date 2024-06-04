import Footer from "@/components/footer";
import Header from "@/components/header";
import Translator from "@/components/translator";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full max-w-4xl m-auto px-8 py-8">
      <Header />
      <p className="text-gray-500 mb-2">
        Headless javanese script translator.
        <br />
        Did you know that Javanese Script (Aksara Jawa) is{" "}
        <Link
          target="_blank"
          href="https://matadornetwork.com/read/5-beautiful-endangered-alphabets"
          className="font-bold hover:underline"
        >
          the most beautiful script
        </Link>{" "}
        in the world?
      </p>
      <p className="text-gray-500 mb-6">
        You can try to translate a latin text into Javanese Script or
        vice-versa.
      </p>
      <div className="mb-10">
        <Translator />
      </div>
      <Footer />
    </div>
  );
}
