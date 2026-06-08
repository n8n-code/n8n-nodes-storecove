import type { INodeProperties } from 'n8n-workflow';

export const invoiceSubmissionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					]
				}
			},
			"options": [
				{
					"name": "Create Invoice Submission",
					"value": "Create Invoice Submission",
					"action": "Submit a new invoice",
					"description": "DEPRECATED. Use the new /document_submissions endpoint. Submit an invoice for delivery.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/invoice_submissions"
						}
					}
				},
				{
					"name": "Preflight Invoice Recipient",
					"value": "Preflight Invoice Recipient",
					"action": "DEPRECATED. Preflight an invoice recipient",
					"description": "Deprecated. Use the new /discovery endpoint. Check whether Storecove can deliver an invoice for a list of ids.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/invoice_submissions/preflight"
						}
					}
				},
				{
					"name": "Show Invoice Submission Evidence",
					"value": "Show Invoice Submission Evidence",
					"action": "DEPRECATED. Get InvoiceSubmission Evidence",
					"description": "Deprecated. Use the new /document_submissions/{guid}/evidence endpoint. Get evidence for an InvoiceSubmission by GUID with corresponding status",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/invoice_submissions/{{$parameter[\"guid\"]}}/evidence"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /invoice_submissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Attachments",
			"name": "attachments",
			"type": "json",
			"default": "[\n  {\n    \"primaryImage\": false\n  }\n]",
			"description": "An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.",
			"routing": {
				"send": {
					"property": "attachments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Create Primary Image",
			"name": "createPrimaryImage",
			"type": "boolean",
			"default": true,
			"description": "DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from December 1st 2022, the default is false. For customers who started before that, the default is true.",
			"routing": {
				"send": {
					"property": "createPrimaryImage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "",
			"description": "DEPRECATED. Use attachments.",
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
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Document Url",
			"name": "documentUrl",
			"type": "string",
			"default": "",
			"description": "DEPRECATED. Use attachments.",
			"routing": {
				"send": {
					"property": "documentUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Guid",
			"name": "idempotencyGuid",
			"type": "string",
			"default": "",
			"description": "A guid that you generated for this InvoiceSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed.",
			"routing": {
				"send": {
					"property": "idempotencyGuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Invoice",
			"name": "invoice",
			"type": "json",
			"default": "{\n  \"accountingCustomerParty\": {\n    \"party\": {\n      \"address\": {},\n      \"contact\": {}\n    },\n    \"publicIdentifiers\": [\n      {}\n    ]\n  },\n  \"accountingSupplierParty\": {\n    \"party\": {\n      \"contact\": {}\n    }\n  },\n  \"allowanceCharges\": [\n    {\n      \"reason\": \"Agreed settlement\",\n      \"tax\": {\n        \"country\": {}\n      },\n      \"taxesDutiesFees\": [\n        {}\n      ]\n    }\n  ],\n  \"attachments\": [\n    {\n      \"primaryImage\": false\n    }\n  ],\n  \"consumerTaxMode\": false,\n  \"delivery\": {\n    \"deliveryLocation\": {\n      \"address\": {}\n    },\n    \"deliveryParty\": {\n      \"party\": {}\n    },\n    \"quantity\": 1\n  },\n  \"documentCurrencyCode\": {},\n  \"invoiceLines\": [\n    {\n      \"additionalItemProperties\": [\n        {}\n      ],\n      \"allowanceCharges\": [\n        {}\n      ],\n      \"itemPrice\": 1,\n      \"quantity\": 1,\n      \"quantityUnitCode\": \"C62\",\n      \"references\": [\n        {}\n      ],\n      \"standardItemIdentificationSchemeAgencyId\": \"9\",\n      \"standardItemIdentificationSchemeId\": \"GTIN\",\n      \"tax\": {},\n      \"taxesDutiesFees\": [\n        {}\n      ]\n    }\n  ],\n  \"invoiceType\": \"380\",\n  \"issueReasons\": [\n    null\n  ],\n  \"paymentMeansArray\": [\n    {}\n  ],\n  \"paymentTerms\": {},\n  \"preferredInvoiceType\": \"prefer_autodetect\",\n  \"references\": [\n    {}\n  ],\n  \"selfBillingMode\": false,\n  \"taxSubtotals\": [\n    {\n      \"country\": {}\n    }\n  ],\n  \"taxSystem\": \"tax_line_amounts\",\n  \"taxesDutiesFees\": [\n    {}\n  ],\n  \"ublExtensions\": [\n    null\n  ],\n  \"vatReverseCharge\": false,\n  \"x2y\": \"b2b\"\n}",
			"description": "The invoice to send. Provide either invoice, or invoiceData, but not both.",
			"routing": {
				"send": {
					"property": "invoice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Invoice Data",
			"name": "invoiceData",
			"type": "json",
			"default": "{}",
			"description": "The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.",
			"routing": {
				"send": {
					"property": "invoiceData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Invoice Recipient",
			"name": "invoiceRecipient",
			"type": "json",
			"default": "{\n  \"emails\": [\n    null\n  ],\n  \"publicIdentifiers\": [\n    {}\n  ]\n}",
			"description": "The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.",
			"routing": {
				"send": {
					"property": "invoiceRecipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legalEntityId",
			"type": "number",
			"default": 0,
			"description": "The id of the LegalEntity this invoice should be sent for.",
			"routing": {
				"send": {
					"property": "legalEntityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Legal Supplier Id",
			"name": "legalSupplierId",
			"type": "number",
			"default": 0,
			"description": "DEPRECATED. Use legalEntityId",
			"routing": {
				"send": {
					"property": "legalSupplierId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "direct",
			"description": "DEPRECATED.",
			"options": [
				{
					"name": "Direct",
					"value": "direct"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Routing",
			"name": "routing",
			"type": "json",
			"default": "{\n  \"clearWithoutSending\": false,\n  \"eIdentifiers\": [\n    {}\n  ],\n  \"emails\": [\n    null\n  ]\n}",
			"description": "The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.",
			"routing": {
				"send": {
					"property": "routing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "Supplier Id",
			"name": "supplierId",
			"type": "number",
			"default": 0,
			"description": "DEPRECATED.",
			"routing": {
				"send": {
					"property": "supplierId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
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
						"Invoice Submissions"
					],
					"operation": [
						"Create Invoice Submission"
					]
				}
			}
		},
		{
			"displayName": "POST /invoice_submissions/preflight",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Preflight Invoice Recipient"
					]
				}
			}
		},
		{
			"displayName": "Public Identifiers",
			"name": "publicIdentifiers",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "A list of public identifiers that uniquely identify this customer.",
			"routing": {
				"send": {
					"property": "publicIdentifiers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Preflight Invoice Recipient"
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
						"Invoice Submissions"
					],
					"operation": [
						"Preflight Invoice Recipient"
					]
				}
			}
		},
		{
			"displayName": "GET /invoice_submissions/{guid}/evidence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Show Invoice Submission Evidence"
					]
				}
			}
		},
		{
			"displayName": "Guid",
			"name": "guid",
			"required": true,
			"description": "InvoiceSubmission GUID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoice Submissions"
					],
					"operation": [
						"Show Invoice Submission Evidence"
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
						"Invoice Submissions"
					],
					"operation": [
						"Show Invoice Submission Evidence"
					]
				}
			}
		},
];
