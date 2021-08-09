var validator = require('validator');

var controller = {
    create: function (req,res) {
        //obtener parametros
        var params = req.body;
        //Pequeña validacion de campos para evitar nulls
        var validate_name = !validator.isEmpty(params.name);
        var validate_last_name = !validator.isEmpty(params.last_name);
        var validate_legajo = !validator.isEmpty(params.legajo);
        var validate_email = !validator.isEmpty(params.email) && validator.isEmail(params.email) ;
        var validate_birthday = !validator.isEmpty(params.birthday);

        if(validate_name && validate_last_name && validate_legajo && validate_email && validate_birthday){
            var name = params.name;
            var last_name = params.last_name;
            var legajo = params.legajo;
            var email = params.email;
            var birthday = params.birthday;

            var sql = `INSERT INTO users
            (
                name, last_name, legajo, email, birthday
            )
            VALUES
            (
                ?, ?, ?, ?, ?
            )`;
            connection.query(sql, [name , last_name, legajo, email, birthday], function (err, data) {
                if (err) {
                    return res.status(500).send({
                        message : err,
                    });
                } else {
                    return res.status(200).send({
                        message : {
                            'status': 'success',
                            'data' : {
                                'Id' : data.insertId,
                                'name' : name,
                                'last_name' : last_name,
                                'legajo' : legajo,
                                'email' : email,
                                'birthday' : birthday
                            }
                        },
                    });
                }
            });
        } else {
            return res.status(422).send({
                message : 'validacion incorrecta',
            });
        }
    },

    getUserById : function(req,res) {
        id = req.params.id
        connection.query("SELECT id,name,last_name,birthday FROM users WHERE id = ?",[id], function (err, result, fields) {
            if (err) throw err;
                console.log(result[0].id);
                return res.status(200).send({
                    message : {
                        'data' : {
                            'id' : result[0].id,
                            'name' : result[0].name,
                            'last_name' : result[0].last_name,
                            'birthday' : result[0].birthday
                        }
                    },
                });
        })
    }
};

module.exports = controller;