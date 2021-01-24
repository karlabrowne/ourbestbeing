import { FiFeather } from 'react-icons/fi'

export default {
    name: 'poem',
    type: 'document',
    title: 'Poems',
    icon: FiFeather,
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Poem Title'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the person',
        options: {
          source: 'name',
          maxLength: 600
        }
      },
      {
        name: 'dateWritten',
        type: 'date',
        title: 'Date written',
        description: 'This is a reminder to the author of the original date the poem was written',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      },
      {
        name: 'dateEdited',
        type: 'date',
        title: 'Date edited',
        description: 'This is a reminder to the author of the last time the poem itself was edited',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      },
      {
        name: 'authors',
        title: 'Authors',
        type: 'array',
        of: [
          {
            type: 'authorReference'
          }
        ]
      },
      {
        name: 'categories',
        type: 'array',
        title: 'Categories',
        of: [
          {
            type: 'reference',
            to: {
              type: 'category'
            }
          }
        ]
      },
      {
        name: 'content',
        type: 'bodyPortableText',
        title: 'Poem content'
      },
      {
        name: 'backgroundTitle',
        type: 'string',
        title: 'Background Title',
        description: 'This heading can be different for every poem. It is only required if you also have a poem background written'
      },
      {
        name: 'background',
        type: 'bodyPortableText',
        title: 'Poem Background'
      }
    ],
    orderings: [
      {
        name: 'publishingDateAsc',
        title: 'Publishing date new–>old',
        by: [
          {
            field: 'dateWritten',
            direction: 'asc'
          },
          {
            field: 'title',
            direction: 'asc'
          }
        ]
      },
      {
        name: 'publishingDateDesc',
        title: 'Publishing date old->new',
        by: [
          {
            field: 'dateWritten',
            direction: 'desc'
          },
          {
            field: 'title',
            direction: 'asc'
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'name',
        dateWritten: 'dateWritten',
        slug: 'slug',
        media: 'mainImage'
      },
      // prepare ({title = 'No title', dateWritten, slug = {}, media}) {
      //   const dateSegment = format(dateWritten, 'YYYY/MM')
      //   const path = `/${dateSegment}/${slug.current}/`
      //   return {
      //     title,
      //     media,
      //     subtitle: dateWritten ? path : 'Missing written date'
      //   }
      // }
    }
  }
  