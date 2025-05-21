import { checkSchema } from "express-validator";

const reactionSchemaBody = checkSchema({ // <= à corriger, use query in place of body, delete role (id_user is a primary key)
    id_post: {
        isInt: {
            errorMessage: "id_post must be a integer",
            options: { min: 0 }
        },
        toInt: true
    }
},["query"])

export {
    reactionSchemaBody,
}