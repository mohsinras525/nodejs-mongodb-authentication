const Promotion = require('../models/promotionModel')

// Add Promotions

exports.addPromotion = async ( req, res, next ) => {
    const {name, image, label, price, description, featured }= req.body
    let promotion;
    try {
        promotion = new Promotion({
            name, image, label, price, description, featured
        })
        promotion.save()
    } catch (error) {
        console.log(error)
    }

    if(!promotion){
        res.status(404).json({
            success:false,
            message:"something went wrong"
        })
    }

    res.status(201).json({
        success:true,
        message:"promotion added successfully",
        promotion
    })
}

// Get All Promotion

exports.getPromotions = async ( req, res, next ) => {
    let promotions;
    try {
        promotions = await Promotion.find()
    } catch (error) {
        console.log(error)
    }

    if(!promotions){
        res.status(404).json({
            success:false,
            message:"promotions not found"
        })
    }

    res.status(200).json({
        success:true,
        message:"promotions found successfully",
        promotions
    })
}

// Get single  Promotion

exports.getOnePromotion = async ( req, res, next ) => {
    const id = req.params.id;
    let promotion;
    try {
        promotion = await Promotion.findById(id)
    } catch (error) {
        console.log(error)
    }

    if(!promotion){
        res.status(404).json({
            success:false,
            message:"promotion not found"
        })
    }

    res.status(200).json({
        success:true,
        message:"promotion found successfully",
        promotion
    })
}

// Delete Promtotion

exports.deletePromotion = async (req, res, next) => {
    const id = req.params.id;
    let promotion;
    try {
        promotion = await Promotion.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
    }

    if(!promotion){
        res.status(404).json({
            success:false,
            message:"promotion not found"
        })
    }

    res.status(200).json({
        success:true,
        message:"promotion Deleted successfully",
        promotion
    })

}