import type { INodeProperties } from 'n8n-workflow';

export const discoveryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Discovery"
					]
				}
			},
			"options": [
				{
					"name": "Discovery Exists",
					"value": "Discovery Exists",
					"action": "Discover Network Participant Existence",
					"description": "Discover if a network participant exists.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/discovery/exists"
						}
					}
				},
				{
					"name": "Discovery Identifiers",
					"value": "Discovery Identifiers",
					"action": "Discover Country Identifiers ** EXPERIMENTAL",
					"description": "Discover the identifiers used in each country, for routing, for legal identification as well as for tax identification purposes. We are currently testing this endpoint with selected Customers. If you would like to participate, please contact us.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/discovery/identifiers"
						}
					}
				},
				{
					"name": "Discovery Receives",
					"value": "Discovery Receives",
					"action": "Disover Network Participant",
					"description": "Discover a network participant and capabilities.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/discovery/receives"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /discovery/exists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Discovery"
					],
					"operation": [
						"Discovery Exists"
					]
				}
			}
		},
		{
			"displayName": "Document Types",
			"name": "documentTypes",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of document types to discover. The default is '[\"invoice\", \"creditnote\"]'. This is ignored when only checking existence.",
			"routing": {
				"send": {
					"property": "documentTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discovery"
					],
					"operation": [
						"Discovery Exists"
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
			"description": "The actual identifier.",
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
						"Discovery"
					],
					"operation": [
						"Discovery Exists"
					]
				}
			}
		},
		{
			"displayName": "Meta Scheme",
			"name": "metaScheme",
			"type": "string",
			"default": "iso6523-actorid-upis",
			"description": "The meta scheme of the identifier. For Peppol this is always 'iso6523-actorid-upis'.",
			"routing": {
				"send": {
					"property": "metaScheme",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discovery"
					],
					"operation": [
						"Discovery Exists"
					]
				}
			}
		},
		{
			"displayName": "Network",
			"name": "network",
			"type": "string",
			"default": "peppol",
			"description": "The network to check. Currently only 'peppol' is supported.",
			"routing": {
				"send": {
					"property": "network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discovery"
					],
					"operation": [
						"Discovery Exists"
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
						"Discovery"
					],
					"operation": [
						"Discovery Exists"
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
						"Discovery"
					],
					"operation": [
						"Discovery Exists"
					]
				}
			}
		},
		{
			"displayName": "GET /discovery/identifiers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Discovery"
					],
					"operation": [
						"Discovery Identifiers"
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
						"Discovery"
					],
					"operation": [
						"Discovery Identifiers"
					]
				}
			}
		},
		{
			"displayName": "POST /discovery/receives",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Discovery"
					],
					"operation": [
						"Discovery Receives"
					]
				}
			}
		},
		{
			"displayName": "Document Types",
			"name": "documentTypes",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of document types to discover. The default is '[\"invoice\", \"creditnote\"]'. This is ignored when only checking existence.",
			"routing": {
				"send": {
					"property": "documentTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discovery"
					],
					"operation": [
						"Discovery Receives"
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
			"description": "The actual identifier.",
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
						"Discovery"
					],
					"operation": [
						"Discovery Receives"
					]
				}
			}
		},
		{
			"displayName": "Meta Scheme",
			"name": "metaScheme",
			"type": "string",
			"default": "iso6523-actorid-upis",
			"description": "The meta scheme of the identifier. For Peppol this is always 'iso6523-actorid-upis'.",
			"routing": {
				"send": {
					"property": "metaScheme",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discovery"
					],
					"operation": [
						"Discovery Receives"
					]
				}
			}
		},
		{
			"displayName": "Network",
			"name": "network",
			"type": "string",
			"default": "peppol",
			"description": "The network to check. Currently only 'peppol' is supported.",
			"routing": {
				"send": {
					"property": "network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discovery"
					],
					"operation": [
						"Discovery Receives"
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
						"Discovery"
					],
					"operation": [
						"Discovery Receives"
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
						"Discovery"
					],
					"operation": [
						"Discovery Receives"
					]
				}
			}
		},
];
