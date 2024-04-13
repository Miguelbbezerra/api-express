import { AppDataSource } from "../../app-data-source.js";
import { AgendamentoSchema } from "../../schema/agendamento.js";

export class ListarAgendamentoController {
    async list(req, res) {
        try {
            const agendamentoRepository = AppDataSource.getRepository(AgendamentoSchema)
            const agendamentos = await agendamentoRepository.find()

            return res.json(agendamentos)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}