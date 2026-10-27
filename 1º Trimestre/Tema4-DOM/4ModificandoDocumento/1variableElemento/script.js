'strict'
/**
 * Imaxinar que a variable elemento fai referencia a un elemento do DOM e text é unha variable con unha cadea de texto que inclúe etiquetas HTML. ¿Cales dos seguintes comandos farán exactamente o mesmo?:
a. elemento.append(document.createTextNode(text));
b. elemento.innerHTML = text;
c. elemento.textContent = text;
 */


/*Fan o mesmo os elementos A e B, coa unic diferenci de que a B e mais segura e mitiga o risco de ataques.*/