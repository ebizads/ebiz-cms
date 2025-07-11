import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'casestudies',
  title: 'Case Studies',
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
      options: {hotspot: true},
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'object',
      fields: [
        {name: 'summary', title: 'Summary', type: 'text'},
        {name: 'content', title: 'Content', type: 'text'},
      ],
    }),
    defineField({
      name: 'objectives',
      title: 'Objectives',
      type: 'object',
      fields: [
        {name: 'summary', title: 'Summary', type: 'text'},
        {name: 'items', title: 'Items', type: 'array', of: [{type: 'text'}]},
      ],
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges',
      type: 'object',
      fields: [
        {name: 'summary', title: 'Summary', type: 'text'},
        {name: 'items', title: 'Items', type: 'array', of: [{type: 'string'}]},
      ],
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'object',
      fields: [
        {name: 'summary', title: 'Summary', type: 'text'},
        {name: 'items', title: 'Items', type: 'array', of: [{type: 'text'}]},
      ],
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'object',
      fields: [
        {name: 'summary', title: 'Summary', type: 'text'},
        {name: 'items', title: 'Items', type: 'array', of: [{type: 'string'}]},
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'description', type: 'text'},
          ],
        },
      ],
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'object',
      fields: [
        {
          name: 'clientProfile',
          title: 'Client Profile',
          type: 'string',
        },
        {
          name: 'industry',
          title: 'Industry',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
      ],
    }),
  ],
})
