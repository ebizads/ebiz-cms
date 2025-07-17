import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'companyStats',
  title: 'Company Statistics',
  type: 'document',
  fields: [
    defineField({
      name: 'years',
      title: 'Years',
      type: 'number',
    }),
    defineField({
      name: 'recognitions',
      title: 'Recognitions',
      type: 'number',
    }),
    defineField({
      name: 'employees',
      title: 'Employees',
      type: 'number',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'number',
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'number',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Company Statistics',
      }
    },
  },
})
