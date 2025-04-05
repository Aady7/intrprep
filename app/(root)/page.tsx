import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Ready for your Interview with the help of AI</h2>
          <p className="text-lg">
            Practice some real questions and get feedback and suggestion.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Get Started</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-8 mt-8">
        <h2>Your Interviews</h2>
        <p>
          You do not have any interviews yet.
        </p>
      </section>
      
      <section className="flex flex-col gap-8 mt-8">
        <h2>Take Interview</h2>
        <p>
          There are no interviews available for you yet.
          </p>
        </section>

    </>
  );
};

export default Page;
