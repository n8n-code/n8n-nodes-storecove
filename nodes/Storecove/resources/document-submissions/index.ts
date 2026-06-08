import type { INodeProperties } from 'n8n-workflow';

export const documentSubmissionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Document Submissions"
					]
				}
			},
			"options": [
				{
					"name": "Create Document Submission",
					"value": "Create Document Submission",
					"action": "Submit a new document.",
					"description": "Submit a document for delivery. This endpoint will replaces the /invoice_submissions endpoint which will soon be deprecated.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/document_submissions"
						}
					}
				},
				{
					"name": "Show Document Submission Evidence",
					"value": "Show Document Submission Evidence",
					"action": "Get DocumentSubmission Evidence",
					"description": "Get evidence for a DocumentSubmission by GUID with corresponding status",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/document_submissions/{{$parameter[\"guid\"]}}/evidence/{{$parameter[\"evidence_type\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /document_submissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Submissions"
					],
					"operation": [
						"Create Document Submission"
					]
				}
			}
		},
		{
			"displayName": "Attachments",
			"name": "attachments",
			"type": "json",
			"default": "[\n  {\n    \"primaryImage\": false\n  }\n]",
			"description": "DEPRECATED. Use the attachments array inside the 'document' property. An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.",
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
						"Document Submissions"
					],
					"operation": [
						"Create Document Submission"
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
						"Document Submissions"
					],
					"operation": [
						"Create Document Submission"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "json",
			"default": "{\n  \"invoice\": {\n    \"accountingCustomerParty\": {\n      \"party\": {\n        \"address\": {},\n        \"contact\": {}\n      },\n      \"publicIdentifiers\": [\n        {}\n      ]\n    },\n    \"accountingSupplierParty\": {\n      \"party\": {\n        \"contact\": {}\n      }\n    },\n    \"allowanceCharges\": [\n      {\n        \"reason\": \"Agreed settlement\",\n        \"tax\": {\n          \"country\": {}\n        },\n        \"taxesDutiesFees\": [\n          {}\n        ]\n      }\n    ],\n    \"attachments\": [\n      {\n        \"primaryImage\": false\n      }\n    ],\n    \"consumerTaxMode\": false,\n    \"delivery\": {\n      \"deliveryLocation\": {\n        \"address\": {}\n      },\n      \"deliveryParty\": {\n        \"party\": {}\n      },\n      \"quantity\": 1\n    },\n    \"documentCurrencyCode\": {},\n    \"invoiceLines\": [\n      {\n        \"additionalItemProperties\": [\n          {}\n        ],\n        \"allowanceCharges\": [\n          {}\n        ],\n        \"itemPrice\": 1,\n        \"quantity\": 1,\n        \"quantityUnitCode\": \"C62\",\n        \"references\": [\n          {}\n        ],\n        \"standardItemIdentificationSchemeAgencyId\": \"9\",\n        \"standardItemIdentificationSchemeId\": \"GTIN\",\n        \"tax\": {},\n        \"taxesDutiesFees\": [\n          {}\n        ]\n      }\n    ],\n    \"invoiceType\": \"380\",\n    \"issueReasons\": [\n      null\n    ],\n    \"paymentMeansArray\": [\n      {}\n    ],\n    \"paymentTerms\": {},\n    \"preferredInvoiceType\": \"prefer_autodetect\",\n    \"references\": [\n      {}\n    ],\n    \"selfBillingMode\": false,\n    \"taxSubtotals\": [\n      {\n        \"country\": {}\n      }\n    ],\n    \"taxSystem\": \"tax_line_amounts\",\n    \"taxesDutiesFees\": [\n      {}\n    ],\n    \"ublExtensions\": [\n      null\n    ],\n    \"vatReverseCharge\": false,\n    \"x2y\": \"b2b\"\n  },\n  \"invoiceResponse\": {\n    \"clarifications\": [\n      {}\n    ]\n  },\n  \"order\": {\n    \"allowanceCharges\": [\n      {}\n    ],\n    \"attachments\": [\n      {}\n    ],\n    \"delivery\": {},\n    \"deliveryTerms\": {},\n    \"documentCurrencyCode\": {},\n    \"orderLines\": [\n      {\n        \"additionalItemProperties\": [\n          {}\n        ],\n        \"allowPartialDelivery\": false,\n        \"allowanceCharges\": [\n          {}\n        ],\n        \"baseQuantity\": 1,\n        \"delivery\": {\n          \"deliveryLocation\": {}\n        },\n        \"itemPrice\": 1,\n        \"lotNumberIds\": [\n          null\n        ],\n        \"quantity\": 1,\n        \"quantityUnitCode\": \"C62\",\n        \"references\": [\n          {}\n        ],\n        \"taxesDutiesFees\": [\n          {}\n        ]\n      }\n    ],\n    \"orderType\": \"regular\",\n    \"paymentTerms\": {},\n    \"references\": [\n      {}\n    ],\n    \"sellerSupplierParty\": {\n      \"party\": {},\n      \"publicIdentifiers\": [\n        {}\n      ]\n    },\n    \"taxSystem\": \"tax_line_percentages\"\n  },\n  \"rawDocumentData\": {\n    \"parse\": true\n  }\n}",
			"description": "The document to send.",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document Submissions"
					],
					"operation": [
						"Create Document Submission"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Guid",
			"name": "idempotencyGuid",
			"type": "string",
			"default": "",
			"description": "A guid that you generated for this DocumentSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed and any subsequent ones will trigger an HTTP 422 Unprocessable Entity response.",
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
						"Document Submissions"
					],
					"operation": [
						"Create Document Submission"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity Id",
			"name": "legalEntityId",
			"type": "number",
			"default": 0,
			"description": "The id of the LegalEntity this document should be sent on behalf of. Either legalEntityId or receiveGuid is mandatory.",
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
						"Document Submissions"
					],
					"operation": [
						"Create Document Submission"
					]
				}
			}
		},
		{
			"displayName": "Receive Guid",
			"name": "receiveGuid",
			"type": "string",
			"default": "",
			"description": "The GUID that was in the received_document webhook. Either legalEntityId or receiveGuid is mandatory. This field is used for sending response documents, such as InvoiceReponse and OrderResponse.",
			"routing": {
				"send": {
					"property": "receiveGuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document Submissions"
					],
					"operation": [
						"Create Document Submission"
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
						"Document Submissions"
					],
					"operation": [
						"Create Document Submission"
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
						"Document Submissions"
					],
					"operation": [
						"Create Document Submission"
					]
				}
			}
		},
		{
			"displayName": "GET /document_submissions/{guid}/evidence/{evidence_type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Submissions"
					],
					"operation": [
						"Show Document Submission Evidence"
					]
				}
			}
		},
		{
			"displayName": "Guid",
			"name": "guid",
			"required": true,
			"description": "DocumentSubmission GUID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Submissions"
					],
					"operation": [
						"Show Document Submission Evidence"
					]
				}
			}
		},
		{
			"displayName": "Evidence Type",
			"name": "evidence_type",
			"required": true,
			"description": "Type of evidence requested",
			"default": "sending",
			"type": "options",
			"options": [
				{
					"name": "Sending",
					"value": "sending"
				},
				{
					"name": "Clearing",
					"value": "clearing"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Document Submissions"
					],
					"operation": [
						"Show Document Submission Evidence"
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
						"Document Submissions"
					],
					"operation": [
						"Show Document Submission Evidence"
					]
				}
			}
		},
];
