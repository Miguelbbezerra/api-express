import { AppDataSource } from "../../app-data-source.js";
import { PodologoSchema } from "../../schema/podologo.js";
import { Validator } from "../../validator/validator.js";

export class UpdatePodologoController {
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
            
            const podologoRepository = AppDataSource.getRepository(PodologoSchema)
            const result = await podologoRepository.update(id, { ...body })

            if (result?.affected === 1) {
                const podologo = await podologoRepository.find(id)
                return res.status(201).json(podologo)
            } else {
                res.status(400).json({ message: "Erro ao Atualizar Podologo" })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })

        }
    }
}