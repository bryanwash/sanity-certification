import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'

export const oneUpBlockType = defineType({
  name: 'oneUpBlock',
  title: 'One Up Block',
  icon: SquareIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
