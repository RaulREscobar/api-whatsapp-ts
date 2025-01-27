import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";

class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) { }

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, phone } = body;
    const response = await this.leadCreator.sendMessageAndSave({ message, phone })
    res.send(response);
  };

  public viewHome = (req: Request, res: Response) => {
    res.render("home", { title : 'Inicio' });
  }
}

export default LeadCtrl;
