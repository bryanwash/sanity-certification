import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'
import {resolve} from './lib/presentation/resolve'
export const BASE_URL =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:3000'
    : 'https://sanity-certification-sigma.vercel.app'

export default defineConfig({
  name: 'default',
  title: 'Day one with Sanity',

  projectId: 'y92r46rs',
  dataset: 'production',

  plugins: [
    structureTool({structure, defaultDocumentNode}),
    visionTool(),
    presentationTool({
      previewUrl: {
        preview: BASE_URL,
        draftMode: {
          enable: `${BASE_URL}/api/draft-mode/enable`,
        },
      },
      resolve,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
