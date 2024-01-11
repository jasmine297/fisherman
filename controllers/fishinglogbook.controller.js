const fishinglogbookModel = require('../database/models/fishinglogbook.model')
const asyncHandler = require("express-async-handler");
const { isFormatIdIncorrect } = require('../validators/data.validator');

const getFishinglogbookById = asyncHandler(async (req,res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        fishinglogbookModel.findById(req.params.id).then((fishinglogbook) => {
            if (!fishinglogbook) return res.status(404).json({message: 'No fishing log book found'});
            else return res.status(200).json(fishinglogbook)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})


const updateFishinglogbookById = asyncHandler(async (req,res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        fishinglogbookModel.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }).then((fishinglogbook) => {
            if (!fishinglogbook) return res.status(404).json({message: 'No fishing log book found'});
            else return res.status(200).json(fishinglogbook)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const updateFishinglookbookFromSpecificUser = asyncHandler(async (req, res) => {
    try {
        if (isFormatIdIncorrect(req.body.user_id)) return res.status(500).json({ message: "Wrong id length for user"})
        if (isFormatIdIncorrect(req.body.fishinglogbook_id)) return res.status(500).json({ message: "Wrong id length for fishing log book"})

        fishinglogbookModel.findOneAndUpdate({
            _id: req.body.fishinglogbook_id,
            user: req.body.user_id
        }, req.body.data).then((fishinglogbook) => {
            if (!fishinglogbook) return res.status(404).json({message: 'No fishing log book found'})
            else return res.status(200).json({ message: fishinglogbook})
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const deleteFishinglogbookById = asyncHandler(async (req,res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        fishinglogbookModel.findByIdAndDelete(req.params.id).then((fishinglogbook) => {
            if (!fishinglogbook) return res.status(404).json({message: 'No fishing log book found'});
            else return res.status(200).json({message: 'Fishing log book delete'})
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const createFishinglogbook =  asyncHandler(async (req,res) => {
    try {
        const newFishinglogbook = new fishinglogbookModel(req.body)
        newFishinglogbook.save().then((response) => {
            return res.status(201).json({
                message: "New fishing log book created",
                result: response,
                success: true
            })
        }).catch((error) => {
            res.status(500).json({
                error: error,
                success: false
            })
        })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
})

module.exports = {
    getFishinglogbookById,
    updateFishinglogbookById,
    deleteFishinglogbookById,
    createFishinglogbook,
    updateFishinglookbookFromSpecificUser
}