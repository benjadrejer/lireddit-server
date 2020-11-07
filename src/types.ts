import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";

export type myContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}