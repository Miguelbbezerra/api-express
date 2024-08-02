import { AppDataSource } from "../../app-data-source.js";
import { AgendamentoSchema } from "../../schema/agendamento.js";
import { AnamneseSchema } from "../../schema/anamnese.js";

export class ListarAgendamentoController {
    async list(req, res) {
        try {
            const paciente = req.query.paciente;
            const podologo = req.query.podologo;
            const dataHora = req.query.dataHora;
            const queryParams = req.query
            // const { paciente, podologo, dataHora } = req.query

            // Consulta os agendamentos
            const agendamentoRepository = AppDataSource.getRepository(AgendamentoSchema);
            let queryBuilderAgendamentos = agendamentoRepository.createQueryBuilder("agendamento")
                .leftJoinAndSelect("agendamento.paciente", "paciente")
                .leftJoinAndSelect("agendamento.podologo", "podologo")
                .where(queryParams)
                .andWhere("agendamento.ativo = 1")
            // .getMany(); 

            if (paciente) {
                queryBuilderAgendamentos = queryBuilderAgendamentos.andWhere("paciente.nome_completo = :paciente", { paciente: paciente });
            }
            if (podologo) {
                queryBuilderAgendamentos = queryBuilderAgendamentos.andWhere("podologo.nome_completo = :podologo", { podologo: podologo });
            }
            if (dataHora) {
                // Divida dataHora em data e hora, se necessário
                const [data, hora] = dataHora.split(' ');

                if (data && !hora) {
                    // Apenas data fornecida
                    const decodedData = decodeURIComponent(data);
                    queryBuilderAgendamentos.andWhere("agendamento.data_hora LIKE :dataHora", { dataHora: `%${decodedData}%` });
                } else if (hora && !data) {
                    // Apenas hora fornecida
                    const decodedHora = decodeURIComponent(hora);
                    queryBuilderAgendamentos.andWhere("agendamento.data_hora LIKE :dataHora", { dataHora: `%${decodedHora}%` });
                } else {
                    // Ambos data e hora fornecidos
                    const decodedHora = decodeURIComponent(hora);
                    const decodedData = decodeURIComponent(data);
                    queryBuilderAgendamentos.andWhere("agendamento.data_hora LIKE :dataHora", { dataHora: `%${decodedData} ${decodedHora}%` });
                }
            }

            const agendamentos = await queryBuilderAgendamentos.getMany()

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
