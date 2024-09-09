"use client";
import { SessionProvider } from "next-auth/react";
export function Provider({ chidlren, session }) {
  return <SessionProvider session={session}>{chidlren}</SessionProvider>;
}

// "use client";
// import { SessionProvider } from "next-auth/react";
// export function Provider({ children, session }) {
//   return <SessionProvider session={session}>{children}</SessionProvider>;
// }
