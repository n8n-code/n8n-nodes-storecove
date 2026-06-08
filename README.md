# @n8n-dev/n8n-nodes-storecove

![storecove Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-storecove.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-storecove)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing storecove API integrations by hand.**

Every time you connect n8n to storecove, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to storecove took 5 minutes, not half a day?**

This node gives you **10+ resources** out of the box: **Invoice Submissions**, **Document Submissions**, **Legal Entities**, **Peppol Identifiers**, **Administrations**, and 5 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-storecove
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-storecove`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **storecove API** → paste your API key
3. Drag the **storecove** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Invoice Submissions | POST Submit a new invoice, POST DEPRECATED. Preflight an invoice recipient, GET DEPRECATED. Get InvoiceSubmission Evidence |
| Document Submissions | POST Submit a new document., GET Get DocumentSubmission Evidence |
| Legal Entities | POST Create a new LegalEntity, DELETE Delete LegalEntity, GET Get LegalEntity, PATCH Update LegalEntity |
| Peppol Identifiers | POST Create a new PeppolIdentifier, DELETE Delete PeppolIdentifier |
| Administrations | POST Create a new Administration, DELETE Delete Administration, GET Get Administration, PATCH Update Administration |
| Received Documents | POST Receive a new Document, POST Create a new received document, GET Get a new ReceivedDocument |
| Additional Tax Identifiers | POST Create a new AdditionalTaxIdentifier, DELETE Delete AdditionalTaxIdentifier, GET Get AdditionalTaxIdentifier, PATCH Update AdditionalTaxIdentifier |
| Purchase Invoices | GET Get Purchase invoice data as JSON, GET Get Purchase invoice data in a selectable format, GET Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version |
| Webhook Instances | GET GET a WebhookInstance, DELETE DELETE a WebhookInstance |
| Discovery | POST Discover Network Participant Existence, GET Discover Country Identifiers ** EXPERIMENTAL, POST Disover Network Participant |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from storecove docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official storecove OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **storecove** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the storecove API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
