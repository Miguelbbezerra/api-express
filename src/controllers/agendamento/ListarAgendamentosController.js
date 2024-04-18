// import { AppDataSource } from "../../app-data-source.js";
// import { AgendamentoSchema } from "../../schema/agendamento.js";

// export class ListarAgendamentoController {
//     async list(req, res) {
//         try {
//             const agendamentoRepository = AppDataSource.getRepository(AgendamentoSchema)
//             const agendamentos = await agendamentoRepository.find({
//                 leftJoinAndSelect: {
//                     alias: 'agendamento',
//                     leftJoinAndSelect: {
//                         paciente: 'agendamento.paciente_id',
//                         podologo: 'agendamento.podologo_id'
//                     }
//                 }
//             })

//             return res.json(agendamentos)
//         } catch (error) {
//             res.status(500).json({ message: error.message })
//         }
//     }
// }


import { AppDataSource } from "../../app-data-source.js";
import { AgendamentoSchema } from "../../schema/agendamento.js";

export class ListarAgendamentoController {
    async list(req, res) {
        try {
            const agendamentoRepository = AppDataSource.getRepository(AgendamentoSchema);
            const agendamentos = await agendamentoRepository.createQueryBuilder('agendamento')
                .leftJoinAndSelect('agendamento.paciente', 'paciente')
                .leftJoinAndSelect('agendamento.podologo', 'podologo')
                .getMany();

            return res.json(agendamentos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
