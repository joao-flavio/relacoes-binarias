# Relações binárias

Este é um código simples para retornar pares ordenados de relações binárias.

## É simples
  - Defina dois conjuntos X e Y
  - Defina a condição da relação
  - Obtenha os pares ordenados

## Como usar
Você pode executar esse código tanto no seu naveador, adicionando um script a um arquivo HTML, e o console do seu navegador.
~~~html
<script src="main.js"></script>
~~~
Você também pode utilizar o [Node.js], e executar usando o comando:
```sh
$ node main.js
```

## Vamos começar
Dados os conjuntos:
- $$A = \left \{ -2, -1, 0, 1 \right \}$$
- $$B = \left \{-5, -2, 1, 4, 5, 6 \right \}$$
Determinaremos a relação:
$$R = \left \{ \left ( x, y \right ) \in A\times B |y = 3x + 1 \right \}$$


Agora, definiremos as variáveis A e B, que serão arrays, contendo os elementos dos conjuntos A e B:
~~~javascript
let a = [-2, -1, 9, 1];
let b = [-5, -2, 1, 4, 5, 6];
~~~

Agora, basta definir a condição da relação:
$$ y = 3x+1  $$
~~~javascript
3 * x + 1 === y
~~~

O script retornará o resultado:
~~~
(-2,-5)
(-1,-2)
(0,1)
(1,4)
~~~
Esse resultado é equivalente a:
$$R= \left \{ \left ( -2, -5 \right ) \left ( -1, -2 \right ) \left ( 0, 1 \right ) \left ( 1, 4 \right ) \right \}$$



### Pŕoximas atualizações

 - Definir A e B dinamicamente
 - Definir a condição da relação dinamicamente
 - Gerar gráfico das relações

License
----

MIT


**Software livre!**

   [node.js]: <http://nodejs.org>
   