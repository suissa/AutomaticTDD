# notEmpty

Parâmetros de entrada:

- value

Valor de saída:

- Boolean

Definição:

A função só deve retornar `true` caso o valor passado seja diferente de `undefined` ou `null`

Função:

```js
'use strict';

module.exports = (value) => {
  if (value === null || value === undefined) return false;
  return true;
};
```

Uso:



Algoritmo:

Primeiramente iniciamos criando a função retornando `true`:

```js
'use strict';

module.exports = (value) => {
  return true;
};
```

Ok! Agora precisamos definir quais são as regras para que essa função não retorne `true`, ou seja, caso o valor seja vazio não podemos retornar `true`, mas sim `false`.

```js
'use strict';

module.exports = (value) => {
  if (value === null || value === undefined) return false;
  return true;
};
```
