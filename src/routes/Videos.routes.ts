import { Router } from 'express'
import { PostVideo, DeleteVideo, GetVideo, Getvideos, PutVideo } from '../controllers/VideosCon';
const router = Router()

router.get('/video', Getvideos)
router.get('/video/:id', GetVideo)
router.post('/video', PostVideo)
router.put('/video/:id', PutVideo)
router.delete('/video/:id', DeleteVideo)

export default router