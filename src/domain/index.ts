import IUser from "./entities/user.interface";
import { ITokenService } from "./services/token-serivce.interface";
import { IHashageService } from "./services/hashage-service.interface";
import { IHttpResponse } from "./http/http.interface";

import { IPost } from "./entities/post.interface";
import { IReaction } from "./entities/reaction.interface";
import { IComment } from "./entities/comment.interface";
import { ITokenDecoded } from "./entities/custom.interface";
import { ITransformService } from "./services/transform-service.interface";

// import { ILoadAdminRepository, ISaveAdminRepository } from "./repositories/admin/admin-repository.interface";
import ISaveUserRepository from "./repositories/user/save-user-repository.interface";
import ILoadUserRepository from "./repositories/user/load-user-repository.interface";
import { ISavePostRepository } from "./repositories/post/save-post-repository.interface";
import { ILoadPostRepository } from "./repositories/post/load-product-repository.interface";
import { ILoadReactionRepository } from "./repositories/reaction/load-reaction-repository.interface";
import { ISaveReactionRepository } from "./repositories/reaction/save-reaction-repository.interface";
import { IActionReactionRespository } from "./repositories/reaction/action-reaction-repository.interface";
import { ISaveCommentRepository } from "./repositories/comment/save-comment-repository.interface";

import AuthUserUsecase from "./usecases/user/authentification/auth-user.usecase";
import SignupUserUseCase from "./usecases/user/authentification/signup-user.usercase";
import LoginUserUseCase from "./usecases/user/authentification/login-user.usecase";
import LoadAllUserUsecase from "./usecases/user/load/load-all-user.usecase";
import AddNewPostUsecase from "./usecases/post/save/add-new-post.usecase";
import LoadPostUsecase from "./usecases/post/load/load-post.usecase";
import LikeInlikePostUsecase from "./usecases/post/action/like-Inlike-post.usecase";
import CommentPostUsecase from "./usecases/post/action/comment-post.usecase";
import LoadProductByCountryUsecase from "./usecases/post/load/load-product-by-country.usecase";
import LoadUserByIdUsecase from "./usecases/user/load/load-user-by-id.usecase";
import LoadAllCommentUsecase from "./usecases/comment/load-all-comment.usecase";
import LoadPostByUserIdUsecase from "./usecases/post/load/load-post-by-user-id.usecase";


export {
    IUser,
    // ILoadAdminRepository,
    // ISaveAdminRepository,
    ITokenService,
    IHashageService,
    IHttpResponse,
    ITransformService,
    
    IPost,
    IReaction,
    IComment,
    ITokenDecoded,

    ILoadUserRepository,
    ILoadPostRepository,
    ISavePostRepository,
    ILoadReactionRepository,
    ISaveUserRepository,
    ISaveReactionRepository,
    IActionReactionRespository,
    ISaveCommentRepository,

    AuthUserUsecase,
    LoginUserUseCase,
    SignupUserUseCase,
    LoadAllUserUsecase,
    AddNewPostUsecase,
    LoadPostUsecase,
    LikeInlikePostUsecase,
    CommentPostUsecase,
    LoadProductByCountryUsecase,
    LoadUserByIdUsecase,
    LoadAllCommentUsecase,
    LoadPostByUserIdUsecase
}