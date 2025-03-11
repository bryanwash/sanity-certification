import {defineArrayMember, defineField, defineType} from 'sanity'
import {StackCompactIcon} from '@sanity/icons'

export const contentAreaType = defineType({
  name: 'contentArea',
  title: 'Content Area',
  icon: StackCompactIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [defineArrayMember({type: 'oneUpBlock'}), defineArrayMember({type: 'twoUpBlock'})],
    }),
  ],
})
