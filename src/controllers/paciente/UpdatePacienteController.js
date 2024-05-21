import { AppDataSource } from "../../app-data-source.js"
import { PacienteSchema } from "../../schema/paciente.js"
import { Validator } from "../../validator/validator.js"

export class UpdatePacienteController {
    async update(req, res) {
        try {
            const id = req.params?.id
            const body = req.body

            if (!Validator.validateCPF(body.cpf)) {
                return res.status(400).json({ message: "CPF inválido" })
            }
            
            if (!Validator.validateEmail(body.email)) {
                return res.status(400).json({ message: "EMAIL inválido" })
            }
            
            if (!Validator.validatePhoneNumber(body.telefone)) {
                return res.status(400).json({ message: "TELEFONE inválido" })
            }
            
            const pacienteRepository = AppDataSource.getRepository(PacienteSchema)
            const result = await pacienteRepository.update(id, { ...body })

            if (result?.affected === 1) {
                const paciente = await pacienteRepository.find(id)
                return res.status(201).json(paciente)
            } else {
                return res.status(400).json({ message: "Erro ao autalizar Paciente" })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}