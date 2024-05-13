import { AppDataSource } from "../../app-data-source.js"
import { PodologoSchema } from "../../schema/podologo.js"

export class DeletePodologoController {
    async delete(req, res) {
        try {
            const id = req.params?.id
            const body = req.body
            const podologoRepository = AppDataSource.getRepository(PodologoSchema)
            const result = await podologoRepository.update(id, { ...body })
            if (result?.affected === 1) {
                const podologo = await podologoRepository.find(id)
                return res.status(201).json(podologo)
            } else {
                return res.status(400).json({ message: "Erro ao deletar podologo" })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}