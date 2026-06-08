import type { INodeProperties } from 'n8n-workflow';

export const webhookInstancesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Instances"
					]
				}
			},
			"options": [
				{
					"name": "Get Webhook Instances",
					"value": "Get Webhook Instances",
					"action": "GET a WebhookInstance",
					"description": "GET a WebhookInstance from the queue. After processing it successfully, DELETE it and GET the next one. When a 204 is received, the queue is empty and the polling process can sleep for a while.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/webhook_instances/"
						}
					}
				},
				{
					"name": "Delete Webhook Instance",
					"value": "Delete Webhook Instance",
					"action": "DELETE a WebhookInstance",
					"description": "DELETE a specific WebhookInstance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/webhook_instances/{{$parameter[\"guid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /webhook_instances/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Instances"
					],
					"operation": [
						"Get Webhook Instances"
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
						"Webhook Instances"
					],
					"operation": [
						"Get Webhook Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /webhook_instances/{guid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Instances"
					],
					"operation": [
						"Delete Webhook Instance"
					]
				}
			}
		},
		{
			"displayName": "Guid",
			"name": "guid",
			"required": true,
			"description": "WebhookInstance guid",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Instances"
					],
					"operation": [
						"Delete Webhook Instance"
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
						"Webhook Instances"
					],
					"operation": [
						"Delete Webhook Instance"
					]
				}
			}
		},
];
