import { QueryResolvers } from '@/generated/graphql';

export const Query: QueryResolvers = {
  hello: () => 'Hello world!',
  me: (_, __, ctx) => {
    return ctx.userId;
  },
};
