/*
  Warnings:

  - You are about to drop the column `userId` on the `biodata` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Biodata` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `biodata` DROP FOREIGN KEY `Biodata_userId_fkey`;

-- AlterTable
ALTER TABLE `biodata` DROP COLUMN `userId`;

-- CreateIndex
CREATE UNIQUE INDEX `Biodata_id_key` ON `Biodata`(`id`);

-- AddForeignKey
ALTER TABLE `Biodata` ADD CONSTRAINT `Biodata_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
