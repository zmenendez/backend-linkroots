import { Router } from "express";
import { createAccount } from "./handlers";
import { body } from "express-validator";

const router = Router();

/** Autenticacion y Registro */
router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El Nombre no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('E-mail no válido'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('El Password es muy corto, mínimo 8 caracteres'),

    createAccount
)

router.post('/auth/login',

)

export default router;  