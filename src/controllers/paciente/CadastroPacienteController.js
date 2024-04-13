import { AppDataSource } from "../../app-data-source.js"
import { PacienteSchema } from "../../schema/paciente.js"

export class CadastroPacienteController {
    async store(req, res) {
        try{
            const body = req.body
            const pacienteDto = {
                nome: req.body.nome,
                cpf: req.body.cpf,
                email: req.body.email,
                telefone: req.body.telefone,
                dataNascimento: req.body.dataNascimento,
                genero: req.body.genero,
                endereco: req.body.endereco
            }
            const pacienteRepository = AppDataSource.getRepository(PacienteSchema)
            const result = await pacienteRepository.save(pacienteDto)
            res.status(201).json(result)
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }
}