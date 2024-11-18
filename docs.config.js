export const getOrigin = () => {
  if (process.env.NEXT_PUBLIC_ORIGIN) {
    return process.env.NEXT_PUBLIC_ORIGIN;
  } else {
    console.warn(
      "\x1b[33mWarning:\x1b[0m [movement-docs] No .env with NEXT_PUBLIC_ORIGIN found in source Using default http://localhost:3000\n",
    );
    return "http://localhost:3000";
  }
}

export const en = {}
export const vn = {}

export const i18nConfig = Object.freeze({
  en,
  vn,
});

export const docsConfig = Object.freeze({
  i18nConfig,
  defaultTitle: "Sui Bootcamp",
  defaultDescription: "Sui Bootcamp 2024",
  githubUrl: "https://github.com/vbi-academy/sui-bootcamp-2024",
  githubNewIssueUrl: "https://github.com/vbi-academy/sui-bootcamp-2024/issues/new",
  origin: getOrigin(),
});
