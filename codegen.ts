import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `${process.env.REACT_APP_HG_API_URL}`,
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      presetConfig: { fragmentMasking: true },
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
