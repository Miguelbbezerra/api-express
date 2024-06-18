import { AppDataSource } from "../../app-data-source.js"
import { AgendamentoSchema } from "../../schema/agendamento.js"
import { Validator } from "../../validator/validator.js"

export class CadastroAgendamentoController {
    async store(req, res) {
        try {
            const body = req.body
            
            if (Validator.validadeDataHoraAgendamento(body.dataHora) || Validator.validateVazio(body.podologo) || Validator.validateVazio(body.paciente) || Validator.validateVazio(body.descricao)) {
                return res.status(400).json({ message: "Algum campo está vazio!" })
            }
            
            const agendamentoDto = {
                dataHora: body.dataHora,
                descricao: body.descricao,
                situacao: body.situacao,
                podologo: body.podologo,
                paciente: body.paciente,
            }
            const agendamentoRepository = AppDataSource.getRepository(AgendamentoSchema)
            const result = await agendamentoRepository.save(agendamentoDto)
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}