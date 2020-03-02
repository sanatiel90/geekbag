//schema do Realm, q representa uma tabela
export default class MovieSchema {
  static schema = {
    name: 'Movie',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      title: 'string',
      rating: 'int',
      genre: 'string',
      comment: 'string',
    },
  };
}
