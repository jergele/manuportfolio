declare module "next-sanity" {
  export const groq: (
    strings: TemplateStringsArray,
    ...values: any[]
  ) => string;
}
