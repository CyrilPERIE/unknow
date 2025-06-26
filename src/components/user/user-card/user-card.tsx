"use client";

import { useSession } from "@/app/hooks/user/use-session";
import {
  UserSafeSchema,
  UserSafeSchemaType,
} from "@/domain/entities/user/user-safe-schema";
import { createContext, useContext } from "react";

type UserCardContextType = {
  user: UserSafeSchemaType;
};

const UserCardContext = createContext<UserCardContextType | undefined>(
  undefined
);

export const useUserCardContext = () => {
  const context = useContext(UserCardContext);
  if (!context) {
    throw new Error(
      "useUserCardContext must be used within a UserCardProvider"
    );
  }
  return context;
};

export default function UserCard() {
  const user = useSession().session?.user;

  if (!user || !UserSafeSchema.safeParse(user).success) {
    return null;
  }

  return (
    <>
      <UserCardContext.Provider value={{ user }}>
        <UserCard.Name />
      </UserCardContext.Provider>
    </>
  );
}

UserCard.Name = function UserCardName() {
  const { user } = useUserCardContext();

  return <div>Bonjour {user.name}</div>;
};
