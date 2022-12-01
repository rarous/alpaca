/*
  Warnings:

  - A unique constraint covering the columns `[username,instance]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_username_instance_key" ON "User"("username", "instance");
