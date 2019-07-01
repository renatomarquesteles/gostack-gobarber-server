import Sequelize from 'sequelize';
// Importando os models
import User from '../app/models/User';
// Importando configurações do banco de dados
import databaseConfig from '../config/database';
// Array de models
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  // Conexão com o banco de dados e carregar os models
  init() {
    this.connection = new Sequelize(databaseConfig);
    // Chama o método init de cada model
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
