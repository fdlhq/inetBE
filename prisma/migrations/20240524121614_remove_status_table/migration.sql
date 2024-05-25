/*
  Warnings:

  - You are about to drop the column `total_handling` on the `Teknisi` table. All the data in the column will be lost.
  - You are about to drop the `Status` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_status_id_fkey";

-- AlterTable
ALTER TABLE "Teknisi" DROP COLUMN "total_handling";

-- DropTable
DROP TABLE "Status";
