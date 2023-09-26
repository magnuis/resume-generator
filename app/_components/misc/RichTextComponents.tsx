import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
  list: {
    bullet: ({ children }: any) => {
      return <ul className="ml-10 list-disc space-y-3"> {children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol className="mt-lg list-decimal"> {children}</ol>;
    },
  },
  block: {
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-primary border-l-4 pl-5 italic ">
          {children}
        </blockquote>
      );
    },
    normal: ({ children }: any) => {
      return <p className="">{children}</p>;
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = "norefferer noopener";

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline text-primary hover:text-secondary_dark decoration-primary hover:decoration-secondary_dark"
        >
          {children}
        </Link>
      );
    },
  },
};
