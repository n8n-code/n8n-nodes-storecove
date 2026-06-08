import type { INodeProperties } from 'n8n-workflow';

export const peppolIdentifiersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					]
				}
			},
			"options": [
				{
					"name": "Create Peppol Identifier",
					"value": "Create Peppol Identifier",
					"action": "Create a new PeppolIdentifier",
					"description": "Create a brand new new PeppolIdentifier. For <<_sg_singapore>>, special rules apply.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/peppol_identifiers"
						}
					}
				},
				{
					"name": "Delete Peppol Identifier",
					"value": "Delete Peppol Identifier",
					"action": "Delete PeppolIdentifier",
					"description": "Delete a PeppolIdentifier.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/peppol_identifiers/{{$parameter[\"superscheme\"]}}/{{$parameter[\"scheme\"]}}/{{$parameter[\"identifier\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /legal_entities/{legal_entity_id}/peppol_identifiers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Create Peppol Identifier"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity for which to create the PeppolIdentifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Create Peppol Identifier"
					]
				}
			}
		},
		{
			"displayName": "Corppass",
			"name": "corppass",
			"type": "string",
			"default": {
				"enabled": true,
				"simulate_corppass": false
			},
			"routing": {
				"send": {
					"property": "corppass",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Create Peppol Identifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identifier",
			"name": "identifier",
			"type": "string",
			"default": "",
			"description": "The identifier.",
			"routing": {
				"send": {
					"property": "identifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Create Peppol Identifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scheme",
			"name": "scheme",
			"type": "string",
			"default": "",
			"description": "The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.",
			"routing": {
				"send": {
					"property": "scheme",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Create Peppol Identifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Superscheme",
			"name": "superscheme",
			"type": "string",
			"default": "",
			"description": "The superscheme of the identifier. Should always be \"iso6523-actorid-upis\".",
			"routing": {
				"send": {
					"property": "superscheme",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Create Peppol Identifier"
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
						"Peppol Identifiers"
					],
					"operation": [
						"Create Peppol Identifier"
					]
				}
			}
		},
		{
			"displayName": "DELETE /legal_entities/{legal_entity_id}/peppol_identifiers/{superscheme}/{scheme}/{identifier}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Delete Peppol Identifier"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity this PeppolIdentifier belongs to",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Delete Peppol Identifier"
					]
				}
			}
		},
		{
			"displayName": "Superscheme",
			"name": "superscheme",
			"required": true,
			"description": "The superscheme of the identifier. Should always be \"iso6523-actorid-upis\".",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Delete Peppol Identifier"
					]
				}
			}
		},
		{
			"displayName": "Scheme",
			"name": "scheme",
			"required": true,
			"description": "PEPPOL identifier scheme id, e.g. \"DE:VAT\". For a full list see <<_receiver_identifiers_list>>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Delete Peppol Identifier"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"required": true,
			"description": "PEPPOL identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Peppol Identifiers"
					],
					"operation": [
						"Delete Peppol Identifier"
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
						"Peppol Identifiers"
					],
					"operation": [
						"Delete Peppol Identifier"
					]
				}
			}
		},
];
