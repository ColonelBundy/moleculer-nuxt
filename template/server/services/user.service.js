const { MoleculerClientError } = require('moleculer').Errors;

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
];

module.exports = {
  name: 'users',
  actions: {
    GetByID: {
      cache: {
        keys: ['id']
      },
      params: {
        id: { type: 'number', negative: false, convert: true }
      },
      handler (ctx) {
        const id = parseInt(ctx.params.id);
        if (id >= 0 && id < users.length) {
          return users[id];
        } else {
          return new MoleculerClientError('User not found', 404);
        }
      }
    },
    Get: {
      cache: true,
      handler (ctx) {
        return users;
      }
    }
  }
};
