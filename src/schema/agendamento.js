import { EntitySchema } from "typeorm";

export const AgendamentoSchema = new EntitySchema({
  name: 'Agendamento',
  tableName: 'agendamento',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    dataHora: {
      name: 'data_hora',
      type: 'datetime'
    },
    descricao: {
      name: 'descricao',
      type: 'varchar',
      length: 255,
      default: null
    },
    situacao: {
      name: 'situacao',
      type: 'varchar',
      length: 255,
      default: null
    },
    podologo: {
      name: 'podologo_id',
      type: 'int'
    },
    paciente: {
      name: 'paciente_id',
      type: 'int',
    },
    ativo: {
        type: "int",
        default: 1,
        nullable: false,
    },
  },
  relations: {
    paciente: {
      target: 'Paciente',
      type: 'many-to-one',
      createForeignKeyConstraints: true,
      joinTable: true,
      cascade: true,
      inverseSide: 'Agendamento',
      joinColumn: {
        name: 'paciente_id',
        referencedColumnName: 'id'
      }
    },
    podologo: {
      target: 'Podologo',
      type: 'many-to-one',
      createForeignKeyConstraints: true,
      joinTable: true,
      cascade: true,
      inverseSide: 'Agendamento',
      joinColumn: {
        name: 'podologo_id',
        referencedColumnName: 'id'
      }
    }
  }
})