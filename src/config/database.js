module.exports = {
  dialect: 'postgres', // é necessário adicionar 'yarn add pg pg-hstore'
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // colunas created_at, updated_at
    underscored: true, // padronização de tabelas ex: user_groups
    underscoredAll: true, // padronização de colunas e relacionamentos ex: user_groups
  },
};
