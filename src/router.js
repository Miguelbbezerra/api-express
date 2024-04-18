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
import { LoginPodologoController } from './controllers/login/loginPodologo.js'

import jwt from "jsonwebtoken"

export const router = (express) => {

    const router = express.Router()

    //LOGIN
    router.post("/login", (req, res) => {
        const loginPodologoController = new LoginPodologoController()

        return loginPodologoController.login(req, res)
    })
    //LOGIN

    const auth = (req, res, next) => {
        try {
            if (!req.headers['authorization']) {
                return res.status(401).json({ message: "Usuário não possui token" })
            }
            const token = req.headers['authorization']
            const rawToken = token.replace("Bearer ", "")
            const result = jwt.verify(rawToken, 'secret')
            console.log(result)
            next()
        } catch (error) {
            return res.status(401).json({ message: error.message })
        }
    }

    // podologo
    //CADASTRAR
    router.post('/podologo', auth, (req, res) => {

        const cadastroPodologoController = new CadastroPodologoController()

        return cadastroPodologoController.store(req, res)
    })
    //LISTAR
    router.get('/podologo', auth, (req, res) => {

        const listarPodologoController = new ListarPodologoController()

        return listarPodologoController.list(req, res)
    })
    //UPDATE
    router.put('/podologo/:id', auth, (req, res) => {

        const updatePodologoController = new UpdatePodologoController()

        return updatePodologoController.update(req, res)
    })
    // podologo

    // -------------------------------------------------

    //paciente
    //CADASTRAR
    router.post('/paciente', auth, (req, res) => {
        const cadastroPacienteController = new CadastroPacienteController()

        return cadastroPacienteController.store(req, res)
    })
    //LISTAR
    router.get('/paciente', auth, (req, res) => {

        const listarPacienteController = new ListarPacienteController()

        return listarPacienteController.list(req, res)
    })
    //UPDATE
    router.put('/paciente/:id', auth, (req, res) => {

        const updatePacienteController = new UpdatePacienteController()

        return updatePacienteController.update(req, res)
    })
    //paciente

    // -------------------------------------------------

    //agendamento
    //CADASTRAR
    router.post('/agendamento', auth, (req, res) => {
        const cadastroAgendamentoController = new CadastroAgendamentoController()

        return cadastroAgendamentoController.store(req, res)
    })
    //LISTAR
    router.get('/agendamento', auth, (req, res) => {

        const listarAgendamentoController = new ListarAgendamentoController()

        return listarAgendamentoController.list(req, res)
    })
    //UPDATE
    router.put('/agendamento/:id', auth, (req, res) => {

        const updateAgendamentoController = new UpdateAgendamentoController()

        return updateAgendamentoController.update(req, res)
    })
    //agendamento

    // -------------------------------------------------

    //anamnese
    //CADASTRAR
    router.post('/anamnese', auth, (req, res) => {
        const cadastroAnamneseController = new CadastroAnamneseController()

        return cadastroAnamneseController.store(req, res)
    })
    //LISTAR
    router.get('/anamnese/:id', auth, (req, res) => {

        const listarAnamneseController = new ListarAnamneseController()

        return listarAnamneseController.list(req, res)
    })
    //UPDATE
    router.put('/anamnese/:id', auth, (req, res) => {

        const updateAnamneseController = new UpdateAnamneseController()

        return updateAnamneseController.update(req, res)
    })
    //anamnese



    return router

}