-- CreateTable
CREATE TABLE "Esquilo" (
    "id" SERIAL NOT NULL,
    "habitat" TEXT NOT NULL,
    "comidaFavorita" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidadePatas" INTEGER NOT NULL,
    "sexo" BOOLEAN NOT NULL,

    CONSTRAINT "Esquilo_pkey" PRIMARY KEY ("id")
);
