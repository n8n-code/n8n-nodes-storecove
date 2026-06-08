import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { invoiceSubmissionsDescription } from './resources/invoice-submissions';
import { documentSubmissionsDescription } from './resources/document-submissions';
import { legalEntitiesDescription } from './resources/legal-entities';
import { peppolIdentifiersDescription } from './resources/peppol-identifiers';
import { administrationsDescription } from './resources/administrations';
import { receivedDocumentsDescription } from './resources/received-documents';
import { additionalTaxIdentifiersDescription } from './resources/additional-tax-identifiers';
import { purchaseInvoicesDescription } from './resources/purchase-invoices';
import { webhookInstancesDescription } from './resources/webhook-instances';
import { discoveryDescription } from './resources/discovery';

export class Storecove implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'storecove',
		name: 'N8nDevStorecove',
		icon: { light: 'file:./storecove.png', dark: 'file:./storecove.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Storecove API',
		defaults: { name: 'storecove' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevStorecoveApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Invoice Submissions",
					"value": "Invoice Submissions",
					"description": ""
				},
				{
					"name": "Document Submissions",
					"value": "Document Submissions",
					"description": ""
				},
				{
					"name": "Legal Entities",
					"value": "Legal Entities",
					"description": ""
				},
				{
					"name": "Peppol Identifiers",
					"value": "Peppol Identifiers",
					"description": ""
				},
				{
					"name": "Administrations",
					"value": "Administrations",
					"description": ""
				},
				{
					"name": "Received Documents",
					"value": "Received Documents",
					"description": ""
				},
				{
					"name": "Additional Tax Identifiers",
					"value": "Additional Tax Identifiers",
					"description": ""
				},
				{
					"name": "Purchase Invoices",
					"value": "Purchase Invoices",
					"description": ""
				},
				{
					"name": "Webhook Instances",
					"value": "Webhook Instances",
					"description": ""
				},
				{
					"name": "Discovery",
					"value": "Discovery",
					"description": ""
				}
			],
			"default": ""
		},
		...invoiceSubmissionsDescription,
		...documentSubmissionsDescription,
		...legalEntitiesDescription,
		...peppolIdentifiersDescription,
		...administrationsDescription,
		...receivedDocumentsDescription,
		...additionalTaxIdentifiersDescription,
		...purchaseInvoicesDescription,
		...webhookInstancesDescription,
		...discoveryDescription
		],
	};
}
