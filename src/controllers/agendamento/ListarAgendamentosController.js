import { AppDataSource } from "../../app-data-source.js";
import { AgendamentoSchema } from "../../schema/agendamento.js";
import { AnamneseSchema } from "../../schema/anamnese.js";

export class ListarAgendamentoController {
    async list(req, res) {
        try {
            const queryParams = req.query;

            // Consulta os agendamentos
            const agendamentoRepository = AppDataSource.getRepository(AgendamentoSchema);
            const agendamentos = await agendamentoRepository.createQueryBuilder("agendamento")
                .leftJoinAndSelect("agendamento.paciente", "paciente") 
                .leftJoinAndSelect("agendamento.podologo", "podologo") 
                .where(queryParams)
                .where("agendamento.ativo = 1")
                .getMany(); 

            // Consulta as fichas de anamnese separadamente
            const anamneseRepository = AppDataSource.getRepository(AnamneseSchema);
            for (const agendamento of agendamentos) {
                const anamnese = await anamneseRepository.findOne({ where: { agendamento: agendamento.id } });
                agendamento.anamnese = anamnese; // Adiciona a ficha de anamnese ao objeto de agendamento
            }

            return res.json(agendamentos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
