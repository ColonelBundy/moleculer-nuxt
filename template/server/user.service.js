const moleculer = require('moleculer');

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

module.exports = {
  name: 'users',
  actions: {
    GetByID(ctx) {
      const id = parseInt(ctx.params.id)
      if (id >= 0 && id < users.length) {
        return users[id]
      } else {
        return new moleculer.Errors.MoleculerClientError('User not found', 404);
      }
    },
    Get(ctx) {
      return users;
    }
  }
};