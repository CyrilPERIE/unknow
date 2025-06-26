import { authClient } from "@/utils/auth-client";

export function useSession() {
  const { data: session, isPending, error, refetch } = authClient.useSession();

  return {
    session,
    isPending,
    error,
    refetch,
    isAuthenticated: session?.user,
  };
}
