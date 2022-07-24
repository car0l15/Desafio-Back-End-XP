import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const investimentoDTO = Joi.object({
  codCliente: Joi.number().integer().options({ convert: false }).label('codCliente')
    .min(1)
    .required(),
  codAtivo: Joi.number().integer().options({ convert: false }).label('codAtivo')
    .min(1)
    .required(),
  qtAtivo: Joi.number().options({ convert: false }).label('qtAtivo').min(1)
    .required(),
}).messages({
  'any.required': '{(#label)} é um campo obrigatório',
  'any.min': '{(#label)} valor minimo deve ser igual a 1',
  'any.number': '{(#label)} deve ser do tipo number',
});

const investimentoValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = investimentoDTO.validate(req.body, { abortEarly: true });

  if (!error) {
    return next();
  }

  //   console.log(error.message, 'error');
  if (error.message.includes('obrigatório')) {
    return res.status(400).json({ message: error.message });
  }

  if (error.message.includes('equal to 1')) {
    return res.status(422).json({ message:
    'todos os campos devem ter seu valor maior ou igual a 1',
    });
  }

  if (error.message.includes('a number')) {
    return res.status(422).json({ message: 'todos os campos devem ser numéricos' });
  }

  return res.status(422).json({ message: error.message });
};

export default investimentoValidation;
