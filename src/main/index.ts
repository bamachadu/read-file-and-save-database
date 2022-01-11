import express from "express";
import { fileRoute } from "./route";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(fileRoute)

app.listen(3100,() => {
  console.log('Aplicação executando na porta 3100')
})