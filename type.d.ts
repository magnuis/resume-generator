import { Image, Slug } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface ResumeType extends base {
  public: boolean;
  title: string;
  slug: Slug;
  background: [
    {
      title: string;
      from: string;
      to: string;
      institution: string;
    }
  ];
  engagement: [
    {
      title: string;
      from: string;
      to: string;
      organisation: string;
    }
  ];
  expertise: [
    {
      title: string;
      projects: string[];
    }
  ];
  experience: [
    {
      employer: string;
      title: string;
      to: string;
      from: string;
      description: string;
      descriptionv2: Block[];
    }
  ];
  publishedAt;
  employee: {
    name: string;
    phone: string;
    email: string;
    bio: string;
    biov2: Block[];
    position: string;
    image: Image;
  };
}
