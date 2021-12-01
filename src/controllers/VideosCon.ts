import { RequestHandler } from "express"
import Video from "../routes/Video"

export const Getvideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find()
        return res.status(200).json(videos)
    } catch (error) {
        res.json(error)
    }
}
export const GetVideo: RequestHandler = async (req, res) => {
    const video = await Video.findById(req.params.id)
    if (!video) return res.status(204).json({ menssage: 'video not exits' });
    return res.status(200).json(video)
}

export const PostVideo: RequestHandler = async (req, res) => {
    const videoFind = await Video.findOne({ url: req.body.url })
    if (videoFind)
        return res.status(301).json({ menssage: 'url already exists' })
    const video = new Video(req.body)
    const SavedVideo = await video.save()
    res.status(201).json(SavedVideo)
}

export const DeleteVideo: RequestHandler = async (req, res) => {
    const video = await Video.findByIdAndDelete(req.params.id)
    if (!video) return res.status(204).json({ menssage: 'video not exits' });
    return res.status(200).json(video)
}
export const PutVideo: RequestHandler = async (req, res) => {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!video) return res.status(204).json({ menssage: 'video not exits' });
    return res.status(202).json(video)
}