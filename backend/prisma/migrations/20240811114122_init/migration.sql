/*
  Warnings:

  - A unique constraint covering the columns `[question]` on the table `card` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "card_question_key" ON "card"("question");
