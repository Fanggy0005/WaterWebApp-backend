// Controllers => เอาไว้จัดการการทำงานว่าจะให้ไปในทิศทางไหน(เขียนไฟล์แยกจาก route)

const productModels = require('../models/product')

exports.list = async(req,res) => {
    try {
        //code
        const producted = await productModels.find({}).exec()

        res.send(producted)
    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.read = async(req,res) => {
    try {
        //code
        const id = req.params.id
        const producted = await productModels.findOne({_id: id}).exec()

        res.send(producted)
    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('Server Error!')
    }

}

exports.create = async(req,res) => {
    try {
        //code
        console.log(req.body)
        const producted = await productModels(req.body).save()

        res.send(producted)
    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.update = async(req,res) => {
    try {
        //code
        const id = req.params.id
        const updated = await productModels.findOneAndUpdate({_id: id}, req.body, {new: true}).exec()
        
        res.send(updated)
    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.remove = async(req,res) => {
    try {
        //code
        const id = req.params.id
        const removed = await productModels.findOneAndDelete({_id: id}).exec()
        
        res.send(removed)
    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('Server Error!')
    }
}