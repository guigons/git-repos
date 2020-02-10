import { Request, Response } from 'express'

import github from './../services/github'

class SearchController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const { language, page = 1 } = req.query
      const response: Response = await github.get(`search/repositories?q=language:${language}&page=${page}`)
      return res.status(200).json(response.data)
    } catch (error) {
      return res.status(403).json({ error })
    }
  }
}

export default new SearchController()
