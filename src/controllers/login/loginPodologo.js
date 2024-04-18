import { AppDataSource } from "../../app-data-source.js"
import { PodologoSchema } from "../../schema/podologo.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export class LoginPodologoController {

    async login(req, res) {
        try {
            const body = req.body
            const podologoRepository = AppDataSource.getRepository(PodologoSchema)
            const podologo = await podologoRepository.findOne({
                where: {
                    email: body.email
                }
            })
            const resultCompare = await bcrypt.compare(body.senha, podologo.senha)
            if (resultCompare) {
                const bearer = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: {nome: podologo.nomeCompleto, email: podologo.email}
                }, 'secret')
                res.status(200).json({message: "Usuário Logado", token: bearer})
            }else{
                res.status(401).json({message: "Não foi possível realizar login"})
            }

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}