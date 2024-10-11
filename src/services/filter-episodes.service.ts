import { PodCastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async ( podcastName: string | undefined ):Promise<PodCastTransferModel> => {
  // definir a interface de retorno
  let responseFormat: PodCastTransferModel = {
    statusCode:0,
    body: [],
  };
  // buscando os dados
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodcast(queryString);

  // verificando se há conteudo
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.ok : StatusCode.noContent, 
    body: data,
  }

  return responseFormat;
}