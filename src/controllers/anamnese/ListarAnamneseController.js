import { AppDataSource } from "../../app-data-source.js";
import { AnamneseSchema } from "../../schema/anamnese.js";

export class ListarAnamneseController {
    async list(req, res) {
        try {
            // const id = req.params.id
            const queryParams = req.query
            const anamneseRepository = AppDataSource.getRepository(AnamneseSchema)
            const anamneses = await anamneseRepository.find({
                relations: ['paciente', 'podologo'],
                where: {
                    ...queryParams
                }
            })

            return res.json(anamneses)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}