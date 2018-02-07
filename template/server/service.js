import moleculer from 'moleculer';
import web from 'moleculer-web';
import path from 'path';
const broker = new moleculer.ServiceBroker({
  logger: console,
  logLevel: 'debug'
});

broker.loadService(path.join(__dirname, "user.service"));

export default broker.createService({
  name: 'api',
  mixins: [web],
  settings: {
      middleware: true,
      routes: [
        {
          path: "/",
          aliases: {
            "GET users/": "users.Get",
            "GET users/:id": "users.GetByID"
          }
        }
      ]
  }
});