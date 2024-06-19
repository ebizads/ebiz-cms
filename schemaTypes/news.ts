import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
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
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            type: 'string',
                            name: 'alt',
                            title: 'Alternative text',
                            options: {
                                isHighlighted: true
                            }

                        },
                        {
                            type: 'string',
                            name: 'caption',
                            title: 'Caption',
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
                
            }
        }),
    ],
    orderings: [
        {
            title: 'Newest',
            name: 'releaseDateDesc',
            by: [
                { field: 'date', direction: 'desc' }
            ]
        }, {
            title: 'Oldest',
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


