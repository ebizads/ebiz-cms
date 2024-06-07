import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ourpartners',
  title: 'Our Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'website',
        title: 'Website URL',
        type: 'url',
        validation: Rule => Rule.uri({ scheme: ['http', 'https'] })
      }),
  ],
})

/*
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },

*/