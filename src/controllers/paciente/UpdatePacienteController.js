import { AppDataSource } from "../../app-data-source.js"
import { PacienteSchema } from "../../schema/paciente.js"

export class UpdatePacienteController {
    async update(req, res) {
        try {
            const id = req.params?.id
            const body = req.body
            const pacienteRepository = AppDataSource.getRepository(PacienteSchema)
            const result = await pacienteRepository.update(id, { ...body })

            if (result?.affected === 1) {
                const podologo = await pacienteRepository.find(id)
                return res.status(201).json(podologo)
            } else {
                return res.status(400).json({ message: "Erro ao autalizar Podologo" })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}