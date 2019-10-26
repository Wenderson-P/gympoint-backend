import { Router } from 'express'
const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello beatiful world' })
})

export default routes