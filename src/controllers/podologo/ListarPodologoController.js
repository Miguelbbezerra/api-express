import { AppDataSource } from "../../app-data-source.js";
import { PodologoSchema } from "../../schema/podologo.js";
import { Like } from "typeorm";

export class ListarPodologoController {
    async list(req, res) {
        try {
            const queryParams = req.query;
            const podologoRepository = AppDataSource.getRepository(PodologoSchema);
            
            // Criando um novo objeto para mapear as queryParams e aplicar o operador LIKE onde necessário
            const whereClause = {};
            for (const key in queryParams) {
                whereClause[key] = Like(`%${queryParams[key]}%`);
            }

            // Adicionando a condição ativo: 1 ao objeto whereClause
            whereClause['ativo'] = 1;

            const podologos = await podologoRepository.find({
                where: whereClause
            });

            return res.json(podologos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
