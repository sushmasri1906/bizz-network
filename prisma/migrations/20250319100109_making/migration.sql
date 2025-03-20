-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_personalDetailsId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "personalDetailsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_personalDetailsId_fkey" FOREIGN KEY ("personalDetailsId") REFERENCES "PersonalDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;
