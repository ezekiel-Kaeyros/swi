import Joi, { ObjectSchema } from "joi";

const PASSWORD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})"
);

const loginValidator = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const roleValidator = Joi.object().keys({
    name: Joi.string().min(4).required(),
});

const userValidator = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
});

const posValidator = Joi.object().keys({
    longitude: Joi.string().min(4).required(),
    latitude: Joi.string().min(4).required(),
  });

  const taskValidator = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });

export default {
  "/login": loginValidator,
  "/roles": roleValidator,
  "/users": userValidator,
  "pos": posValidator,
  "/tasks": taskValidator,
} as { [key: string]: ObjectSchema };