import type { INodeProperties } from 'n8n-workflow';

export const receivedDocumentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					]
				}
			},
			"options": [
				{
					"name": "Receive Documenht",
					"value": "Receive Documenht",
					"action": "Receive a new Document",
					"description": "DEPRECATED - use new path /received_documents. Receive a new Document.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/received_documents"
						}
					}
				},
				{
					"name": "Create Received Document",
					"value": "Create Received Document",
					"action": "Create a new received document",
					"description": "Create a new received document.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/received_documents"
						}
					}
				},
				{
					"name": "Get Received Document",
					"value": "Get Received Document",
					"action": "Get a new ReceivedDocument",
					"description": "EXPERIMENTAL: use only for orders. Get a new ReceivedDocument.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/received_documents/{{$parameter[\"guid\"]}}/{{$parameter[\"format\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /legal_entities/{legal_entity_id}/received_documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Receive Documenht"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity for which the document was received.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Receive Documenht"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "",
			"description": "The Base64 encoded document.",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Receive Documenht"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"type": "number",
			"default": 0,
			"description": "The of the LegalEntity this document was received for.",
			"routing": {
				"send": {
					"property": "legal_entity_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Receive Documenht"
					]
				}
			}
		},
		{
			"displayName": "Parse Strategy",
			"name": "parseStrategy",
			"type": "options",
			"default": "rfc822",
			"description": "The attachment content type (mime type).",
			"options": [
				{
					"name": "Rfc 822",
					"value": "rfc822"
				}
			],
			"routing": {
				"send": {
					"property": "parseStrategy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Receive Documenht"
					]
				}
			}
		},
		{
			"displayName": "Bearer API Key",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "API key for Bearer (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Receive Documenht"
					]
				}
			}
		},
		{
			"displayName": "POST /received_documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Create Received Document"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "",
			"description": "The Base64 encoded document.",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Create Received Document"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"type": "number",
			"default": 0,
			"description": "The of the LegalEntity this document was received for.",
			"routing": {
				"send": {
					"property": "legal_entity_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Create Received Document"
					]
				}
			}
		},
		{
			"displayName": "Parse Strategy",
			"name": "parseStrategy",
			"type": "options",
			"default": "rfc822",
			"description": "The attachment content type (mime type).",
			"options": [
				{
					"name": "Rfc 822",
					"value": "rfc822"
				}
			],
			"routing": {
				"send": {
					"property": "parseStrategy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Create Received Document"
					]
				}
			}
		},
		{
			"displayName": "Bearer API Key",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "API key for Bearer (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Create Received Document"
					]
				}
			}
		},
		{
			"displayName": "GET /received_documents/{guid}/{format}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Get Received Document"
					]
				}
			}
		},
		{
			"displayName": "Guid",
			"name": "guid",
			"required": true,
			"description": "The guid of the document that was received. This is the \"document_guid\" property of the \"received_document\" webhook.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Get Received Document"
					]
				}
			}
		},
		{
			"displayName": "Syntax",
			"name": "syntax",
			"required": true,
			"description": "The syntax in which to receive the received document.",
			"default": "json",
			"type": "options",
			"options": [
				{
					"name": "Json",
					"value": "json"
				},
				{
					"name": "Original",
					"value": "original"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "syntax",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Get Received Document"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Get Received Document"
					]
				}
			}
		},
		{
			"displayName": "Bearer API Key",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "API key for Bearer (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Received Documents"
					],
					"operation": [
						"Get Received Document"
					]
				}
			}
		},
];
