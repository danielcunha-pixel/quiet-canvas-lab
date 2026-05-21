/**
 * Edge Middleware — HTTP Basic Auth gate for the entire sandbox.
 *
 * Credentials are read from Vercel env vars (BASIC_AUTH_USER / BASIC_AUTH_PASSWORD).
 * Never hardcode credentials here — the source is public on GitHub.
 *
 * Runs in front of every request (static HTML, CSS, fonts proxied through Vercel).
 * The browser shows its native Basic Auth dialog on first visit;
 * subsequent requests in the same session reuse the cached credentials.
 */

import { next } from "@vercel/edge";

export const config = {
  // Match every request — this is a sandbox, gate it all.
  matcher: "/:path*",
};

export default function middleware(request: Request): Response {
  const expectedUser = process.env.BASIC_AUTH_USER;
  const expectedPassword = process.env.BASIC_AUTH_PASSWORD;

  // If env vars aren't set, fail closed (return 503 rather than serving open).
  if (!expectedUser || !expectedPassword) {
    return new Response("Auth not configured", { status: 503 });
  }

  const header = request.headers.get("authorization");

  if (header) {
    const [scheme, encoded] = header.split(" ");
    if (scheme === "Basic" && encoded) {
      // Edge runtime has atob globally.
      const decoded = atob(encoded);
      const sepIdx = decoded.indexOf(":");
      const user = decoded.slice(0, sepIdx);
      const password = decoded.slice(sepIdx + 1);

      if (user === expectedUser && password === expectedPassword) {
        return next();
      }
    }
  }

  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Sandbox", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}
