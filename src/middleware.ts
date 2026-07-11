import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// next-intl locale routing only. The dev `?product=` cookie switch was removed
// with the split (product is pinned in code now).
export default createMiddleware(routing);

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
