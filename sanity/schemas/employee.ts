import { defineField, defineType } from "sanity";

export default defineType({
  name: "employee",
  title: "Konsulent",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Navn",
      type: "string",
    }),
    defineField({
      name: "position",
      title: "Stilling",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefon-nummer",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Om deg",
      type: "string",
    }),
    defineField({
      name: "biov2",
      title: "Om deg",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
          },
          lists: [{ title: "Bullet", value: "bullet" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
