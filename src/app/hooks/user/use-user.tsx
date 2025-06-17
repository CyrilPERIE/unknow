import { authClient } from "@/utils/auth-client";

export function useUser() {
  const { data: session, isPending, error, refetch } = authClient.useSession();

  return {
    session,
    isPending,
    error,
    refetch,
  };
}
