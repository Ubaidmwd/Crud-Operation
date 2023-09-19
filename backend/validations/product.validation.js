const Joi = require('joi');

const addProduct = {
    
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        price:Joi.number().min(20).max(1000).required(),
        description:Joi.string().trim().required()
    }),
  };

module.exports = {

  addProduct
};
