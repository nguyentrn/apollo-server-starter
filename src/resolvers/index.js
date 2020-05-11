import GraphQLJSON from 'graphql-type-json';

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    items: async (_, args, { db }, ___) => {
      const items = await db('car_models').select('*');
      return items;
    },
  },
};

export default resolvers;
