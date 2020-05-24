'use strict'

function OK201(data, res) {
  return res.status(201).json({
    ok: true,
    message: 'New document has been created',
    data: data
   });
};
  
function error500(err, res) {
  return res.status(500).json({
    ok: false,
    message: 'Error en bbdd, Internal Server Error.',
    errors: err
  });
};

function OK200(data, res) {
  return res.status(200).json({
    ok: true,
    message: data,
  });
};

function error400(err, res) {
  return res.status(400).json({
    ok: false,
    message: 'Bad Request',
    errors: err
  });
}

function error404(err, res) {
  return res.status(404).json({
    ok: false,
    message: 'Data not found, please check the id is correct.',
    errors: err
  });
}
  
module.exports = {
    error500,
    error400,
    error404,
    OK201,
    OK200
}