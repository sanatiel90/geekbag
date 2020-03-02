import Realm from 'realm';
import MovieSchema from './../schemas/MovieSchema';

//getRealm() vai conter a conexao com bd realm, carregando todos os schemas
export default function getRealm() {
  return Realm.open({
    schema: [MovieSchema],
  });
}
