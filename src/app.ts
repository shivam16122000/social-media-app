import express,{Application,Request,Response} from 'express';

const app: Application = express();
const port:number = 3000;

app.get('/', (req:Request, res:Response):void => {
   res.send('Hello, Worl!');
});

app.listen(port, ():void => {
  console.log(`Server running at http://localhost:${port}`);
});