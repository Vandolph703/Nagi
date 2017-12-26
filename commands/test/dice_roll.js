//This is a reference for you to test

const commando = require('discord.js-commando');

class DiceRoll extends commando.Command {

    constructor(client){
        super(client, {
            name: 'roll',
            group: 'test',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }

    //Basically like your main function for this class
    async run(message, args){
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("The roll is " + roll);
    }
}

module.exports = DiceRoll;