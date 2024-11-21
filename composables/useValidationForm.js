/**
 *
 * @param {object} data \{key <input id="username" | "password" | "email" | "phone" | any >: value string}
 */
export function useValidationForm(data) {
  let answer = true;
  let message = "";
  const someEngPattern =
    /^(?:[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")$/;
  const emailRegex =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;

  for (let key of Object.keys(data)) {
    switch (key) {
      case "username":
        answer &&= someEngPattern.test(data.username);
        break;
      case "password":
        answer &&=
          !(data.password.length < 6) && someEngPattern.test(data.password);
        break;
      case "email":
        answer &&= emailRegex.test(data.email);
        break;
      case "phone":
        answer &&= phoneRegex.test(data.phone);
        break;
      default:
        answer &&= true;
        break;
    }
    if (!answer) return message = `The ${key} is unusable!`;
  }
  return answer || message;
}
