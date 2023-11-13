import express, { Router } from "express";
import LeadCtrl from "../controller/lead.ctrl";
import container from "../ioc";
const router: Router = Router();

/**
 * http://localhost/lead GET
 */
const leadCtrl: LeadCtrl = container.get("lead.ctrl");
router.get("/", leadCtrl.viewHome);

export { router };