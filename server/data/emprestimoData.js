const emprestimo = require("../models/emprestimoModel");

exports.saveEmprestimo = function (newEmprestimo) {
  return emprestimo.create(newEmprestimo, { raw: true });
};

exports.getEmprestimos = function (isbn) {
  return emprestimo.findAll({ where: { isbn } }, { raw: true });
};

exports.getAllEmprestimos = function () {
  return emprestimo.findAll();
};

exports.getEmprestimo = function (codigo) {
  return emprestimo.findOne({ where: { codigo } });
};

exports.putEmprestimo = function (codigo, newData) {
  return emprestimo.update(newData, { where: { codigo } });
};

exports.deleteEmprestimo = function (codigo) {
  return emprestimo.destroy({ where: { codigo } });
};
