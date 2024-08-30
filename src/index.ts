import fastify from "fastify";
import scanRoutes from "./modules/scan/scan.routes";
import dotenv from "dotenv";

dotenv.config();

const server = fastify();

server.register(require('@fastify/mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,

  url: 'mongodb://localhost/projeto2'
})

server.register(scanRoutes);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
