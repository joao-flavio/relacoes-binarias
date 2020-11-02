![Cabecalho](https://i.imgur.com/i37akf1.png)

## É simples
Este é um código simples para retornar pares ordenados de relações binárias.

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
-  <img src="https://render.githubusercontent.com/render/math?math=A%20%3D%20%5Cleft%20%5C%7B%20-2%2C%20-1%2C%200%2C%201%20%5Cright%20%5C%7D">
- <img src="https://render.githubusercontent.com/render/math?math=B%20%3D%20%5Cleft%20%5C%7B-5%2C%20-2%2C%201%2C%204%2C%205%2C%206%20%5Cright%20%5C%7D">
Determinaremos a relação:
<img src="https://render.githubusercontent.com/render/math?math=R%20%3D%20%5Cleft%20%5C%7B%20%5Cleft%20(%20x%2C%20y%20%5Cright%20)%20%5Cin%20A%5Ctimes%20B%20%7Cy%20%3D%203x%20%2B%201%20%5Cright%20%5C%7D">


Agora, definiremos as variáveis A e B, que serão arrays, contendo os elementos dos conjuntos A e B:
~~~javascript
let a = [-2, -1, 9, 1];
let b = [-5, -2, 1, 4, 5, 6];
~~~

Agora, basta definir a condição da relação:
<img src="https://render.githubusercontent.com/render/math?math=y%20%3D%203x%2B1">
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
<img src="https://render.githubusercontent.com/render/math?math=R%3D%20%5Cleft%20%5C%7B%20%5Cleft%20(%20-2%2C%20-5%20%5Cright%20)%20%5Cleft%20(%20-1%2C%20-2%20%5Cright%20)%20%5Cleft%20(%200%2C%201%20%5Cright%20)%20%5Cleft%20(%201%2C%204%20%5Cright%20)%20%5Cright%20%5C%7D">



### Pŕoximas atualizações

 - Definir A e B dinamicamente
 - Definir a condição da relação dinamicamente
 - Gerar gráfico das relações

License
----

MIT


**Software livre!**

   [node.js]: <http://nodejs.org>
   