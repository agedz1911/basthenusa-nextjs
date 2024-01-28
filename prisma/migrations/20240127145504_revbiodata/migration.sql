/*
  Warnings:

  - The required column `biodataId` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `biodata` DROP FOREIGN KEY `Biodata_id_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `biodataId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
