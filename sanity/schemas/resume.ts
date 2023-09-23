import { defineField, defineType } from "sanity";

export default defineType({
  name: "resume",
  title: "CV",
  type: "document",
  fields: [
    defineField({
      name: "public",
      title: "Vis på forsiden",
      type: "boolean",
    }),
    defineField({
      name: "slug",
      title: "Slug (f.eks. 'fornavn-etternavn')",
      type: "slug",
    }),
    defineField({
      name: "employee",
      title: "Konsulent",
      type: "reference",
      to: { type: "employee" },
    }),
    defineField({
      name: "background",
      title: "Bakgrunn",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Tittel",
              type: "string",
            },
            {
              name: "from",
              title: "Fra",
              type: "string",
            },
            {
              name: "to",
              title: "Til",
              type: "string",
            },
            {
              name: "institution",
              title: "Institusjon",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "engagement",
      title: "Engasjement",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Tittel",
              type: "string",
            },
            {
              name: "from",
              title: "Fra",
              type: "string",
            },
            {
              name: "to",
              title: "Til",
              type: "string",
            },
            {
              name: "organisation",
              title: "Organisasjon",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "expertise",
      title: "Ekspertise",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Type",
              type: "string",
            },
            {
              name: "projects",
              title: "prosjekter",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "experience",
      title: "Erfaring",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "employer",
              title: "Arbeidsgiver",
              type: "string",
            },
            {
              name: "title",
              title: "Stillingstittel",
              type: "string",
            },
            {
              name: "from",
              title: "Fra",
              type: "string",
            },
            {
              name: "to",
              title: "Til",
              type: "string",
            },
            {
              name: "description",
              title: "Beskrivelse (hva gjorde du?)",
              type: "text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "employee.name",
      employee: "employee.name",
      media: "employee.image",
    },
    prepare(selection) {
      const { employee } = selection;
      return { ...selection, subtitle: employee && ` ${employee}` };
    },
  },
});
