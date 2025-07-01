-- CreateTable
CREATE TABLE "PlanoDeAula" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "originalFile" TEXT NOT NULL,
    "objectives" TEXT NOT NULL,
    "activities" TEXT NOT NULL,
    "assessment" TEXT NOT NULL,
    "creatOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
