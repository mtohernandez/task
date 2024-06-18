/*
  Warnings:

  - Added the required column `entityTitle` to the `AuditLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AuditLog" ADD COLUMN     "entityTitle" TEXT NOT NULL;
