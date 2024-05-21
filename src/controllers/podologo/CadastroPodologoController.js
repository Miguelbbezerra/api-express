import { AppDataSource } from "../../app-data-source.js"
import { PodologoSchema } from "../../schema/podologo.js"
import bcrypt from 'bcrypt'
import { Validator } from "../../validator/validator.js"

export class CadastroPodologoController {
    async store(req, res) {
        try {
            const body = req.body
            const salt = 12
            const hashPassword = await bcrypt.hash(body.senha, salt)

            if (!Validator.validateCPF(body.cpf)) {
                return res.status(400).json({ message: "CPF inválido" })
            }
            
            if (!Validator.validateEmail(body.email)) {
                return res.status(400).json({ message: "EMAIL inválido" })
            }
            
            if (!Validator.validatePhoneNumber(body.telefone)) {
                return res.status(400).json({ message: "TELEFONE inválido" })
            }

            if (!Validator.validatePassword(body.senha)) {
                return res.status(400).json({ message: "SENHA inválido" })
            }
            
            const podologoDto = {
                senha: hashPassword,
                nomeCompleto: body.nomeCompleto,
                cpf: body.cpf,
                email: body.email,
                telefone: body.telefone,
                dataNascimento: body.dataNascimento,
                genero: body.genero,
                endereco: body.endereco
            }
            const podologoRepository = AppDataSource.getRepository(PodologoSchema)
            const result = await podologoRepository.save(podologoDto)
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}