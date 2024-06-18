import { Like } from "typeorm";
import { AppDataSource } from "../../app-data-source.js";
import { PacienteSchema } from "../../schema/paciente.js";

export class ListarPacienteController {
    async list(req, res) {
        try {
            const queryParams = req.query
            const pacienteRepository = AppDataSource.getRepository(PacienteSchema)
            // Criando um novo objeto para mapear as queryParams e aplicar o operador LIKE onde necessário
            const whereClause = {};
            for (const key in queryParams) {
                whereClause[key] = Like(`%${queryParams[key]}%`);
            }

            // Adicionando a condição ativo: 1 ao objeto whereClause
            whereClause['ativo'] = 1;

            const pacientes = await pacienteRepository.find({
                where: whereClause
            });

            return res.json(pacientes)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}