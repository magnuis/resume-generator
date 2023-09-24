import { LogoTypes } from "@/enums/LogoTypes";
import { groq } from "next-sanity";

// get all resumes
export const resumesQuery = groq`
    *[_type == "resume" && defined(slug.current) && public == true][] {
        public,
        title, 
        slug, 
        employee -> {
            name, 
            bio, 
            position,
            image
        }, 
    } | order(employee.name asc)`;

// get a single resume by its slug
export const resumeQuery = groq`
    *[_type == "resume" && slug.current == $slug][0] {
        public,
        title, 
        slug, 
        background,
        engagement,
        expertise, 
        experience,
        publishedAt,
        employee -> {
            name, 
            phone, 
            email, 
            bio, 
            position,
            image
        }, 
    }`;

// get all resume slugs
export const resumePathsQuery = groq`
    *[_type == "resume" && defined(slug.current)][] {
        "params": {"slug": slug.current}
    }`;

export const logoQuery = (type: LogoTypes) => {
  const query = `*[_type == "sanity.imageAsset" && originalFilename == "${type}"][0]`;
  return groq`${query}`;
};
