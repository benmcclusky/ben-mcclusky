import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { projectsQuery } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import EmptyState from "@/app/components/shared/EmptyState";
import { Slide } from "@/app/animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import PageHeading from "@/app/components/shared/PageHeading";

const fallbackImage: string =
  "https://res.cloudinary.com/benmcclusky/image/upload/v1692636087/benmcclusky/projects.png";

export const metadata: Metadata = {
  title: "Projects | Ben McClusky",
  metadataBase: new URL("https://benmcclusky.com/projects"),
  description: "Explore projects built by Ben McClusky",
  openGraph: {
    title: "Projects | Ben McClusky",
    url: "https://benmcclusky.com/projects",
    description: "Explore projects built by Ben McClusky",
    images: fallbackImage,
  },
};

export default async function Projects() {
  const projects: ProjectType[] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Projects
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Collection of some of my best projects, click on the project to find
            out more.
          </p>
        </div>
      </Slide>

      <Slide delay={0.1}>
        {projects.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
              >
                <Image
                  src={project.logo || fallbackImage}
                  width={60}
                  height={60}
                  alt={project.name}
                  className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                />
                <div>
                  <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
                  <div className="text-sm dark:text-zinc-400 text-zinc-600">
                    {project.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </section>
  );
}
