import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1662665949792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const query = `CREATE TABLE public.template
    (
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
        createdAt bigint NOT NULL,
        updatedAt bigint NOT NULL,
        name character varying,
        CONSTRAINT "PK_Template" PRIMARY KEY (id)
    )
    `;
    await queryRunner.query(query);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const query = `Drop Table public.template;`;
    await queryRunner.query(query);
  }
}
