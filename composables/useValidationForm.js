export function useValidationForm(data) {
  for (let key of Object.keys(data))
    switch (key) {
      case "username":
        const someEngPattern = /^[a-zA-Z0-9!#%_]*$/;
        console.log("switch :>>  name  OK!", data.username);
        return someEngPattern.test(data.username);
      case "password":
        console.log("switch :>>  password  OK!", data.password);
        break;
      case "email":
        console.log("switch :>>  password  OK!", data.email);
        break;

      default:
        break;
    };
}
