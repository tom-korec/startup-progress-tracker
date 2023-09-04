import type { RandomFact } from "~/types";

export const getRandomFact = async () => {
  const response = await fetch(
    "https://uselessfacts.jsph.pl/random.json?language=en",
  );
  const data = (await response.json()) as RandomFact;
  return data.text;
};
