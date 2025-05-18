import jwt from "jsonwebtoken";

const JWT_SECRET = import.meta.env.JWT_SECRET;

const parseCookies = (cookieString: string) => {
  return cookieString
    .split(";")
    .reduce((acc: Record<string, string>, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
};

export async function protectRoute(Astro: any) {
  const cookieHeader = Astro.request.headers.get("Cookie");
  let token: string | null = null;

  if (cookieHeader) {
    const cookies = parseCookies(cookieHeader);
    token = cookies["token"];
  }

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    return { userId: decoded.id };
  } catch (error) {
    console.error("Token inválido:", error);
    return null;
  }
}
