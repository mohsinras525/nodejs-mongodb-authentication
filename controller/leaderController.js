const Leader = require('../models/leaderModel')

exports.getLeaders = async (req, res, next) => {
    let leaders;
    try {
        leaders = await Leader.find()
        console.log(leaders)

    } catch (error) {
        console.log(error)
    }
    if(!leaders){
        req.status(404).json({success:false,message:"Not Found"})
    }

    res.status(200).json({
        success:true,
        messsage:"All Leaders Found",
        leaders
    })

}

exports.addLeader = async (req, res, next) => {
    const { name, image, designation, abbr, description, featured } = req.body
    let leader;
    try {
        leader = new Leader({
            name, image, designation, abbr, description, featured
        })
        await leader.save()
    } catch (error) {
        console.log(error)
    }

    if(!leader) {
        res.status(404).json({
            message:"error"
        })
    }

    res.status(201).json({
        success:true,
        message:"leader added successsfully",
        leader
    })
}


exports.getLeader = async (req, res, next) => {
    const  id = req.params.id;
    let leader;
    try {
        leader = await Leader.findById(id)

    } catch (error) {
        console.log(error)
    }
    if(!leader){
        req.status(404).json({success:false,message:"Not Found"})
    }

    res.status(200).json({
        success:true,
        messsage:"Leader Found",
        leader
    })

}

exports.deleteLeader = async (req, res, next) => {
    const  id = req.params.id;
    let leader;
    try {
        leader = await Leader.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
    }
    if(!leader){
        req.status(404).json({success:false,message:"Not Found"})
    }

    res.status(200).json({
        success:true,
        messsage:"Leader Found",
        leader
    })

}