/* The clerkMiddleware helper enables authentication and is where you'll configure
 your protected routes. */

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

/* Här sätter jag upp och hanterar hur och vart användaren ska hamna på sidan och se till att man inte kan manipulera urlen och auth hantering */
const isOnboardingRoute = createRouteMatcher(["/shipment-details"]);
const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up", "/api/shipment-details"]);

export default clerkMiddleware((auth, req: NextRequest) => {
  const { userId, sessionClaims, redirectToSignIn } = auth();

  if (userId && isOnboardingRoute(req)) {
    return NextResponse.next();
  }

  if (!userId && !isPublicRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }
  // här skickar jag en användare till shipment-details ifall om en användare inte har slutfört sin registrering
  if (userId && !sessionClaims?.metadata?.onboardingComplete) {
    const onboardingUrl = new URL("/shipment-details", req.url);
    return NextResponse.redirect(onboardingUrl);
  }
  if (userId && !isPublicRoute(req)) return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
