import type { INodeProperties } from 'n8n-workflow';

export const administrationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					]
				}
			},
			"options": [
				{
					"name": "Create Administration",
					"value": "Create Administration",
					"action": "Create a new Administration",
					"description": "Deprecated. Create a new Administration. An Administration is an email destination for purchase invoices.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/administrations"
						}
					}
				},
				{
					"name": "Delete Administration",
					"value": "Delete Administration",
					"action": "Delete Administration",
					"description": "Deprecated. Delete an Administration",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/administrations/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Administration",
					"value": "Get Administration",
					"action": "Get Administration",
					"description": "Deprecated. Get an Administration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/administrations/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Administration",
					"value": "Update Administration",
					"action": "Update Administration",
					"description": "Deprecated. Update an Administration",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/legal_entities/{{$parameter[\"legal_entity_id\"]}}/administrations/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /legal_entities/{legal_entity_id}/administrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Create Administration"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity for which to create the Administration",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Create Administration"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email address to send the received document to",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Create Administration"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"type": "number",
			"default": 0,
			"description": "The LegalEntity the Administration belongs to.",
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
						"Administrations"
					],
					"operation": [
						"Create Administration"
					]
				}
			}
		},
		{
			"displayName": "Package Version",
			"name": "package_version",
			"type": "options",
			"default": "peppol_bis_v3",
			"description": "The version of the package.",
			"options": [
				{
					"name": "Peppol Bis V 3",
					"value": "peppol_bis_v3"
				},
				{
					"name": "Aunz",
					"value": "aunz"
				},
				{
					"name": "Sg",
					"value": "sg"
				}
			],
			"routing": {
				"send": {
					"property": "package_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Create Administration"
					]
				}
			}
		},
		{
			"displayName": "Packaging",
			"name": "packaging",
			"type": "options",
			"default": "ubl",
			"description": "How to package the purchase invoice.",
			"options": [
				{
					"name": "Ubl",
					"value": "ubl"
				}
			],
			"routing": {
				"send": {
					"property": "packaging",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Create Administration"
					]
				}
			}
		},
		{
			"displayName": "Sender Email Identity Id",
			"name": "sender_email_identity_id",
			"type": "number",
			"default": 0,
			"description": "The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used",
			"routing": {
				"send": {
					"property": "sender_email_identity_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Create Administration"
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
						"Administrations"
					],
					"operation": [
						"Create Administration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /legal_entities/{legal_entity_id}/administrations/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Delete Administration"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity the Administration belongs to",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Delete Administration"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the Administration",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Delete Administration"
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
						"Administrations"
					],
					"operation": [
						"Delete Administration"
					]
				}
			}
		},
		{
			"displayName": "GET /legal_entities/{legal_entity_id}/administrations/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Get Administration"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity the Administration belongs to",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Get Administration"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the Administration",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Get Administration"
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
						"Administrations"
					],
					"operation": [
						"Get Administration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /legal_entities/{legal_entity_id}/administrations/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Update Administration"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legal_entity_id",
			"required": true,
			"description": "The id of the LegalEntity the Administration belongs to",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Update Administration"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The id of the Administration to be updated",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Update Administration"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email address to send the received document to",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Update Administration"
					]
				}
			}
		},
		{
			"displayName": "Package Version",
			"name": "package_version",
			"type": "options",
			"default": "peppol_bis_v3",
			"description": "The version of the package.",
			"options": [
				{
					"name": "Peppol Bis V 3",
					"value": "peppol_bis_v3"
				},
				{
					"name": "Aunz",
					"value": "aunz"
				},
				{
					"name": "Sg",
					"value": "sg"
				}
			],
			"routing": {
				"send": {
					"property": "package_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Update Administration"
					]
				}
			}
		},
		{
			"displayName": "Packaging",
			"name": "packaging",
			"type": "options",
			"default": "ubl",
			"description": "How to package the purchase invoice.",
			"options": [
				{
					"name": "Ubl",
					"value": "ubl"
				}
			],
			"routing": {
				"send": {
					"property": "packaging",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Update Administration"
					]
				}
			}
		},
		{
			"displayName": "Sender Email Identity Id",
			"name": "sender_email_identity_id",
			"type": "number",
			"default": 0,
			"description": "The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used",
			"routing": {
				"send": {
					"property": "sender_email_identity_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Administrations"
					],
					"operation": [
						"Update Administration"
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
						"Administrations"
					],
					"operation": [
						"Update Administration"
					]
				}
			}
		},
];
