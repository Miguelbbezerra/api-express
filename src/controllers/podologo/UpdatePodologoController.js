import { AppDataSource } from "../../app-data-source.js";
import { PodologoSchema } from "../../schema/podologo.js";
import { Validator } from "../../validator/validator.js";

export class UpdatePodologoController {
    async update(req, res) {
        try {
            const id = req.params?.id
            const body = req.body

            if (!body.senha) {
                if (Validator.validateVazio(body.nomeCompleto) || Validator.validateVazio(body.genero) || Validator.validateVazio(body.cidade) || Validator.validateVazio(body.bairro) || Validator.validateVazio(body.rua) || Validator.validateVazio(body.numero)) {
                    return res.status(400).json({ message: "Algum campo está vazio!" })
                }

                if (!Validator.validateCPF(body.cpf)) {
                    return res.status(400).json({ message: "CPF inválido" })
                }

                if (!Validator.validateEmail(body.email)) {
                    return res.status(400).json({ message: "EMAIL inválido" })
                }

                if (!Validator.validatePhoneNumber(body.telefone)) {
                    return res.status(400).json({ message: "TELEFONE inválido" })
                }

                if (!Validator.validateData(body.dataNascimento)) {
                    return res.status(400).json({ message: "DATA DE NASCIMENTO inválido" })
                }
            }

            if (body.senha) {
                const salt = 12;
                const hashPassword = await bcrypt.hash(body.senha, salt);
                body.senha = hashPassword;  // Atualiza o campo senha com o hash
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