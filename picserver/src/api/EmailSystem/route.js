module.exports = function(app) {
    app.all('/api/EmailSystem/:ifName',
        function(req, res) {
            var ifName = req.params.ifName;//接口名

            if(!ifName)
                res.send(404);

             function CallBackFunction(_err,_result) {
                res.send({err:_err,success:!_err,data:_result});
            }

            var errors = require('../libs/errMark.js');

            var apiMS = require('./EmailApi.js').GetApi(req,res,CallBackFunction,errors);
            var ip_address=req.connection.remoteAddress.toString().substr(0,2);
            try {
                if(apiMS[ifName]) {
                    if(1) {
                            apiMS[ifName]();
                    } else {
                        res.send({err:errors.NoLogin,success:false,data:null});
                    }
                } else {
                    res.send({err:errors.NoInterface,success:false,data:null});
                }
            } catch (_err){
                res.send({err:_err,success:!_err,data:_err.message});
            }
        }

    );
};