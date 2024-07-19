/*
 * @Author: wangsongtao wangsongtao.heuwst@bytedance.com
 * @Date: 2024-07-17 14:12:16
 * @LastEditors: wangsongtao wangsongtao.heuwst@bytedance.com
 * @LastEditTime: 2024-07-18 21:21:45
 * @FilePath: /ai-shell/src/helpers/devchat.ts
 * @Description:
 *
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import axios, { AxiosResponse } from 'axios';

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
			},
		);
	}
}

export default new devchat();

export interface ChatCompletionRequestMessage {
	role: 'user' | 'assistant' | 'system';

	content: string;

	name?: string;
}

export interface CreateChatCompletionRequest {
	model: string;

	messages: Array<ChatCompletionRequestMessage>;

	temperature?: number | null;

	top_p?: number | null;

	n?: number | null;

	stream?: boolean | null;

	max_tokens?: number;

	presence_penalty?: number | null;

	frequency_penalty?: number | null;

	logit_bias?: object | null;

	user?: string;
}

export interface CreateChatCompletionResponse {
	id: string;

	object: string;

	created: number;

	model: string;

	choices: Array<CreateChatCompletionResponseChoicesInner>;

	usage?: CreateCompletionResponseUsage;
}

export interface CreateChatCompletionResponseChoicesInner {
	index?: number;

	message?: ChatCompletionResponseMessage;

	finish_reason?: string;
}

export interface ChatCompletionResponseMessage {
	role: 'user' | 'assistant' | 'system';
	content: string;
}

export interface CreateCompletionResponseUsage {
	prompt_tokens: number;

	completion_tokens: number;

	total_tokens: number;
}
