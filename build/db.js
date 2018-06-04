import { Mongoose } from "mongoose";
var mongoose = require("mongoose");

const state ={
    db:null
};

export const db = {
    connect: (url, done) =>{
        mongoose.connect(url)
        const db = mongoose.connection;
        state.db = db;

        db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
        db.once('open', () => {
        console.log( '+++Connected to mongoose')
        })

    },
    get: ()=>{
        return state.db 
    },
    
    close: () =>{
        if(state.db){
            state.db.close((err, result)=>{
                    if(err) console.log("Error in closing Db",err);
                    state.db = null;

            })
        }
    } 

}
