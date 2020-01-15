const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('0 0 18 * * *', ()=>{
    console.log("executará este log  ás 18:00:00 de qualquer dia e qualquer mês e qualquer dia da semana!", new Date());
})