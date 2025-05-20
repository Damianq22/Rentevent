import jwt from "jsonwebtoken";

const SECRET_KEY = import.meta.env.JWT_SECRET;

export async function protectRoute(Astro: any) {
  const cookieHeader = Astro.request.headers.get("Cookie") || "";

  const tokenMatch = cookieHeader.match(/jwt=([^;]+)/);
  if (!tokenMatch) {
    return null;
  }

  const token = tokenMatch[1];

  try {
    const payload = jwt.verify(token, SECRET_KEY, {
      issuer: "Alquiler",
      audience: "ApiAlquiler",
    });
    return payload;
  } catch (err) {
    return null;
  }
}
