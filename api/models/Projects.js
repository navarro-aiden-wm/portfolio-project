/**
 * Projects.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'text',
      required: true
    },
    description: {
      type: 'text',
      required: false
    },
    project: {
      type: 'file',
      required: false
    },
    tags: {
      type: 'text',
      required: false,
      defaultsTo: ''
    }
  }
};
