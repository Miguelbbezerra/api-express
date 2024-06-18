import { EntitySchema } from "typeorm";

export const PodologoSchema = new EntitySchema({
    name: "Podologo",
  tableName: "cadastro_podologos",
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    senha: {
      type: "varchar",
      length: 255,
      default: null,
    },
    nomeCompleto: {
      name: "nome_completo",
      type: "varchar",
      length: 255,
      default: null,
    },
    cpf: {
      name: "cpf",
      type: "varchar",
      length: 255,
      default: null,
      unique: true
    },
    email: {
      name: "email",
      type: "varchar",
      length: 255,
      default: null,
      unique: true
    },
    telefone: {
      name: "telefone",
      type: "varchar",
      length: 15,
      default: null,
      unique: true
    },
    dataNascimento: {
      name: "data_nascimento",
      type: "date",
      default: null,
    },
    genero: {
      name: "genero",
      type: "varchar",
      length: 20,
      default: null,
    },
    cep: {
      name: "cep",
      type: "varchar",
      length: 10,
      default: null,
    },
    rua: {
      name: "rua",
      type: "varchar",
      length: 255,
      default: null,
    },
    numero: {
      name: "numero",
      type: "varchar",
      length: 255,
      default: null,
    },
    bairro: {
      name: "bairro",
      type: "varchar",
      length: 255,
      default: null,
    },
    cidade: {
      name: "cidade",
      type: "varchar",
      length: 255,
      default: null,
    },
    ativo: {
        type: "int",
        default: 1,
        nullable: false,
    },
    
  },
  relations: {
    agendamentos: {
      type: 'one-to-many',
      target: 'Agendamento',
      joinColumn: true,
      inverseSide: 'Podologo'
    },
    anamnese: {
      type: 'one-to-many',
      target: 'Anamnese',
      joinColumn: true,
      inverseSide: 'Podologo'
    }
  }
})