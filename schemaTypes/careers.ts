import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'careers',
  title: 'Careers',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'jobRoles',
        title: 'Job Roles',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                description: 'Enter the job role title',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                description: 'Enter a description for this job role',
              },
            ],
          },
        ],
        description: 'Enter the job roles within this department',
      }),
    ],
  })