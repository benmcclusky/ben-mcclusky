import Image from "next/image";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/pages/Job";
import Projects from "./components/pages/project";
import Skills from "./components/pages/skills"; // Import Skills component
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";

export default async function Home() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <Slide>
                <Image
                  className="rounded-2xl mb-6 object-cover max-h-96 min-h-96 bg-top"
                  src={data.profileImage.image}
                  width={200}
                  height={200}
                  quality={100}
                  alt={data.profileImage.alt}
                  placeholder="blur"
                  blurDataURL={data.profileImage.lqip}
                  priority
                />
                <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.fullName}
                </h1>
                <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mb-6">
                  {data.shortBio}
                </p>
              </Slide>
              <Slide delay={0.1}>
                <Social type="social" resumeURL={data.resumeURL} />
              </Slide>
            </div>
          ))}
        <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
      </section>

      <Slide delay={0.2}>
        <div id="experience" className="mt-24">
          {" "}
          {/* Increased margin to 24 */}
          <Job />
        </div>

        <div id="skills" className="mt-24">
          {" "}
          {/* Increased margin to 24 */}
          <Skills />
        </div>
      </Slide>

      <div id="projects" className="mt-24">
        {" "}
        {/* Increased margin to 24 */}
        <Projects />
      </div>
    </main>
  );
}
