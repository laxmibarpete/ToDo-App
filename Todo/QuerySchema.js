import { GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLObjectType,GraphQLNonNull } from "graphql";
import { db } from "../build/db";
import { Todo } from "./Model";
import { ToDoList } from "../DataBase/Models/TodoSchema";


export const Query = new GraphQLObjectType({
    name: "QueryType",
    fields:{
        fetchTodo : {
            type : Todo,
            args:{
                id: {type: GraphQLInt} 
            },
            resolve: (parentValue,args)=>{
                var foundItems = new Promise((resolve, reject) => {
                    ToDoList.find({id:args.id},(err,todo) => {                        
                        err ? reject(err) : resolve(todo[0])
                    });
                })
                return foundItems;
            }
            
        },
        fetchTodos : {
            type : new GraphQLList(Todo),
            resolve: (args)=>{
                var foundItems = new Promise((resolve, reject) => {
                    ToDoList.find({},(err, todos) => {
                        err ? reject(err) : resolve(todos)
                    })
                })
                return foundItems;
            }
        }
    }
}) 