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
        nome: {
            type: String,
            length: 100,
            nullable: false,
        },
        cpf: {
            type: String,
            length: 11,
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
        endereco: {
            type: "text",
            nullable: false,
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