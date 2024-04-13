import { AppDataSource } from "../../app-data-source.js"
import { AnamneseSchema } from "../../schema/anamnese.js"

export class CadastroAnamneseController {
    async store(req, res) {
        try{
            const body = req.body
            const anamneseDto =  {
                paciente: req.body.paciente,
                podologo: req.body.podologo,
                agendamento: req.body.agendamento,
                genero: req.body.genero,
                idade: req.body.idade,
                estadoCivil: req.body.estadoCivil,
                profissao: req.body.profissao,
                posicaoTrabalho: req.body.posicaoTrabalho,
                estatura: req.body.estatura,
                peso: req.body.peso,
                tipoCalcado: req.body.tipoCalcado,
                tipoMeia: req.body.tipoMeia,
                habitoAlimentar: req.body.habitoAlimentar,
                medicamentoContinuo: req.body.medicamentoContinuo,
                tipagemSanguinea: req.body.tipagemSanguinea,
                doencasPreExistentes: req.body.doencasPreExistentes,
                tratamentoPodologico: req.body.tratamentoPodologico,
                cirurgiaInferiores: req.body.cirurgiaInferiores,
                possuiAlergia: req.body.possuiAlergia,
                amputacoes: req.body.amputacoes,
                escalaDeDor: req.body.escalaDeDor,
                pinosMarcapasso: req.body.pinosMarcapasso,
                pressaoArterial: req.body.pressaoArterial,
                perfusoesPE: req.body.perfusoesPE,
                perfusoesPD: req.body.perfusoesPD,
                digitoPressaoPE: req.body.digitoPressaoPE,
                digitoPressaoPD: req.body.digitoPressaoPD,
                formatoUnhasPE: req.body.formatoUnhasPE,
                formatoUnhasPD: req.body.formatoUnhasPD,
                formatoPePE: req.body.formatoPePE,
                formatoPePD: req.body.formatoPePD,
                testeMonofilamentoPE: req.body.testeMonofilamentoPE,
                testeMonofilamentoPD: req.body.testeMonofilamentoPD,
                etilista: req.body.etilista,
                tabagista: req.body.tabagista,
                praticaEsporte: req.body.praticaEsporte,
                glicemia: req.body.glicemia,
                gestante: req.body.gestante,
                lactante: req.body.lactante 
            }
            const anamneseRepository = AppDataSource.getRepository(AnamneseSchema)
            const result = await anamneseRepository.save(anamneseDto)
            res.status(201).json(result)
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }
}