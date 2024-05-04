import { EntitySchema } from "typeorm";

export const AnamneseSchema = new EntitySchema({
    name: 'Anamnese',
    tableName: 'ficha_anamnese',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true
        },
        estadoCivil: {
            type: 'varchar',
            length: 20,
            default: null,
            nullable: true
        },
        profissao: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        posicaoTrabalho: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        etilista: {
            type: 'bool',
            default: null,
            nullable: true
        },
        tabagista: {
            type: 'bool',
            default: null,
            nullable: true
        },
        tipoCalcado: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        tipoMeia: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        praticaEsporte: {
            type: 'bool',
            default: null,
            nullable: true
        },
        habitoAlimentar: {
            type: 'text',
            nullable: true
        },
        medicamentoContinuo: {
            type: 'text',
            nullable: true
        },
        estatura: {
            type: 'varchar',
            length: 6,
            default: null,
            nullable: true
        },
        peso: {
            type: 'varchar',
            length: 6,
            default: null,
            nullable: true
        },
        pressaoArterial: {
            type: 'varchar',
            length: 20,
            default: null,
            nullable: true
        },
        glicemia: {
            type: 'bool',
            default: null,
            nullable: true
        },
        tipagemSanguinea: {
            type: 'varchar',
            length: 5,
            default: null,
            nullable: true
        },
        doencasPreExistentes: {
            type: 'text',
            nullable: true
        },
        tratamentoPodologico: {
            type: 'text',
            nullable: true
        },
        cirurgiaInferiores: {
            type: 'text',
            nullable: true
        },
        possuiAlergia: {
            type: 'text',
            nullable: true
        },
        gestante: {
            type: 'bool',
            default: null,
            nullable: true
        },
        lactante: {
            type: 'bool',
            default: null,
            nullable: true
        },
        amputacoes: {
            type: 'text',
            nullable: true
        },
        escalaDeDor: {
            type: 'int',
            default: null,
            nullable: true
        },
        pinosMarcapasso: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        perfusoesPE: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        perfusoesPD: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        digitoPressaoPE: {
            type: 'bool',
            default: null,
            nullable: true
        },
        digitoPressaoPD: {
            type: 'bool',
            default: null,
            nullable: true
        },
        formatoUnhasPE: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        formatoUnhasPD: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        formatoPePE: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        formatoPePD: {
            type: 'varchar',
            length: 255,
            default: null,
            nullable: true
        },
        testeMonofilamentoPE: {
            type: 'varchar',
            length: 5,
            default: null,
            nullable: true
        },
        testeMonofilamentoPD: {
            type: 'varchar',
            length: 5,
            default: null,
            nullable: true
        },
        podologo: {
            name: 'podologo_id',
            type: 'int'
        },
        paciente: {
            name: 'paciente_id',
            type: 'int',
        },
        agendamento: {
            name: 'agendamento_id',
            type: 'int',
        },
        idade: {
            name: 'idade',
            type: 'int',
        }
    },
    relations: {
        paciente: {
            target: 'Paciente',
            type: 'many-to-one',
            createForeignKeyConstraints: true,
            joinTable: true,
            cascade: true,
            inverseSide: 'Anamnese',
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
            inverseSide: 'Anamnese',
            joinColumn: {
                name: 'podologo_id',
                referencedColumnName: 'id'
            }
        },
        agendamento: {
            target: 'Agendamento',
            type: 'one-to-one',
            createForeignKeyConstraints: false,
            joinTable: true,
            cascade: true,
            inverseSide: 'Anamnese',
            joinColumn: {
                name: 'agendamento_id',
                referencedColumnName: 'id'
            }
        }
    }
})