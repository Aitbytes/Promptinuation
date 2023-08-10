"use client";

import { SessionProvider } from "next-auth/react";

export default function Provider({ children, currentSession }) {
  return <SessionProvider session={currentSession}>{children}</SessionProvider>;
}
