# JavaScript: consumindo e tratando dados de uma API.
## Proposta de projeto
Um formulário de cadastro da plataforma AluraBooks, uma livraria on-line que vende livros técnicos. Nesse formulário, implementamos o autopreenchimento de informações do endereço através do valor do CEP inserido pelo usuário.

### Conceitos abordados durante o curso:
Assincronicidade, requisições e API (Interface de Programação de Aplicações).

#### Ponto de atenção: JS executa uma coisa por vez. Portanto, o fluxo de execução de tarefas pode ser dividido em: Event Loop, Call Stack e Task Queue.

Por padrão o JS é síncrono, isto é, executa uma ação após a outra em tempo real (linha a linha). O <strong>Event Loop</strong> é um ciclo que monitora e gerencia as ações JS que devem ser priorizadas e executadas na <strong>Call Stack</strong> (onde rodam os scripts quando são chamadas as funções).
<br>
<br>
<strong>Task Queue</strong> "segura" os scripts assíncronos (tempo definido em milissegundos no código) antes de entrarem na Call Stack. O processo de leitura do código só é finalizado quando não existem mais ações a serem executadas. 
<br>
Exemplicação prática do rolê: panela de molho durante o momento de lavagem de louça. Não é porque a solução está agindo ali na panela que a pessoa vai parar de lavar a louça, mas ao contrário, continua desempenhando a tarefa para a qual se propôs até que esteja no ponto de lavagem.

O tempo de espera relativo a fatores externos podem atrasar a execução de uma função, por essa razão o conceito de assincronicidade é pertinente para a prática de desenvolvimento front-end. O tempo que uma requisição pode levar para buscar os dados que o usuário solicita pode variar, sendo assim a tarefa é colocada em uma fila de segundo plano (Task Queue) enquanto tarefas menores são carregadas sem interromper o fluxo do código (Call Stack).

<hr>

Callback são funções que recebem como parâmetro outras funções. Elas são executadas após um tempo determinado ou a partir de uma interação do usuário. Logo, são ativadas por um fator pré-determinado. 
<br>
Ex: colocar (ação) uma pipoquinha para estourar no microondas com o obtivo de comer -> uma ação gera outra ação para uma finalidade = call back.
lanche da tarde(estourarPipoquinha, 5000)
lanche da tarde();

<br>
Requisições trocam protocolos HTTP. Nela há uma request (requisição) e uma response (resposta).
A especificação HTTP diz exatamente o que podemos colocar dentro de cada um destes tipos de mensagem para que todos que "falem" o idioma HTTP consigam trocar informações corretamente.

A estrutura padrão desse código tem três dígitos, sendo o primeiro referente a classificação dele.

1XX: Informativo – a solicitação foi aceita ou está em andamento; <br>
2XX: Confirmação – a solicitação foi concluída ou entendida; <br>
3XX: Redirecionamento – faltou alguma coisa na solicitação; <br>
4XX: Erro do cliente – houve um erro na solicitação; <br>
5XX: Erro no servidor – houve uma falha no servidor durante a solicitação. 

### Particularidades do JS observadas neste projeto:
- Hoisting: a função consegue ser chamada antes mesmo de ter sido declarada (ECMAScript, 2015). No entanto, há especificidades comportamentais que valem o estudo.


## Tecnologias utilizadas durante o curso
* Javascript.

## Captura de tela


Demonstração de um dado incorreto informado, tratado e retornado com o aviso personalizado para o usuário.
