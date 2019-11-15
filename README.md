# Teste do Triângulo

###Solução


O problema proposto pode ser resolvido performaticamente utilizando o seguinte método:


                6
            3       5
        9       7       1
    4       6       8       4    

Na penúltima linha, 9 é escolhido como nó, 4 e 6 como filhos do nó, esquerdo e direito respectivamente. Verifica-se qual filho é o maior para somar com o nó.

                6
            3       5
       *15       7       1
    4       6       8       4    

O processo se repete para o próximo nó da linha

                6
            3       5
       *15      *15      1
    4       6       8       4

Até o o último nó da linha

                6
            3       5
       *15     *15     *9
    4       6       8       4

Após somar todos, apaga-se a linha posterior e o processo é repetido novamente para a linha anterior.

                6
            3       5
        15     15      9

Somando

                6
           *18     *20
        15     15      9

Apagando

                6
           18      20

Finalmente o resultado como esperado é 26.

               26
           
## Estimativa

### Backend (NodeJS + Mongo)

* **API** 0.5 horas
* **Estruturação e persistência de dados** 1.5 horas
* **Teste automatizados** 0.5 horas

### Frontend (ReactJS)

* **Design/Layout da página** 1 hora
* **Componente 'Node'** 1 hora
* **Componente 'BinaryTree'** 1 hora
* **Animações** 1 hora

### Infraestrutura

* **Deploy na Google Cloud Platform (docker, provisionamento do BD, integração)** 1.5 horas

### Total: 8 horas de desenvolvimento

## Desenvolvimento

(1)
API usando express.
Rota e teste para POST de uma BinaryTree; resposta mockada dos Steps necessários para resolvê-la.
Eslint para padronização do código.

(2)
Implementação da solução do problema e factory de steps.
Teste para validar solução.

