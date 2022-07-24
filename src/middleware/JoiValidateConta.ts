import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

const contaDTO = Joi.object({
  codCliente: Joi.number().integer().options({ convert: false }).label('codCliente')
    .min(1)
    .required(),
  valor: Joi.number().options({ convert: false }).label('valor').min(1)
    .required(),
}).messages({
  'any.required': '{(#label)} é um campo obrigatório',
  'number.min': '{(#label)} valor minimo deve ser igual a 1',
  'number.base': '{(#label)} deve ser do tipo number',
});

const contaValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = contaDTO.validate(req.body, { abortEarly: true });
  if (!error) {
    return next();
  }

  if (error.message.includes('obrigatório')) {
    return res.status(400).json({ message: error.message });
  }

  if (error.message.includes('valor minimo deve ser igual')) {
    return res.status(422).json({ message: error.message });
  }

  if (error.message.includes('tipo number')) {
    return res.status(422).json({ message: error.message });
  }

  return res.status(422).json({ message: error.message });
};

export default contaValidation;
