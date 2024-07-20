import axios, { AxiosResponse } from 'axios';
import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from 'openai';

class devchat {
  async createChatCompletion(
    req: CreateChatCompletionRequest,
    ak: string
  ): Promise<AxiosResponse<CreateChatCompletionResponse, any>> {
    return axios.post(
      `https://gpt-i18n.byteintl.net/gpt/openapi/online/multimodal/crawl/?ak=${ak}`,
      req,
      {
        responseType: 'stream',
      }
    );
  }
}

export default new devchat();
