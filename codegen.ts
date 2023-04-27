import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: `${process.env.REACT_APP_HG_API_URL}`,
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}
 
export default config