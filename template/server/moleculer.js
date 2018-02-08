import moleculer from 'moleculer';
import web from 'moleculer-web';
import path from 'path';
const broker = new moleculer.ServiceBroker({
  logger: console,
  logLevel: 'debug'
});

broker.loadServices(path.join(__dirname, 'services'));

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

broker.start();