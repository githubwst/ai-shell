/*
 * @Author: wangsongtao wangsongtao.heuwst@bytedance.com
 * @Date: 2024-07-17 13:00:37
 * @LastEditors: wangsongtao wangsongtao.heuwst@bytedance.com
 * @LastEditTime: 2024-07-18 21:18:38
 * @FilePath: /ai-shell/src/helpers/stream-to-iterable.ts
 * @Description:
 *
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { IncomingMessage } from 'http';

export async function* streamToIterable(stream: IncomingMessage) {
  let previous = '';
  for await (const chunk of stream) {
    const bufferChunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    previous += bufferChunk;
    let eolIndex;
    while ((eolIndex = previous.indexOf('\n')) >= 0) {
      // line includes the EOL
      const line = previous.slice(0, eolIndex + 1).trimEnd();
      if (line.startsWith('data: ')) yield line;
      previous = previous.slice(eolIndex + 1);
    }
  }
}
