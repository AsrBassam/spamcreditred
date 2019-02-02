const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`R Farmm - Script By : Matrex `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});



client.on('message', message => { //لا تغير شي لكي ما تخرب
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Red Army , Farm Credit By Red Army, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { //لا تغير فيها شي لكي ما تخرب
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Red Army , Farm Credit By Red Army, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client2.login(process.env.TOKEN3);// لا تغير فيها شيء
client2.login(process.env.TOKEN4);// لا تغير فيها شيء
client2.login(process.env.TOKEN5);// لا تغير فيها شيء
client2.login(process.env.TOKEN6);// لا تغير فيها شيء
client2.login(process.env.TOKEN7);// لا تغير فيها شيء
client2.login(process.env.TOKEN8);// لا تغير فيها شيء
client2.login(process.env.TOKEN9);// لا تغير فيها شيء
client2.login(process.env.TOKEN10);// لا تغير فيها شيء
client2.login(process.env.TOKEN11);// لا تغير فيها شيء
client2.login(process.env.TOKEN12);// لا تغير فيها شيء
client2.login(process.env.TOKEN13);// لا تغير فيها شيء
client2.login(process.env.TOKEN14);// لا تغير فيها شيء
client2.login(process.env.TOKEN15);// لا تغير فيها شيء
client2.login(process.env.TOKEN16);// لا تغير فيها شيء
client2.login(process.env.TOKEN17);// لا تغير فيها شيء
client2.login(process.env.TOKEN18);// لا تغير فيها شيء
client2.login(process.env.TOKEN19);// لا تغير فيها شيء
client2.login(process.env.TOKEN20);// لا تغير فيها شيء
client2.login(process.env.TOKEN21);// لا تغير فيها شيء
client2.login(process.env.TOKEN22);// لا تغير فيها شيء
client2.login(process.env.TOKEN23);// لا تغير فيها شيء
client2.login(process.env.TOKEN24);// لا تغير فيها شيء
client2.login(process.env.TOKEN25);// لا تغير فيها شيء
client2.login(process.env.TOKEN26);// لا تغير فيها شيء
client2.login(process.env.TOKEN27);// لا تغير فيها شيء
client2.login(process.env.TOKEN28);// لا تغير فيها شيء
client2.login(process.env.TOKEN29);// لا تغير فيها شيء
client2.login(process.env.TOKEN30);// لا تغير فيها شيء