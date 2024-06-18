import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { PacienteSchema } from './schema/paciente.js'
import { PodologoSchema } from './schema/podologo.js'
import { AnamneseSchema } from './schema/anamnese.js'
import { AgendamentoSchema } from './schema/agendamento.js'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'pi-senac-db.mysql.database.azure.com',
    port: 3306,
    username: 'carlosmiguel',
    password: 'CarlosMiguel053-',
    database: 'sistema_podologia',
    synchronize: true,
    metadataTableName: 'meta_data_custom',
    relationLoadStrategy: 'join',
    logging: true,
    entities: [AgendamentoSchema, PacienteSchema, PodologoSchema, AnamneseSchema],
    migrations: [],
    subscribers: [],
    namingStrategy: new SnakeNamingStrategy()
  })