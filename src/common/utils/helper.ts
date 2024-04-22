export type BaseType = boolean | number | string | undefined | null;

export const getEnvValue = <T extends BaseType = string>(
  key: string,
  defaultValue?: T,
): T => {
  const value = process.env[key];

  if (value) {
    return value as T;
  }

  return defaultValue;
};
