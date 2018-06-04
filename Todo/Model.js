import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";
export const Todo = new GraphQLObjectType({
    name : "Todo",
    fields: () => ({
        id : {type:GraphQLInt},
        name : {type:GraphQLString},
        status : {type:GraphQLString}
    })
})