# site-ecomerce

## MCP servers (Cursor)

This repo ships a Cursor MCP config at `.cursor/mcp.json` with two servers:

- **context7** — up-to-date code docs / examples ([Context7](https://context7.com))
- **exa** — web search ([Exa](https://exa.ai))

### Add your API keys

Open `.cursor/mcp.json` and replace the placeholders with your real keys:

- `YOUR_CONTEXT7_API_KEY` → your Context7 API key (get one at https://context7.com/dashboard)
- `YOUR_EXA_API_KEY` → your Exa API key (get one at https://dashboard.exa.ai/api-keys)

Then restart Cursor (or reload the MCP servers from **Settings → MCP**) so the servers pick up the keys.
