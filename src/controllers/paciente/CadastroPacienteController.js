import { AppDataSource } from "../../app-data-source.js"
import { PacienteSchema } from "../../schema/paciente.js"
import { Validator } from "../../validator/validator.js"

export class CadastroPacienteController {
    async store(req, res) {
        try{
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
            
            const pacienteDto = {
                nome: body.nome,
                cpf: body.cpf,
                email: body.email,
                telefone: body.telefone,
                dataNascimento: body.dataNascimento,
                genero: body.genero,
                endereco: body.endereco
            }
            const pacienteRepository = AppDataSource.getRepository(PacienteSchema)
            const result = await pacienteRepository.save(pacienteDto)
            res.status(201).json(result)
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }
}