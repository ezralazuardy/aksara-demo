import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Footer() {
  return (
    <>
      <p className="text-gray-500 mb-2 text-sm">
        This is a demo implementation of{" "}
        <code className="font-bold">@ezralazuardy/aksara</code> using{" "}
        <Link
          target="_blank"
          href="http://nextjs.org"
          className="font-bold hover:underline"
        >
          Next.js
        </Link>
        .
      </p>
      <p className="text-gray-500 mb-8 text-sm">
        A more detail about the documentation can be found on the{" "}
        <Link
          target="_blank"
          href="https://github.com/ezralazuardy/aksara"
          className="font-bold hover:underline"
        >
          GitHub
        </Link>
        .
      </p>
      <div className="flex flex-col-2">
        <div className="w-full justify-start">
          <p className="text-gray-500 text-sm">
            Written with 💔 by{" "}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link
                  target="_blank"
                  href="https://lazuardy.tech"
                  className="font-bold hover:underline"
                >
                  @ezralazuardy
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/24422019" />
                    <AvatarFallback>EL</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@ezralazuardy</h4>
                    <p className="text-sm">
                      i help companies through technology and design.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </p>
        </div>
        <div className="w-full justify-end">
          <p className="text-gray-500 text-sm text-end">
            Learn More about{" "}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Javanese_script#Letters"
              className="font-bold hover:underline"
            >
              The Aksara&apos;s Character Set
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
