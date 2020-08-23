import { MikroORM } from "@mikro-orm/core";
import { __prod__, __dbName__ } from "./constants";
import Post from "./entities/Post";
import mikroConfig from "./mikro-orm.config";
const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const newPost = orm.em.create(Post, { title: "nyoba bos 1" });
  await orm.em.persistAndFlush(newPost);

  const posts = await orm.em.find(Post, {});
  console.log(posts);
  console.log('------------------');
};

main().catch((err) => {
  console.error(err);
});
