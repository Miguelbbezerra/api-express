import { AppDataSource } from "../../app-data-source.js"
import { AgendamentoSchema } from "../../schema/agendamento.js"

export class DeleteAgendamentoController {
    async delete(req, res) {
        try {
            const id = req.params?.id
            const body = req.body
            const agendamentoRepository = AppDataSource.getRepository(AgendamentoSchema)
            const result = await agendamentoRepository.update(id, { ...body })
            if (result?.affected === 1) {
                const agendamento = await agendamentoRepository.find(id)
                return res.status(201).json(agendamento)
            } else {
                return res.status(400).json({ message: "Erro ao deletar agendamento" })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}