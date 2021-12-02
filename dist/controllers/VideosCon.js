"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutVideo = exports.DeleteVideo = exports.PostVideo = exports.GetVideo = exports.Getvideos = void 0;
const Video_1 = __importDefault(require("../routes/Video"));
const Getvideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield Video_1.default.find();
        return res.status(200).json(videos);
    }
    catch (error) {
        res.json(error);
    }
});
exports.Getvideos = Getvideos;
const GetVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const video = yield Video_1.default.findById(req.params.id);
    if (!video)
        return res.status(204).json({ menssage: 'video not exits' });
    return res.status(200).json(video);
});
exports.GetVideo = GetVideo;
const PostVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoFind = yield Video_1.default.findOne({ url: req.body.url });
    if (videoFind)
        return res.status(301).json({ menssage: 'url already exists' });
    const video = new Video_1.default(req.body);
    const SavedVideo = yield video.save();
    res.status(201).json(SavedVideo);
});
exports.PostVideo = PostVideo;
const DeleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const video = yield Video_1.default.findByIdAndDelete(req.params.id);
    if (!video)
        return res.status(204).json({ menssage: 'video not exits' });
    return res.status(200).json(video);
});
exports.DeleteVideo = DeleteVideo;
const PutVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const video = yield Video_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!video)
        return res.status(204).json({ menssage: 'video not exits' });
    return res.status(202).json(video);
});
exports.PutVideo = PutVideo;
