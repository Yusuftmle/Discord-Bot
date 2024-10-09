const { Options } = require("discord.js")

module.exports={

name:'ping',
description:'pong!',
//devOnly:Boolean,
//this.testOnly,
//options:Object[],
//deleted:Boolen

callback:async (client,interaction)=>{
  
    await interaction.deferReply();
    const reply= await interaction.fetchReply();
    const ping =reply.createdTimestamp-interaction.createdTimestamp;
    interaction.editReply(`Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`)
},

}