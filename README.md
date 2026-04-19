# Penpot Design Assistant

A Penpot plugin that lets you ask questions about your design system directly from Penpot. Powered by any OpenAI-compatible LLM.

Out of the box configured for Material Design 3. Easily swappable to your own design system and local LLM.

## Installation

### Requirements

- [Node.js](https://nodejs.org) (any recent version)
- Penpot (cloud or self-hosted)
- An OpenAI API key (or a local LLM via Ollama / LM Studio)

### Run locally

```bash
git clone https://github.com/bold700/penpot-design-assistant.git
cd penpot-design-assistant
cp config.example.json config.json
```

Edit `config.json` and fill in your API key:

```json
{
  "apiKey": "YOUR_API_KEY",
  "apiUrl": "https://api.openai.com/v1/chat/completions",
  "model": "gpt-4o",
  "systemPromptFile": "prompt.txt"
}
```

Then start the server:

```bash
npm start
```

### Add to Penpot

1. Open a Penpot file
2. Go to **Plugins** (the puzzle icon in the toolbar)
3. Click **Add plugin**
4. Enter the URL: `http://localhost:7780/manifest.json`
5. Click **Install**

## Switching to a different LLM

Update `config.json` to point to any OpenAI-compatible API:

**Ollama (local):**
```json
{
  "apiKey": "ollama",
  "apiUrl": "http://localhost:11434/v1/chat/completions",
  "model": "llama3"
}
```

**LM Studio (local):**
```json
{
  "apiKey": "lm-studio",
  "apiUrl": "http://localhost:1234/v1/chat/completions",
  "model": "your-model-name"
}
```

## Switching to a different knowledge source

Edit `prompt.txt` to replace the design system content. For example, paste in your Confluence documentation or internal design guidelines.

You can also point to a different file:

```json
{
  "systemPromptFile": "my-design-system.txt"
}
```

## No build step

No dependencies, no build step. Pure Node.js.
