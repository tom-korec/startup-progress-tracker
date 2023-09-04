export const saveToLocalStorage = <S>(state: S, key: string): void => {
  localStorage.setItem(key, JSON.stringify(state));
};

export const loadFromLocalStorage = <S>(key: string): S | null => {
  if (typeof window === "undefined") return null;

  const state = localStorage.getItem(key);

  // TODO: validate state from localStorage
  return state ? JSON.parse(state) as S : null;
};
