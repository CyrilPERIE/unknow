/*
  Warnings:

  - A unique constraint covering the columns `[email,name]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_email_key";

-- DropIndex
DROP INDEX "user_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "user_email_name_key" ON "user"("email", "name");
