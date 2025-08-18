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
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'background',
      title: 'Background of the Project',
      type: 'text',
    }),
    defineField({
      name: 'objectives',
      title: 'Objectives',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
          ],
        },
      ],
    }),
    defineField({
      name: 'solution',
      title: 'The eBiZ Solution',
      type: 'object',
      fields: [
        {name: 'overview', title: 'Overview', type: 'text'},
        {
          name: 'items',
          title: 'Item List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', title: 'Title', type: 'string'},
                {name: 'description', title: 'Description', type: 'text'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'object',
      fields: [
        {name: 'overview', title: 'Overview', type: 'text'},
        {
          name: 'items',
          title: 'Item List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', title: 'Title', type: 'string'},
                {name: 'description', title: 'Description', type: 'text'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'conclusion',
      title: 'Conclusion',
      type: 'text',
    }),
    defineField({
      name: 'businessUnit',
      title: 'Business Unit',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'object',
      fields: [
        {name: 'clientProfile', title: 'Client Profile', type: 'string'},
        {name: 'specificIndustry', title: 'Specific Industry', type: 'string'},
        {name: 'description', title: 'Description', type: 'text'},
      ],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
  ],
})
