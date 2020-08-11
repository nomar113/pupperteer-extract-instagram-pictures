# Extraindo dados de outros sites com Puppeteer JS

## headless

A opção ```headless:false``` faz com que o navegador seja aberto para visualização das ações programadas, por default a opção é true, ou seja, as ações do browser serão em background.

```js
await puppeteer.launch({ headless: false });
```

## page.evaluate()

```js
 await page.evaluate(() => {
    // toda essa função será executada no browser (manipulação de DOM)
  });
```

## Execução:

```bash
node index
```
Realiza a extração dos dados e salva no arquivo JSON

```bash
npx lite-server
```
Cria um servidor local para visualizar o arquivo HTML utilizando os dados do arquivo JSON no navegador


[![Code/Drops #47](http://img.youtube.com/vi/K5yYBJhix5A/0.jpg)](http://www.youtube.com/watch?v=K5yYBJhix5A "Extraindo dados de outros sites com Puppeteer JS")
