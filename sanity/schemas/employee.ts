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
      // type: "array",
      // of: [
      //   {
      //     title: "Block",
      //     type: "block",
      //     styles: [{ title: "Normal", value: "normal" }],
      //     lists: [],
      //   },
      // ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
