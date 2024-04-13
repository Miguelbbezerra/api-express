import { CadastroPodologoController } from './controllers/podologo/CadastroPodologoController.js'
import { CadastroPacienteController } from './controllers/paciente/CadastroPacienteController.js'
import { CadastroAgendamentoController } from './controllers/agendamento/CadastroAgendamentoController.js'
import { CadastroAnamneseController } from './controllers/anamnese/CadastroAnamneseController.js'

import { ListarPodologoController } from './controllers/podologo/ListarPodologoController.js'
import { ListarPacienteController } from './controllers/paciente/ListarPacienteController.js'
import { ListarAgendamentoController } from './controllers/agendamento/ListarAgendamentosController.js'
import { ListarAnamneseController } from './controllers/anamnese/ListarAnamneseController.js'

import { UpdatePodologoController } from './controllers/podologo/UpdatePodologoController.js'
import { UpdatePacienteController } from './controllers/paciente/UpdatePacienteController.js'
import { UpdateAnamneseController } from './controllers/anamnese/UpdateAnamneseController.js'
import { UpdateAgendamentoController } from './controllers/agendamento/UpdateAgendamentoController.js'


export const router = (express) => {

    const router = express.Router()
    
    // podologo
    //CADASTRAR
    router.post('/podologo', (req, res) => {

        const cadastroPodologoController = new CadastroPodologoController()

        return cadastroPodologoController.store(req, res)
    })
    //LISTAR
    router.get('/podologo', (req, res) => {

        const listarPodologoController = new ListarPodologoController()

        return listarPodologoController.list(req, res)
    })
    //UPDATE
    router.put('/podologo/:id', (req, res) => {

        const updatePodologoController = new UpdatePodologoController()

        return updatePodologoController.update(req, res)
    })
    // podologo

    // -------------------------------------------------

    //paciente
    //CADASTRAR
    router.post('/paciente', (req, res) => {
        const cadastroPacienteController = new CadastroPacienteController()

        return cadastroPacienteController.store(req, res)
    })
    //LISTAR
    router.get('/paciente', (req, res) => {

        const listarPacienteController = new ListarPacienteController()

        return listarPacienteController.list(req, res)
    })
    //UPDATE
    router.put('/paciente/:id', (req, res) => {

        const updatePacienteController = new UpdatePacienteController()

        return updatePacienteController.update(req, res)
    })
    //paciente

    // -------------------------------------------------

    //agendamento
    //CADASTRAR
    router.post('/agendamento', (req, res) => {
        const cadastroAgendamentoController = new CadastroAgendamentoController()

        return cadastroAgendamentoController.store(req, res)
    })
    //LISTAR
    router.get('/agendamento', (req, res) => {

        const listarAgendamentoController = new ListarAgendamentoController()

        return listarAgendamentoController.list(req, res)
    })
    //UPDATE
    router.put('/agendamento/:id', (req, res) => {

        const updateAgendamentoController = new UpdateAgendamentoController()

        return updateAgendamentoController.update(req, res)
    })
    //agendamento

    // -------------------------------------------------

    //anamnese
    //CADASTRAR
    router.post('/anamnese', (req, res) => {
        const cadastroAnamneseController = new CadastroAnamneseController()

        return cadastroAnamneseController.store(req, res)
    })
    //LISTAR
    router.get('/anamnese', (req, res) => {

        const listarAnamneseController = new ListarAnamneseController()

        return listarAnamneseController.list(req, res)
    })
    //UPDATE
    router.put('/anamnese/:id', (req, res) => {

        const updateAnamneseController = new UpdateAnamneseController()

        return updateAnamneseController.update(req, res)
    })
    //anamnese

    return router

}