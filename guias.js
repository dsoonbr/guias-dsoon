// Lista de guias do app. Para adicionar um jogo novo:
// 1. crie a pasta guias/<id>/ com um index.html
// 2. acrescente uma entrada aqui
// 3. acrescente "guias/<id>/" no ASSETS do sw.js e suba a VERSION
window.GUIAS = [
  {
    id: "eday",
    jogo: "Gears of War: E-Day",
    titulo: "Coletáveis E-Day",
    resumo: "140 coletáveis, 125 caixas rígidas e 17 missões secundárias, na ordem do caminho.",
    caminho: "guias/eday/",
    chave: "eday-coletaveis-v1", // chave do localStorage onde o guia salva o progresso
    total: 282,
    cor: "#b3171d"
  }
];
