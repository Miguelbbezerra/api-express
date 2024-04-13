import { AppDataSource } from "../../app-data-source.js"
import { PodologoSchema } from "../../schema/podologo.js"
import bcrypt from 'bcrypt'

export class CadastroPodologoController {
    async store(req, res) {
        try {
            const body = req.body
            const salt = 12
            const hashPassword = bcrypt.hash(body.senha, salt)
            const podologoDto = {
                senha: hashPassword,
                nomeCompleto: req.body.nomeCompleto,
                cpf: req.body.cpf,
                email: req.body.email,
                telefone: req.body.telefone,
                dataNascimento: req.body.dataNascimento,
                genero: req.body.genero,
                endereco: req.body.endereco
            }
            const podologoRepository = AppDataSource.getRepository(PodologoSchema)
            const result = await podologoRepository.save(podologoDto)
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}