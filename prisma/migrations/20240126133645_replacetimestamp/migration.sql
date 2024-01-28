/*
  Warnings:

  - Added the required column `timestamp` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `biodata` MODIFY `birthDay` DATETIME(3) NULL,
    MODIFY `phoneNumber` VARCHAR(191) NULL,
    MODIFY `country` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `timestamp` DATETIME(3) NOT NULL;
