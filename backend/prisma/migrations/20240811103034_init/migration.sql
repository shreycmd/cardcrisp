-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);
