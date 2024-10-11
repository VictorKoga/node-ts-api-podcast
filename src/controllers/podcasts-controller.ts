import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisodes} from '../services/list-episodes-service';
import { serviceFilterEpisodes } from "../services/filter-episodes.service";
import { ContentType } from "../utils/content-type";
import { PodCastTransferModel } from "../models/podcast-transfer-model";

const defaultContentType = { 'Content-type': ContentType.JSON }
// função que lista os episodios
export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
  const content: PodCastTransferModel = await serviceListEpisodes()
  response.writeHead(content.statusCode, defaultContentType);
  response.write(JSON.stringify(content.body))
  response.end();
};

// função que filtra os episodios
export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {  
  const content: PodCastTransferModel = await serviceFilterEpisodes(request.url);  
  response.writeHead(content.statusCode, defaultContentType);
  response.write(JSON.stringify(content.body));
  response.end();
}
