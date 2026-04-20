import { Router } from 'express'
import { WaitlistEntry } from '../models/waitlistEntry.model.js'

const waitlistRouter = Router()

waitlistRouter.post('/', async (req, res) => {
  try {
    const { name, email, building } = req.body ?? {}

    if (!name || !email || !building) {
      return res.status(400).json({
        ok: false,
        message: 'name, email, and building are required.',
      })
    }

    const doc = await WaitlistEntry.create({
      name,
      email,
      building,
      source: 'landing_page',
    })

    return res.status(201).json({
      ok: true,
      message: 'Joined waitlist successfully.',
      id: doc._id,
    })
  } catch (error) {
    if (error?.name === 'ValidationError') {
      return res.status(400).json({
        ok: false,
        message: error.message,
      })
    }

    return res.status(500).json({
      ok: false,
      message: 'Failed to save waitlist entry.',
    })
  }
})

export { waitlistRouter }
