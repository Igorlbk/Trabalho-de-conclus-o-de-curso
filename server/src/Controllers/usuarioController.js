import { usuario } from "../Models/usuarioModel.js";

export class usuarioController{
    static async listarTodos(req,res){
        try{
            const usuarios = await usuario.SelectAll(); 
            return res.status(200).json(usuarios) 
        }
        catch (error){

        }
    }
}