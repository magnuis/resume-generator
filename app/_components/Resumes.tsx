import Link from "next/link";

import { ResumeType } from "@/type";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export default function Resumes({ resumes = [] }: { resumes: ResumeType[] }) {
  const title =
    resumes.length === 0
      ? `Ingen av våre konsulenter har postet CV-ene sine`
      : `Her kan du se CV-en til ${resumes.length} av våre flinke konsulenter`;

  return (
    <main className="max-w-5xl px-4 md:px-12 mt-12 bg-white container mx-auto grid grid-cols-1 ">
      <h1 className="mx-auto text-2xl p-4 font-bold mb-4">{title}</h1>
      <span className="mx-auto mb-4 flex flex-row">
        <p>Vil du heller endre eller opprette en CV? </p>
        <Link href={"/studio"} className="ml-1 italic text-[#df0016]">
          Klikk her.
        </Link>
      </span>

      {resumes.map(
        (resume, index) =>
          resume.employee?.image && (
            <Link
              key={`resume-${index}`}
              href={resume.slug.current}
              className="p-4 hover:bg-gray-50 border-t-[1px] border-[#333333] mb-4"
            >
              <Image
                src={builder
                  .image(resume.employee.image)
                  .height(400)
                  .width(400)
                  .url()}
                alt=""
                width={400}
                height={400}
                className="h-24 w-24 md:h-36 md:w-36 float-left m-0 mr-4 rounded-[50%]"
              />

              <h2 className="italic md:text-xl">{resume.employee.position}</h2>
              <h1 className="text-xl md:text-3xl font-medium">
                {resume.employee.name}
              </h1>
              <p className="text-sm md:text-base line-clamp-2 md:line-clamp-3">
                {resume.employee.bio}
              </p>
            </Link>
          )
      )}
    </main>
  );
}
