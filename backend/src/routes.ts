import { Router } from 'express'
import controllers from './controllers'

const routes = Router()

routes.get('/languages', controllers.LanguageController.index)
routes.get('/search', controllers.SearchController.index)

export default routes
