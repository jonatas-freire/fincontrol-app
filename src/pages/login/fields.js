// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: "txt_login",
    value: "",
    isRequired: true,
    label: "Digite o seu email",
    type: "text",
    validate: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
    valid: true
  },
  {
    id: "txt_password",
    value: "",
    isRequired: true,
    label: "Digite a sua senha",
    type: "password",
    valid: true
  },

]