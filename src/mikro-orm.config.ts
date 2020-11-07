import { __prod__ } from "./constants";
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { User } from "./entities/User";

const config = {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: process.env.DBNAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
  debug: !__prod__,
  type: 'postgresql',
} as Parameters<typeof MikroORM.init>[0];

export default config;
