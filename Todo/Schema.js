import { GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLObjectType,GraphQLNonNull } from "graphql";

import { Query } from "./QuerySchema";
import { Mutation } from "./MutationSchema";

export const schema = new GraphQLSchema({
    query:Query,
    mutation : Mutation
}); 