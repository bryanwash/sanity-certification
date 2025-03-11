import {defineField, defineType} from 'sanity'
import {StackIcon} from '@sanity/icons'

const blockFields = [
  defineField({
    name: 'image',
    type: 'image',
    options: {
      hotspot: true,
    },
  }),
  defineField({
    name: 'content',
    title: 'Content',
    type: 'array',
    of: [{type: 'block'}],
  }),
]

export const twoUpBlockType = defineType({
  name: 'twoUpBlock',
  title: 'Two Up Block',
  icon: StackIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'leftColumn',
      type: 'object',
      fields: [...blockFields],
    }),
    defineField({
      name: 'rightColumn',
      type: 'object',
      fields: [...blockFields],
    }),
  ],
  preview: {
    select: {
      leftColumn: 'leftColumn.title',
      rightColumn: 'rightColumn.title',
    },
    prepare() {
      return {
        title: 'Two Up Block',
      }
    },
  },
})
