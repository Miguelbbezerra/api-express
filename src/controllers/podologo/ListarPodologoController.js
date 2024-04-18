import { AppDataSource } from "../../app-data-source.js";
import { PodologoSchema } from "../../schema/podologo.js";

export class ListarPodologoController {
    async list(req, res) {
        try {
            const queryParams = req.query
            const podologoRepository = AppDataSource.getRepository(PodologoSchema)
            const podologos = await podologoRepository.find({
                where: {
                    ...queryParams
                }
            })

            return res.json(podologos)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}