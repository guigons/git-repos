import { Request, Response } from 'express'

import github from './../services/github'

class LanguageController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const response = await github.get('languages')
      return res.status(200).json(response.data)
    } catch (error) {
      return res.status(401).json({ error })
    }
  }
}

export default new LanguageController()
