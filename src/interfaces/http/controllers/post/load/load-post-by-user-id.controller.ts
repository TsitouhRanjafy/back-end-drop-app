import { Request } from "express";
import { IHttpResponse, IReaction, LoadPostByUserIdUsecase } from "../../../../../domain";
import { StatusCodes } from "http-status-codes";
import { ControllerError } from "../../../../error/controllers.error";

export default class LoadPostByUserIdController {
    constructor(
        private loadPostByUserIdUsecase: LoadPostByUserIdUsecase
    ){}

    async handle(req: Request): Promise<IHttpResponse<Pick<IReaction,"id_post">[] | []>> {
        const { id_user } = req.query;
        try {
            const posts = await this.loadPostByUserIdUsecase.exec(Number(id_user));
            return {
                body: posts,
                statusCode: StatusCodes.OK
            }
        } catch (error) {
            throw new ControllerError("LoadPostByUserIdController",error);
        }
    }   
}