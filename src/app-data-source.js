import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { PacienteSchema } from './schema/paciente.js'
import { PodologoSchema } from './schema/podologo.js'
import { AnamneseSchema } from './schema/anamnese.js'
import { AgendamentoSchema } from './schema/agendamento.js'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    metadataTableName: 'meta_data_custom',
    relationLoadStrategy: 'join',
    logging: true,
    entities: [AgendamentoSchema, PacienteSchema, PodologoSchema, AnamneseSchema],
    migrations: [],
    subscribers: [],
    namingStrategy: new SnakeNamingStrategy()
  })