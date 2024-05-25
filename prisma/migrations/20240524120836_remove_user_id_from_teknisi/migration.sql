/*
  Warnings:

  - You are about to drop the column `user_id` on the `Teknisi` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Teknisi_user_id_key";

-- AlterTable
ALTER TABLE "Teknisi" DROP COLUMN "user_id";
