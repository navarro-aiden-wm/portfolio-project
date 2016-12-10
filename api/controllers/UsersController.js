/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
     destroy: function (req, res) {
         var id = req.param('id');

         if (!id) {
             return res.badRequest('No id passed.');
         }

         Users.update(id, {isEnabled: false}).exec(function (err, user) {
             if (err) {
                 return res.serverError(err);
             }

             return res.jsonx(user);
         });
     },
     vipOnly: function (req, res) {
         Users.find({vip: true}).exec(function (err, users) {
             if (err) {
                 return res.serverError(err);
             }

             return res.jsonx(users);
         });
     },
     create: function (req, res) {
         if (!req.body) {
             return res.badRequest('No body data passed.');
         }

         Users.create(req.body).exec(function (err, user) {
             if (err) {
                 return res.serverError(err);
             }

             return res.jsonx(user);
         });
     },

     update: function (req, res) {
         if (!req.body) {
             return res.badRequest('No body data passed.');
         }

         var id = req.param('id');

         if (!id) {
             return res.badRequest('No id passed.');
         }

         Users.update(id, req.body).exec(function (err, user) {
             if (err) {
                 return res.serverError(err);
             }

             return res.jsonx(user);
         });
     }

 };
