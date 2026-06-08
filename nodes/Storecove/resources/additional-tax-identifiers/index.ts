import type { INodeProperties } from 'n8n-workflow';

export const additionalTaxIdentifiersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					]
				}
			},
			"options": [
				{
					"name": "Create Additional Tax Identifier",
					"value": "Create Additional Tax Identifier",
					"action": "Create a new AdditionalTaxIdentifier",
					"description": "Create a new AdditionalTaxIdentifier. An AdditionalTaxIdentifier is a seconday tax identifier that is used inside the EU when sending invoices to consumers. In that case, the VAT of the receiving country is used and if the sender has a local VAT identifier, that is used to identifiy the sender, instead of the sender's origin country VAT number. To use these identifiers, use the invoice.consumerTaxMode = true property.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/additional_tax_identifiers"
						}
					}
				},
				{
					"name": "Delete Additional Tax Identifier",
					"value": "Delete Additional Tax Identifier",
					"action": "Delete AdditionalTaxIdentifier",
					"description": "Delete an AdditionalTaxIdentifier",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/additional_tax_identifiers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Additional Tax Identifier",
					"value": "Get Additional Tax Identifier",
					"action": "Get AdditionalTaxIdentifier",
					"description": "Get an AdditionalTaxIdentifier",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/additional_tax_identifiers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Additional Tax Identifier",
					"value": "Update Additional Tax Identifier",
					"action": "Update AdditionalTaxIdentifier",
					"description": "Update an AdditionalTaxIdentifier",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/additional_tax_identifiers/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /legal_entities/{legal_entity_id}/additional_tax_identifiers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Create Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity for which to create the AdditionalTaxIdentifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Create Additional Tax Identifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "",
			"description": "The ISO3166 country code to use this identifier for in case of consumerTaxMode.",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Create Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "County",
			"name": "county",
			"type": "string",
			"default": "",
			"description": "The county/state inside the country code to use this identifier for in case of consumerTaxMode. Leave empty to create an additional tax identifier for the entire country. For India, use the two last characters of ISO 3166-2:IN (https://en.wikipedia.org/wiki/States_and_union_territories_of_India).",
			"routing": {
				"send": {
					"property": "county",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Create Additional Tax Identifier"
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
						"Additional Tax Identifiers"
					],
					"operation": [
						"Create Additional Tax Identifier"
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
			"description": "The scheme of the identifier.",
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
						"Additional Tax Identifiers"
					],
					"operation": [
						"Create Additional Tax Identifier"
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
						"Additional Tax Identifiers"
					],
					"operation": [
						"Create Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Third Party Password",
			"name": "third_party_password",
			"type": "string",
			"default": "",
			"description": "The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.",
			"routing": {
				"send": {
					"property": "third_party_password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Create Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Third Party Username",
			"name": "third_party_username",
			"type": "string",
			"default": "",
			"description": "The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.",
			"routing": {
				"send": {
					"property": "third_party_username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Create Additional Tax Identifier"
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
						"Additional Tax Identifiers"
					],
					"operation": [
						"Create Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "DELETE /legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Delete Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity the AdditionalTaxIdentifier belongs to",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Delete Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the AdditionalTaxIdentifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Delete Additional Tax Identifier"
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
						"Additional Tax Identifiers"
					],
					"operation": [
						"Delete Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "GET /legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Get Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity the AdditionalTaxIdentifier belongs to",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Get Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the AdditionalTaxIdentifier",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Get Additional Tax Identifier"
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
						"Additional Tax Identifiers"
					],
					"operation": [
						"Get Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "PATCH /legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Update Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity the AdditionalTaxIdentifier belongs to",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Update Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the AdditionalTaxIdentifier to be updated",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Update Additional Tax Identifier"
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
						"Additional Tax Identifiers"
					],
					"operation": [
						"Update Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Third Party Password",
			"name": "third_party_password",
			"type": "string",
			"default": "",
			"description": "The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.",
			"routing": {
				"send": {
					"property": "third_party_password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Update Additional Tax Identifier"
					]
				}
			}
		},
		{
			"displayName": "Third Party Username",
			"name": "third_party_username",
			"type": "string",
			"default": "",
			"description": "The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.",
			"routing": {
				"send": {
					"property": "third_party_username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Additional Tax Identifiers"
					],
					"operation": [
						"Update Additional Tax Identifier"
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
						"Additional Tax Identifiers"
					],
					"operation": [
						"Update Additional Tax Identifier"
					]
				}
			}
		},
];
