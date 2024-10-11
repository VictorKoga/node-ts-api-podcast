import { PodCastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async ():Promise<PodCastTransferModel> =>{
    // definir a interface de retorno
    let responseFormat: PodCastTransferModel = {
      statusCode:0,
      body: [],
    };  
    // buscar dados do repositório de podcasts
    const data = await repositoryPodcast();
    // verificar se existem dados
    responseFormat = {
      statusCode: data.length !== 0 ? StatusCode.ok : StatusCode.noContent, 
      body: data,
    }

    return responseFormat;
}
