import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { parse } from "url";

export async function GET(req: NextRequest): Promise<Response> {
  const { query } = parse(req.url || "", true);
  const { slug } = query;

  draftMode().enable();
  redirect(`/resumes/${slug}`);
}
