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
            defineField({
              name: 'keyResponsibilities',
              title: 'Key Responsibilities',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'key',
                      title: 'Key Responsibility',
                      type: 'string',
                      description: 'Enter a Key Responsibility for this job',
                    },
                  ],
                },
              ],
            }),
            defineField({
              name: 'skills',
              title: 'Skills',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'skill',
                      title: 'Skill',
                      type: 'string',
                      description: 'Enter a required skill for this job',
                    },
                  ],
                },
              ],
            }),
            defineField({
              name: 'qualifications',
              title: 'Qualifications',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'qualification',
                      title: 'Qualification',
                      type: 'string',
                      description: 'Enter a qualification for this job',
                    },
                  ],
                },
              ],
            }),
          ],
        },
      ],
      description: 'Enter the job roles within this department',
    }),
  ],
})
