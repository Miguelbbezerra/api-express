import { AppDataSource } from "../../app-data-source.js";
import { PacienteSchema } from "../../schema/paciente.js";

export class ListarPacienteController {
    async list(req, res) {
        try {
            const queryParams = req.query
            const pacienteRepository = AppDataSource.getRepository(PacienteSchema)
            const pacientes = await pacienteRepository.find()

            return res.json(pacientes)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}