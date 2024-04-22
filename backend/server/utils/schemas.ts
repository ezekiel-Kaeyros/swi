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
    password: Joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))
    .min(8).required(),
    first_name: Joi.string().min(4).required(),
    last_name: Joi.string().min(4).required(),
    contact: Joi.number().min(7).required(),
    address_id: Joi.string().required(),
    profile_picture: Joi.string().required(),
    role: Joi.string().required(),
});

const posValidator = Joi.object().keys({
    longitude: Joi.number().required(),
    latitude: Joi.number().required(),
    name: Joi.string().min(4).required(),
    channelCluster: Joi.string().required(),
    tradeChannel: Joi.string().required(),
    category: Joi.string().required(),

  });

  const taskValidator = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });

  const roadItemValidator = Joi.object().keys({
    taskIds: Joi.array().items(Joi.string()).required(),
    posId: Joi.string().required(),
  });
  const timesValidator = Joi.object().keys({
    time: Joi.string().required(),
    id_company: Joi.string().required(),
  });

  const channelClusterValidator = Joi.object().keys({
    name: Joi.string().required(),
    id_company: Joi.string().required(),
    color: Joi.string().required(),
    trade_channels_id: Joi.array().items(Joi.string()).required(),
    id: Joi.string().required(),
  });

  const tradeChannelValidator = Joi.object().keys({
    name: Joi.string().required(),
    id_company: Joi.string().required(),
    channel_cluster_id: Joi.string().required(),
  });

  const companyValidator = Joi.object().keys({
    name: Joi.string().required(),
  });

  const categoryValidator = Joi.object().keys({
    name: Joi.string().required(),
    id_company: Joi.string().required(),
    trade_chanel_id: Joi.string().required(),
    description: Joi.array().required(),
  });

export default {
  "/login": loginValidator,
  "/roles": roleValidator,
  "/users": userValidator,
  "/pos": posValidator,
  "/task": taskValidator,
  "/road-item": roadItemValidator,
  "/times": timesValidator,
  "/channelCluster": channelClusterValidator,
  "/tradeChannel": tradeChannelValidator,
  "/company": companyValidator,
  "/category": categoryValidator
} as { [key: string]: ObjectSchema };