# Penpot Design Assistant

A Penpot plugin that lets you ask questions about your design system directly from Penpot. Powered by any OpenAI-compatible LLM.

Out of the box configured for Material Design 3. Easily swappable to your own design system and local LLM.

## Installation

### Requirements

- [Node.js](https://nodejs.org) (any recent version)
- Penpot (cloud or self-hosted)
- An API key or access to a local LLM

### Run locally

```bash
git clone https://github.com/bold700/penpot-design-assistant.git
cd penpot-design-assistant
cp config.example.json config.json
```

Edit `config.json` and fill in your settings (see configuration below), then:

```bash
npm start
```

### Add to Penpot

1. Open a Penpot file
2. Go to **Plugins** (the puzzle icon in the toolbar)
3. Click **Add plugin**
4. Enter the URL: `http://localhost:7780/manifest.json`
5. Click **Install**

---

## Configuration

All settings live in `config.json` (not committed to git). Copy `config.example.json` to get started.

### Using OpenAI

```json
{
  "apiKey": "sk-...",
  "apiUrl": "https://api.openai.com/v1/chat/completions",
  "model": "gpt-4o",
  "systemPromptFile": "prompt.txt"
}
```

### Using a local LLM (Ollama)

```json
{
  "apiKey": "ollama",
  "apiUrl": "http://YOUR_SERVER:11434/v1/chat/completions",
  "model": "YOUR_MODEL_NAME",
  "systemPromptFile": "prompt.txt"
}
```

### Using a local LLM (LM Studio)

```json
{
  "apiKey": "lm-studio",
  "apiUrl": "http://YOUR_SERVER:1234/v1/chat/completions",
  "model": "YOUR_MODEL_NAME",
  "systemPromptFile": "prompt.txt"
}
```

### What to ask your cloud/infrastructure team

To fill in the config above, you need the following from your team:

| Setting | What to ask |
|---|---|
| `apiUrl` | What is the endpoint of our internal LLM? |
| `model` | What is the model name we should use? |
| `apiKey` | Do we need an API key, and if so which one? |

---

## Knowledge source

The assistant's knowledge comes from `prompt.txt`. Edit this file to change what the assistant knows about.

**To use your own design system:**
1. Open `prompt.txt`
2. Replace the content with your design system documentation
3. You can paste content exported from Confluence or any other source

To use a different file:
```json
{
  "systemPromptFile": "our-design-system.txt"
}
```

---

## No build step

No dependencies, no build step. Pure Node.js.
