<h2 align="center">
   <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fb5b9997cec2c4fffb3e5c5e9bb4fed7d">
      <img width="300" alt="AI Shell logo" src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fb7f9d2d9911a4199a9d26f8ba210b3f8">
    </picture>
</h2>

<h4 align="center">
   一个将自然语言转换为 Shell 命令，同时支持ai对话的 CLI。
</h4>

<p align="center">
   <img alt="Gif Demo" src="https://user-images.githubusercontent.com/844291/230413167-773845e7-4c9f-44a5-909c-02802b5e49f6.gif" >
<p>

<p align="center">
   受 <a href="https://githubnext.com/projects/copilot-cli">GitHub Copilot X CLI</a> 启发, 但是面向所有人开源.
</p>

<br>

# AI Shell

## 安装

> 最低支持的 Node.js 版本是 v14

1. 安装 _ai shell_:

   ```sh
   npm install -g @bytewst/ai-shell
   ```

2. 从 [OpenAI](https://platform.openai.com/account/api-keys) 获取您的 API 密钥

   > 注意：如果您还没有创建帐户并设置计费方式，您需要先进行这些步骤。

3. 设置密钥以便 ai-shell 可以使用它：

   ```sh
   ai config set OPENAI_KEY=<your token>
   ```

   这将在您的主目录中创建一个名为 `.ai-shell` 的文件。

## 使用

```bash
ai <prompt>
```

例如：

```bash
ai 查找所有.log文件
```

然后您将会得到如下输出，您可以选择运行建议的命令、通过提示修改命令或者取消：

```bash
◇  您的脚本:
│
│  find . -name "*.log"
│
◇  解释:
│
│  这个脚本的步骤如下：
│  1. 在当前目录下搜索所有后缀为".log"的文件。
│  2. 输出所有找到的文件的路径。
│
◆  运行这个脚本?
│  ● ✅ 是 (开始运行吧！)
│  ○ 📝 修改
│  ○ ❌ 取消
└
```

### 特殊字符

请注意，某些 shell 会处理某些特殊字符，如 `?` 或 `*` 或看起来像是文件路径的字符。如果您遇到奇怪的行为，可以将提示符用引号括起来以避免问题，例如下面的示例：

```bash
ai '我的 IP 地址是什么？'
```

### 聊天模式

![Chat demo](https://user-images.githubusercontent.com/844291/232889699-e13fb3fe-1659-4583-80ee-6c58d1bcbd06.gif)

```bash
ai chat
```

通过此模式，您可以直接通过 CLI 与 AI 进行对话，并以自然、对话式的方式获得有用的响应：

```sh
┌  开始新的对话
│
◇  您:
│  在 Express 中如何进行重定向服务？
│
◇  AI Shell:

在 Express 中，您可以使用 `redirect()` 方法来进行重定向服务。`redirect()` 方法接受一个参数，即您要重定向到的 URL。

以下是一个示例：

\`\`\`js
app.get('/oldurl', (req, res) => {
  res.redirect('/newurl');
});
\`\`\`
```

### 静默模式（跳过解释）

您可以使用 `-s` 或 `--silent` 标志来禁用和跳过解释部分。

```bash
ai -s 列出所有日志文件
```

或者使用以下命令将选项保存为首选项：

```bash
ai config set SILENT_MODE=true
```

### 自定义 API 端点

您可以自定义 OpenAI API 端点以设置 OPENAI_API_ENDPOINT（默认值为 `https://api.openai.com/v1`）。

```sh
ai config set OPENAI_API_ENDPOINT=<your proxy endpoint>
```

### 设置语言

![Language UI](https://user-images.githubusercontent.com/1784873/235330029-0a3b394c-d797-41d6-8717-9a6b487f1ae8.gif)

AI Shell 的默认语言是英文，但您也可以参考下列语言对应的键，来设置您需要的语言界面：

| 语言       | 键值    |
| ---------- | ------- |
| English    | en      |
| 简体中文   | zh-Hans |
| 繁体中文   | zh-Hant |
| Español    | es      |
| 日本語     | jp      |
| 한국어     | ko      |
| Français   | fr      |
| Deutsch    | de      |
| Русский    | ru      |
| Українська | uk      |
| Tiếng Việt | vi      |
| العربية    | ar      |
| Português  | pt      |

例如，您要将语言设置为简体中文，可以在设置 LANGUAGE 的值为 zh-Hans:

```sh
ai config set LANGUAGE=zh-Hans
```

这样您的语言就设置为了简体中文

### 配置界面

如果要使用更可视化的界面查看和设置配置选项，可以键入：

```bash
ai config
```

要获取如下所示的交互式 UI：

```bash
◆  Set config:
│  ○ OpenAI Key
│  ○ OpenAI API Endpoint
│  ○ Silent Mode
│  ● Model (gpt-3.5-turbo)
│  ○ Language
│  ○ Cancel
└
```

### 升级

使用以下命令检查已安装的版本：

```bash
ai --version
```

如果它不是[最新版本](https://web-bnpm.byted.org/package/@bytewst/ai_shell?tab=versions)，请运行：

```bash
npm update -g @bytewst/ai-shell
```

或者只需使用 AI shell：

```bash
ai update
```

## 常见问题

## 动机

以学习为目的。
