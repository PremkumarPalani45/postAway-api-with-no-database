import fs from 'fs';
import winston from 'winston';

const loggerwi= winston.createLogger({

    level:'info',
    format:winston.format.json(),
    defaultMeta: {service:'request-logging'},
    transports:[
        new winston.transports.File({filename:'log.txt'})
    ]


});
 const winstonlogger=(req,res,next)=>{
    if(!req.url.includes('signin')){
      const logger=`${req.url} - ${JSON.stringify(req.body) }`
       loggerwi.info(logger);
    }
 }

 export default winstonlogger;