/*
  Warnings:

  - You are about to drop the column `personalDetailsId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_personalDetailsId_fkey";

-- DropIndex
DROP INDEX "User_personalDetailsId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "personalDetailsId";

-- AddForeignKey
ALTER TABLE "PersonalDetails" ADD CONSTRAINT "PersonalDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
