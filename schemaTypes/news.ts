import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD'
            }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'mainImage',
            title: 'Upload Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
    orderings: [
        {
            title: 'Article Date, Newest',
            name: 'releaseDateDesc',
            by: [
                { field: 'date', direction: 'desc' }
            ]
        }, {
            title: 'Article Date, Oldest',
            name: 'releaseDateAsc',
            by: [
                { field: 'date', direction: 'asc' }
            ]
        },
    ]
})

/*    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    }, 
*/


