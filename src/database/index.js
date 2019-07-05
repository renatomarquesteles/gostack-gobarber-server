import Sequelize from 'sequelize';
// Importando os models
import User from '../app/models/User';
import File from '../app/models/File';
// Importando configurações do banco de dados
import databaseConfig from '../config/database';
// Array de models
const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  // Conexão com o banco de dados e carregar os models
  init() {
    this.connection = new Sequelize(databaseConfig);
    // Chama o método init de cada model
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
