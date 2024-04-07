export const extractDatabaseID = (value: string): string => {
  if (!value.includes("https://")) return value;
  const url = new URL(value);
  const parts = url.pathname.split("/");
  const id = parts ? parts.at(-1) : null;
  return id ?? value;
};
