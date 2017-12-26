
const commando = require('discord.js-commando');
const bot = new commando.Client();


//Test 
bot.registry.registerGroup('test', 'Test');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login('Mzk1MTg2MjE2MDkxMzg1ODU3.DSQBgw.61IraTc0yIqTMZPD117JL00gB6Q');


