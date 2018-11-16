'use strict'

const Category = require('../models/category.model.js');

// Create and Save a new Category
exports.create = (req, res) =>{
    //Validate request
    if(!req.body.title){
        return res.status(400).send({
            message: "Category content can not be empty"
        });
    }

    // Create a Category
    const category = new Category({
        title: req.body.title || "Untitled Category",
        picture: req.body.picture,
        color: req.body.color
    });

    // Save Category in the Database
    category.save()
    .then(data=> {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while creating the Category."
        });
    });
};

// Retrieve and return all categories from the database
exports.findAll = (req, res) => {

    Category.find()
    .then(categories =>{
        res.send(categories);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving categories."
        });
    });


};

// Find a  single Category with a categoryId
exports.findOne = (req, res) =>{

    Category.findById(req.params.categoryId)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });            
        }
        res.send(category);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving category with id " + req.params.categoryId
        });
    });

};

// Update a Category identified by the categoryId in the request
exports.update = (req,res) =>{
        // Validate Request
        if(!req.body.title) {
            return res.status(400).send({
                message: "Category title can not be empty"
            });
        }
    
        // Find Category and update it with the request body
        Category.findByIdAndUpdate(req.params.categoryId, {
            title: req.body.title || "Untitled category",
            picture: req.body.picture,
            color: req.body.color
        }, {new: true})
        .then(category => {
            if(!category) {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.categoryId
                });
            }
            res.send(category);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.categoryId
                });                
            }
            return res.status(500).send({
                message: "Error updating category with id " + req.params.categoryId
            });
        });
};

// Delete a Category with the specified categoryId in the request
exports.delete = (req,res) =>{
    Category.findByIdAndRemove(req.params.categoryId)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });
        }
        res.send({message: "Category deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.categoryId
            });                
        }
        return res.status(500).send({
            message: "Could not delete category with id " + req.params.categoryId
        });
    });
};