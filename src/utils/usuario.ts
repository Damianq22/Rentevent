import https from "https";

export const localFetch = async (url: string, options: RequestInit = {}) => {
  // Solo en desarrollo, ignorar certificados auto-firmados
  if (import.meta.env.DEV && url.includes("localhost")) {
    const agent = new https.Agent({ rejectUnauthorized: false });
    return fetch(url, { ...options, agent } as any);
  }
  return fetch(url, options);
};
