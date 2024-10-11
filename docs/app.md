Linguagem utilizada: TypeScript, 
# PodCast Menager

### Descrição
Um app ao estilo netflix onde eu possa centralizar diferente episódios de podcats separados por categorias

### Domínio 
Podcasts feitos em video

### Features
- listar os episódios em sessões de categorias
  - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcat

### Como

#### Feature

- listar os episodios em sessões de categorias

### Como vou implementar
  GET: retorna a lista de episódios


  Vou retornar em uma API REST (json) o nome do podcast, nome do episódio, imagem de capa, link, categories.
   ```js
   [
    {
      podcastName: "flow",
      episode: "CBUM - Flow #319",
      videoId: "pQSuQmUfS30"
      cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg"
      link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
      categories: ["saúde", "esporte", "bodybuilder"]
    },
    {
      podcastName: "flow",
      episode: "RUBENS BARRICHELLO - Flow #339",
      videoId: "4KDGTdiOV4I"
      cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg"
      link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
      categories: ["esporte", "corrida"]
    },
   ]
   ```

   GET: retorna lista de episodios baseado em um parametro enviado pelo client do nome do postcast