/*
  Warnings:

  - You are about to drop the column `userId` on the `biodata` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `biodata` DROP FOREIGN KEY `Biodata_userId_fkey`;

-- AlterTable
ALTER TABLE `biodata` DROP COLUMN `userId`;

-- AddForeignKey
ALTER TABLE `Biodata` ADD CONSTRAINT `Biodata_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
