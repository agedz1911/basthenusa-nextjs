/*
  Warnings:

  - You are about to drop the column `biodataId` on the `user` table. All the data in the column will be lost.
  - Added the required column `biodataId` to the `Biodata` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_biodataId_fkey`;

-- AlterTable
ALTER TABLE `biodata` ADD COLUMN `biodataId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `biodataId`;

-- AddForeignKey
ALTER TABLE `Biodata` ADD CONSTRAINT `Biodata_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
