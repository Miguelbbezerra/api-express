import { EntitySchema } from "typeorm";

export const PacienteSchema = new EntitySchema({
    name: "Paciente",
    tableName: 'cadastro_pacientes',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        nomeCompleto: {
            type: String,
            length: 100,
            nullable: false,
        },
        cpf: {
            type: String,
            length: 14,
            nullable: false,
            unique: true
        },
        email: {
            type: String,
            length: 100,
            nullable: false,
            unique: true
        },
        telefone: {
            type: String,
            length: 100,
            nullable: false,
            unique: true
        },
        dataNascimento: {
            type: "date",
            nullable: false,
        },
        genero: {
            type: String,
            length: 100,
            nullable: false,
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
            inverseSide: 'Paciente'
        },
        anamnese: {
            type: 'one-to-many',
            target: 'Anamnese',
            joinColumn: true,
            inverseSide: 'Paciente'
        }
    }
})