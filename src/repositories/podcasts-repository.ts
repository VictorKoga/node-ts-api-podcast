// importando file system
import fs from 'fs';
import path from 'path';
import { PodCastModel } from '../models/podcast-model';

const pathData = path.join(__dirname, "../repositories/podcasts.json");
// ler os dados do arquivo json
export const repositoryPodcast = async (
  podcastName?: string): Promise<PodCastModel[]> => {
    const charset = "utf8";
    const rawData = fs.readFileSync(pathData, charset);
    let jsonFile = JSON.parse(rawData);

    if (podcastName){
      jsonFile = jsonFile.filter((podcast: PodCastModel) => podcast.podcastName === podcastName)
    }
    // utiliza o parse para ler o text e converter 
    return jsonFile;
}