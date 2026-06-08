import type { INodeProperties } from 'n8n-workflow';

export const purchaseInvoicesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					]
				}
			},
			"options": [
				{
					"name": "Get Invoice Json",
					"value": "Get Invoice Json",
					"action": "Get Purchase invoice data as JSON",
					"description": "Get a specific PurchaseInvoice, in JSON format.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/purchase_invoices/{{$parameter[\"guid\"]}}"
						}
					}
				},
				{
					"name": "Get Invoice Ubl",
					"value": "Get Invoice Ubl",
					"action": "Get Purchase invoice data in a selectable format",
					"description": "Get a specific PurchaseInvoice.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/purchase_invoices/{{$parameter[\"guid\"]}}/{{$parameter[\"packaging\"]}}"
						}
					}
				},
				{
					"name": "Get Invoice Ubl Versioned",
					"value": "Get Invoice Ubl Versioned",
					"action": "Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version",
					"description": "Get a specific PurchaseInvoice in UBL format",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/purchase_invoices/{{$parameter[\"guid\"]}}/{{$parameter[\"packaging\"]}}/{{$parameter[\"package_version\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /purchase_invoices/{guid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Json"
					]
				}
			}
		},
		{
			"displayName": "Guid",
			"name": "guid",
			"required": true,
			"description": "The guid of the purchase invoice, from the webhook.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Json"
					]
				}
			}
		},
		{
			"displayName": "Pmv",
			"name": "pmv",
			"description": "The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.\n\nVersion 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower 'g' in 'bankgiro'). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean.",
			"default": "1.0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pmv",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Json"
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
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Json"
					]
				}
			}
		},
		{
			"displayName": "GET /purchase_invoices/{guid}/{packaging}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Ubl"
					]
				}
			}
		},
		{
			"displayName": "Guid",
			"name": "guid",
			"required": true,
			"description": "purchase invoice guid",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Ubl"
					]
				}
			}
		},
		{
			"displayName": "Packaging",
			"name": "packaging",
			"required": true,
			"description": "How to package the purchase invoice.",
			"default": "json",
			"type": "options",
			"options": [
				{
					"name": "Json",
					"value": "json"
				},
				{
					"name": "Ubl",
					"value": "ubl"
				},
				{
					"name": "Original",
					"value": "original"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Ubl"
					]
				}
			}
		},
		{
			"displayName": "Pmv",
			"name": "pmv",
			"description": "The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.\n\nVersion 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower 'g' in 'bankgiro'). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean.",
			"default": "1.0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pmv",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Ubl"
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
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Ubl"
					]
				}
			}
		},
		{
			"displayName": "GET /purchase_invoices/{guid}/{packaging}/{package_version}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Ubl Versioned"
					]
				}
			}
		},
		{
			"displayName": "Guid",
			"name": "guid",
			"required": true,
			"description": "purchase invoice guid",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Ubl Versioned"
					]
				}
			}
		},
		{
			"displayName": "Packaging",
			"name": "packaging",
			"required": true,
			"description": "How to package the purchase invoice.",
			"default": "ubl",
			"type": "options",
			"options": [
				{
					"name": "Ubl",
					"value": "ubl"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Ubl Versioned"
					]
				}
			}
		},
		{
			"displayName": "Package Version",
			"name": "package_version",
			"required": true,
			"description": "The version of the package.",
			"default": "si11",
			"type": "options",
			"options": [
				{
					"name": "Si 11",
					"value": "si11"
				},
				{
					"name": "Si 12",
					"value": "si12"
				},
				{
					"name": "Si 20",
					"value": "si20"
				},
				{
					"name": "Aunz",
					"value": "aunz"
				},
				{
					"name": "Sg",
					"value": "sg"
				},
				{
					"name": "Jp",
					"value": "jp"
				},
				{
					"name": "En 16931",
					"value": "en16931"
				},
				{
					"name": "Original",
					"value": "original"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Ubl Versioned"
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
						"Purchase Invoices"
					],
					"operation": [
						"Get Invoice Ubl Versioned"
					]
				}
			}
		},
];
