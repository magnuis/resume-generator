import { draftMode } from "next/headers";
import PreviewProvider from "@/app/_components/PreviewProvider";
import PreviewResume from "@/app/_components/PreviewResume";
import { resumePathsQuery, resumeQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";
import { ResumeType } from "@/type";
import Image from "next/image";
import Link from "next/link";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const resumes = await client.fetch(resumePathsQuery);

  return resumes;
}

export default async function Page({ params }: { params: any }) {
  const isDraftMode = draftMode().isEnabled;
  const resume = await sanityFetch<ResumeType>({
    query: resumeQuery,
    params,
  });

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewResume resume={resume} />
      </PreviewProvider>
    );
  }

  return (
    <div>
      <header className="flex h-24 items-center justify-between px-8">
        <Link href={"/"}>
          <BsFillArrowLeftCircleFill className="h-10 w-10 text-[#333333] hover:text-[#df0016] hover:opacity-80" />
        </Link>
        <Link href={"/"}>
          <Image
            src="https://cdn.sanity.io/images/c34lfbiv/production/03c7f2f63a5ffd72468e7184d244e09464143cd7-2108x452.png"
            alt="logo"
            className="float-right m-0 rounded-lg "
            width={300}
            height={300}
          />
        </Link>
      </header>
      <PreviewResume resume={resume} />
    </div>
  );
}
