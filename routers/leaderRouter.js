/**
 * Created by miss-hai on 19.03.2016.
 */
/**
 * Created by miss-hai on 19.03.2016.
 */
var express = require('express'),
    bodyParser = require('body-parser');

module.exports = function() {
    var leadersRouter = express.Router();

    leadersRouter.use(bodyParser.json());

    leadersRouter.route('/')
        .all(function (req, res, next) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            next();
        })

        .get(function (req, res, next) {
            res.end('Will send all the leaders to you!');
        })

        .post(function (req, res, next) {
            res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
        })

        .delete(function (req, res, next) {
            res.end('Deleting all leaders');
        });

    leadersRouter.route('/:leadersId')
        .all(function (req, res, next) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            next();
        })

        .get(function (req, res, next) {
            res.end('Will send details of the leaders: ' + req.params.leadersId + ' to you!');
        })

        .put(function (req, res, next) {
            res.write('Updating the leaders: ' + req.params.leadersId + '\n');
            res.end('Will update the leaders: ' + req.body.name +
                ' with details: ' + req.body.description);
        })

        .delete(function (req, res, next) {
            res.end('Deleting leaders: ' + req.params.leadersId);
        });
    return leadersRouter;
}