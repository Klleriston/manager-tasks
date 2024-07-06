/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Task_email_key" ON "Task"("email");
