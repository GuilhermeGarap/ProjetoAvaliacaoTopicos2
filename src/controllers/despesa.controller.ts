import { Despesa } from "./../models/despesa.model";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class DespesaController {
  async cadastrar(request: Request, response: Response): Promise<Response> {
    let despesa: Despesa = new Despesa();
    despesa.descricao = request.body.descricao;
    despesa.preco = Number.parseInt(request.body.preco);

    const despesaCadatrada = await prisma.despesa.create({
      data: {
        descricao: despesa.descricao,
        preco: despesa.preco,
      },
    });

    return response.status(201).json({ message: "Despesa cadastrada!", dados: despesaCadatrada });
  }

  async listar(request: Request, response: Response): Promise<Response> {
    const despesas = await prisma.despesa.findMany({});
    return response.status(200).json({message: "Despesas Listadas: ", dados: despesas})
  }

  async visualizar(request: Request, response: Response): Promise<Response> {
    const quant = await prisma.despesa.count({});
    const despesas = await prisma.despesa.findMany({});
    var despesaTotal = 0;

      for(let despesaCadastrada of despesas){

            var despesaTotal = despesaTotal + despesaCadastrada.preco;
            } 

    let media = despesaTotal/quant;
    let todas = despesaTotal;
    

    return response.status(200).json({message: "Total e Média: ", Media: media, Total: todas})
        }
      }
    
   
  

