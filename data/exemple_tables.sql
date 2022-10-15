
/* Vérifier si les tables existent, sinon on les vires  */

-- Démarer une transaction afin de s'assurer de la cohérencce globale de la BDD

BEGIN;
-- Si toutes les commandes entre le BEGIN; et le COMMIT; se passe bien, j'acte les changements

DROP TABLE IF EXISTS "Table_name", "Table_name";
-- on va préferer le generated as identity primary car c'est un standard SQL alors que SERIAL et un pseudo-type de PG
-- "id" SERIAL PRIMARY KEY,

CREATE TABLE "Table_name" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "champ_name" TEXT NOT NULL DEFAULT '',
    "Table_Name_id" INTEGER NOT NULL REFERENCES Table_name("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;

-- Créer une FOREIGN key :
-- "Table_Name_id" INTEGER NOT NULL REFERENCES Table_name("id") 
-- ON DELETE CASCADE ici la suppression de l'un entraine celle de l'autre