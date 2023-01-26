import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("Email obrigatorio"),
  password: yup
    .string()
    .required("Campo obrigatorio")
    .min(8, "A senha precisa ter nominino 8 caracteres"),

  bio: yup.string().required("Bio obrigatoria"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais"), //serve para fazer a comparação das senhas pra ver se são iguais

  contact: yup.string().required("Contato obrigatório"),

  course_module: yup.string().required("Selecione um Modulo"),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().required("Email obrigatorio"),
  password: yup.string().required("Password obrigatorio"),
});

export const schemaFormTecnologia = yup.object().shape({
  title: yup.string().required("Digite um titulo"),
  status: yup.string().required("Selecione um dos niveis de habilidades"),
});
