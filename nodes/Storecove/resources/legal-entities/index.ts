import type { INodeProperties } from 'n8n-workflow';

export const legalEntitiesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					]
				}
			},
			"options": [
				{
					"name": "Create Legal Entity",
					"value": "Create Legal Entity",
					"action": "Create a new LegalEntity",
					"description": "Create a new LegalEntity.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/legal_entities"
						}
					}
				},
				{
					"name": "Delete Legal Entity",
					"value": "Delete Legal Entity",
					"action": "Delete LegalEntity",
					"description": "Delete a specific LegalEntity.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/legal_entities/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Legal Entity",
					"value": "Get Legal Entity",
					"action": "Get LegalEntity",
					"description": "Get a specific LegalEntity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/legal_entities/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Legal Entity",
					"value": "Update Legal Entity",
					"action": "Update LegalEntity",
					"description": "Update a specific LegalEntity.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/legal_entities/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /legal_entities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Advertisements",
			"name": "advertisements",
			"type": "json",
			"default": "[\n  \"invoice\"\n]",
			"description": "A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents.",
			"routing": {
				"send": {
					"property": "advertisements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "",
			"description": "The city.",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Country",
			"name": "country",
			"type": "options",
			"default": "AD",
			"description": "An ISO 3166-1 alpha-2 country code.",
			"options": [
				{
					"name": "AD",
					"value": "AD"
				},
				{
					"name": "AE",
					"value": "AE"
				},
				{
					"name": "AF",
					"value": "AF"
				},
				{
					"name": "AG",
					"value": "AG"
				},
				{
					"name": "AI",
					"value": "AI"
				},
				{
					"name": "AL",
					"value": "AL"
				},
				{
					"name": "AM",
					"value": "AM"
				},
				{
					"name": "AO",
					"value": "AO"
				},
				{
					"name": "AQ",
					"value": "AQ"
				},
				{
					"name": "AR",
					"value": "AR"
				},
				{
					"name": "AS",
					"value": "AS"
				},
				{
					"name": "AT",
					"value": "AT"
				},
				{
					"name": "AU",
					"value": "AU"
				},
				{
					"name": "AW",
					"value": "AW"
				},
				{
					"name": "AX",
					"value": "AX"
				},
				{
					"name": "AZ",
					"value": "AZ"
				},
				{
					"name": "BA",
					"value": "BA"
				},
				{
					"name": "BB",
					"value": "BB"
				},
				{
					"name": "BD",
					"value": "BD"
				},
				{
					"name": "BE",
					"value": "BE"
				},
				{
					"name": "BF",
					"value": "BF"
				},
				{
					"name": "BG",
					"value": "BG"
				},
				{
					"name": "BH",
					"value": "BH"
				},
				{
					"name": "BI",
					"value": "BI"
				},
				{
					"name": "BJ",
					"value": "BJ"
				},
				{
					"name": "BL",
					"value": "BL"
				},
				{
					"name": "BM",
					"value": "BM"
				},
				{
					"name": "BN",
					"value": "BN"
				},
				{
					"name": "BO",
					"value": "BO"
				},
				{
					"name": "BQ",
					"value": "BQ"
				},
				{
					"name": "BR",
					"value": "BR"
				},
				{
					"name": "BS",
					"value": "BS"
				},
				{
					"name": "BT",
					"value": "BT"
				},
				{
					"name": "BV",
					"value": "BV"
				},
				{
					"name": "BW",
					"value": "BW"
				},
				{
					"name": "BY",
					"value": "BY"
				},
				{
					"name": "BZ",
					"value": "BZ"
				},
				{
					"name": "CA",
					"value": "CA"
				},
				{
					"name": "CC",
					"value": "CC"
				},
				{
					"name": "CD",
					"value": "CD"
				},
				{
					"name": "CF",
					"value": "CF"
				},
				{
					"name": "CG",
					"value": "CG"
				},
				{
					"name": "CH",
					"value": "CH"
				},
				{
					"name": "CI",
					"value": "CI"
				},
				{
					"name": "CK",
					"value": "CK"
				},
				{
					"name": "CL",
					"value": "CL"
				},
				{
					"name": "CM",
					"value": "CM"
				},
				{
					"name": "CN",
					"value": "CN"
				},
				{
					"name": "CO",
					"value": "CO"
				},
				{
					"name": "CR",
					"value": "CR"
				},
				{
					"name": "CU",
					"value": "CU"
				},
				{
					"name": "CV",
					"value": "CV"
				},
				{
					"name": "CW",
					"value": "CW"
				},
				{
					"name": "CX",
					"value": "CX"
				},
				{
					"name": "CY",
					"value": "CY"
				},
				{
					"name": "CZ",
					"value": "CZ"
				},
				{
					"name": "DE",
					"value": "DE"
				},
				{
					"name": "DJ",
					"value": "DJ"
				},
				{
					"name": "DK",
					"value": "DK"
				},
				{
					"name": "DM",
					"value": "DM"
				},
				{
					"name": "DO",
					"value": "DO"
				},
				{
					"name": "DZ",
					"value": "DZ"
				},
				{
					"name": "EC",
					"value": "EC"
				},
				{
					"name": "EE",
					"value": "EE"
				},
				{
					"name": "EG",
					"value": "EG"
				},
				{
					"name": "EH",
					"value": "EH"
				},
				{
					"name": "ER",
					"value": "ER"
				},
				{
					"name": "ES",
					"value": "ES"
				},
				{
					"name": "ET",
					"value": "ET"
				},
				{
					"name": "FI",
					"value": "FI"
				},
				{
					"name": "FJ",
					"value": "FJ"
				},
				{
					"name": "FK",
					"value": "FK"
				},
				{
					"name": "FM",
					"value": "FM"
				},
				{
					"name": "FO",
					"value": "FO"
				},
				{
					"name": "FR",
					"value": "FR"
				},
				{
					"name": "GA",
					"value": "GA"
				},
				{
					"name": "GB",
					"value": "GB"
				},
				{
					"name": "GD",
					"value": "GD"
				},
				{
					"name": "GE",
					"value": "GE"
				},
				{
					"name": "GF",
					"value": "GF"
				},
				{
					"name": "GG",
					"value": "GG"
				},
				{
					"name": "GH",
					"value": "GH"
				},
				{
					"name": "GI",
					"value": "GI"
				},
				{
					"name": "GL",
					"value": "GL"
				},
				{
					"name": "GM",
					"value": "GM"
				},
				{
					"name": "GN",
					"value": "GN"
				},
				{
					"name": "GP",
					"value": "GP"
				},
				{
					"name": "GQ",
					"value": "GQ"
				},
				{
					"name": "GR",
					"value": "GR"
				},
				{
					"name": "GS",
					"value": "GS"
				},
				{
					"name": "GT",
					"value": "GT"
				},
				{
					"name": "GU",
					"value": "GU"
				},
				{
					"name": "GW",
					"value": "GW"
				},
				{
					"name": "GY",
					"value": "GY"
				},
				{
					"name": "HK",
					"value": "HK"
				},
				{
					"name": "HM",
					"value": "HM"
				},
				{
					"name": "HN",
					"value": "HN"
				},
				{
					"name": "HR",
					"value": "HR"
				},
				{
					"name": "HT",
					"value": "HT"
				},
				{
					"name": "HU",
					"value": "HU"
				},
				{
					"name": "ID",
					"value": "ID"
				},
				{
					"name": "IE",
					"value": "IE"
				},
				{
					"name": "IL",
					"value": "IL"
				},
				{
					"name": "IM",
					"value": "IM"
				},
				{
					"name": "IN",
					"value": "IN"
				},
				{
					"name": "IO",
					"value": "IO"
				},
				{
					"name": "IQ",
					"value": "IQ"
				},
				{
					"name": "IR",
					"value": "IR"
				},
				{
					"name": "IS",
					"value": "IS"
				},
				{
					"name": "IT",
					"value": "IT"
				},
				{
					"name": "JE",
					"value": "JE"
				},
				{
					"name": "JM",
					"value": "JM"
				},
				{
					"name": "JO",
					"value": "JO"
				},
				{
					"name": "JP",
					"value": "JP"
				},
				{
					"name": "KE",
					"value": "KE"
				},
				{
					"name": "KG",
					"value": "KG"
				},
				{
					"name": "KH",
					"value": "KH"
				},
				{
					"name": "KI",
					"value": "KI"
				},
				{
					"name": "KM",
					"value": "KM"
				},
				{
					"name": "KN",
					"value": "KN"
				},
				{
					"name": "KP",
					"value": "KP"
				},
				{
					"name": "KR",
					"value": "KR"
				},
				{
					"name": "KW",
					"value": "KW"
				},
				{
					"name": "KY",
					"value": "KY"
				},
				{
					"name": "KZ",
					"value": "KZ"
				},
				{
					"name": "LA",
					"value": "LA"
				},
				{
					"name": "LB",
					"value": "LB"
				},
				{
					"name": "LC",
					"value": "LC"
				},
				{
					"name": "LI",
					"value": "LI"
				},
				{
					"name": "LK",
					"value": "LK"
				},
				{
					"name": "LR",
					"value": "LR"
				},
				{
					"name": "LS",
					"value": "LS"
				},
				{
					"name": "LT",
					"value": "LT"
				},
				{
					"name": "LU",
					"value": "LU"
				},
				{
					"name": "LV",
					"value": "LV"
				},
				{
					"name": "LY",
					"value": "LY"
				},
				{
					"name": "MA",
					"value": "MA"
				},
				{
					"name": "MC",
					"value": "MC"
				},
				{
					"name": "MD",
					"value": "MD"
				},
				{
					"name": "ME",
					"value": "ME"
				},
				{
					"name": "MF",
					"value": "MF"
				},
				{
					"name": "MG",
					"value": "MG"
				},
				{
					"name": "MH",
					"value": "MH"
				},
				{
					"name": "MK",
					"value": "MK"
				},
				{
					"name": "ML",
					"value": "ML"
				},
				{
					"name": "MM",
					"value": "MM"
				},
				{
					"name": "MN",
					"value": "MN"
				},
				{
					"name": "MO",
					"value": "MO"
				},
				{
					"name": "MP",
					"value": "MP"
				},
				{
					"name": "MQ",
					"value": "MQ"
				},
				{
					"name": "MR",
					"value": "MR"
				},
				{
					"name": "MS",
					"value": "MS"
				},
				{
					"name": "MT",
					"value": "MT"
				},
				{
					"name": "MU",
					"value": "MU"
				},
				{
					"name": "MV",
					"value": "MV"
				},
				{
					"name": "MW",
					"value": "MW"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "MY",
					"value": "MY"
				},
				{
					"name": "MZ",
					"value": "MZ"
				},
				{
					"name": "NA",
					"value": "NA"
				},
				{
					"name": "NC",
					"value": "NC"
				},
				{
					"name": "NE",
					"value": "NE"
				},
				{
					"name": "NF",
					"value": "NF"
				},
				{
					"name": "NG",
					"value": "NG"
				},
				{
					"name": "NI",
					"value": "NI"
				},
				{
					"name": "NL",
					"value": "NL"
				},
				{
					"name": "NO",
					"value": "NO"
				},
				{
					"name": "NP",
					"value": "NP"
				},
				{
					"name": "NR",
					"value": "NR"
				},
				{
					"name": "NU",
					"value": "NU"
				},
				{
					"name": "NZ",
					"value": "NZ"
				},
				{
					"name": "OM",
					"value": "OM"
				},
				{
					"name": "PA",
					"value": "PA"
				},
				{
					"name": "PE",
					"value": "PE"
				},
				{
					"name": "PF",
					"value": "PF"
				},
				{
					"name": "PG",
					"value": "PG"
				},
				{
					"name": "PH",
					"value": "PH"
				},
				{
					"name": "PK",
					"value": "PK"
				},
				{
					"name": "PL",
					"value": "PL"
				},
				{
					"name": "PM",
					"value": "PM"
				},
				{
					"name": "PN",
					"value": "PN"
				},
				{
					"name": "PR",
					"value": "PR"
				},
				{
					"name": "PS",
					"value": "PS"
				},
				{
					"name": "PT",
					"value": "PT"
				},
				{
					"name": "PW",
					"value": "PW"
				},
				{
					"name": "PY",
					"value": "PY"
				},
				{
					"name": "QA",
					"value": "QA"
				},
				{
					"name": "RE",
					"value": "RE"
				},
				{
					"name": "RO",
					"value": "RO"
				},
				{
					"name": "RS",
					"value": "RS"
				},
				{
					"name": "RU",
					"value": "RU"
				},
				{
					"name": "RW",
					"value": "RW"
				},
				{
					"name": "SA",
					"value": "SA"
				},
				{
					"name": "SB",
					"value": "SB"
				},
				{
					"name": "SC",
					"value": "SC"
				},
				{
					"name": "SD",
					"value": "SD"
				},
				{
					"name": "SE",
					"value": "SE"
				},
				{
					"name": "SG",
					"value": "SG"
				},
				{
					"name": "SH",
					"value": "SH"
				},
				{
					"name": "SI",
					"value": "SI"
				},
				{
					"name": "SJ",
					"value": "SJ"
				},
				{
					"name": "SK",
					"value": "SK"
				},
				{
					"name": "SL",
					"value": "SL"
				},
				{
					"name": "SM",
					"value": "SM"
				},
				{
					"name": "SN",
					"value": "SN"
				},
				{
					"name": "SO",
					"value": "SO"
				},
				{
					"name": "SR",
					"value": "SR"
				},
				{
					"name": "SS",
					"value": "SS"
				},
				{
					"name": "ST",
					"value": "ST"
				},
				{
					"name": "SV",
					"value": "SV"
				},
				{
					"name": "SX",
					"value": "SX"
				},
				{
					"name": "SY",
					"value": "SY"
				},
				{
					"name": "SZ",
					"value": "SZ"
				},
				{
					"name": "TC",
					"value": "TC"
				},
				{
					"name": "TD",
					"value": "TD"
				},
				{
					"name": "TF",
					"value": "TF"
				},
				{
					"name": "TG",
					"value": "TG"
				},
				{
					"name": "TH",
					"value": "TH"
				},
				{
					"name": "TJ",
					"value": "TJ"
				},
				{
					"name": "TK",
					"value": "TK"
				},
				{
					"name": "TL",
					"value": "TL"
				},
				{
					"name": "TM",
					"value": "TM"
				},
				{
					"name": "TN",
					"value": "TN"
				},
				{
					"name": "TO",
					"value": "TO"
				},
				{
					"name": "TR",
					"value": "TR"
				},
				{
					"name": "TT",
					"value": "TT"
				},
				{
					"name": "TV",
					"value": "TV"
				},
				{
					"name": "TW",
					"value": "TW"
				},
				{
					"name": "TZ",
					"value": "TZ"
				},
				{
					"name": "UA",
					"value": "UA"
				},
				{
					"name": "UG",
					"value": "UG"
				},
				{
					"name": "UM",
					"value": "UM"
				},
				{
					"name": "US",
					"value": "US"
				},
				{
					"name": "UY",
					"value": "UY"
				},
				{
					"name": "UZ",
					"value": "UZ"
				},
				{
					"name": "VA",
					"value": "VA"
				},
				{
					"name": "VC",
					"value": "VC"
				},
				{
					"name": "VE",
					"value": "VE"
				},
				{
					"name": "VG",
					"value": "VG"
				},
				{
					"name": "VI",
					"value": "VI"
				},
				{
					"name": "VN",
					"value": "VN"
				},
				{
					"name": "VU",
					"value": "VU"
				},
				{
					"name": "WF",
					"value": "WF"
				},
				{
					"name": "WS",
					"value": "WS"
				},
				{
					"name": "XI",
					"value": "XI"
				},
				{
					"name": "YE",
					"value": "YE"
				},
				{
					"name": "YT",
					"value": "YT"
				},
				{
					"name": "ZA",
					"value": "ZA"
				},
				{
					"name": "ZM",
					"value": "ZM"
				},
				{
					"name": "ZW",
					"value": "ZW"
				}
			],
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
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "County",
			"name": "county",
			"type": "string",
			"default": "",
			"description": "County, if applicable",
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
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Line 1",
			"name": "line1",
			"type": "string",
			"default": "",
			"description": "The first address line.",
			"routing": {
				"send": {
					"property": "line1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Line 2",
			"name": "line2",
			"type": "string",
			"default": "",
			"description": "The second address line, if applicable",
			"routing": {
				"send": {
					"property": "line2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Party Name",
			"name": "party_name",
			"type": "string",
			"default": "",
			"description": "The name of the company.",
			"routing": {
				"send": {
					"property": "party_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Public",
			"name": "public",
			"type": "boolean",
			"default": true,
			"description": "Whether or not this LegalEntity is public. Public means it will be entered into the PEPPOL directory at https://directory.peppol.eu/",
			"routing": {
				"send": {
					"property": "public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Rea",
			"name": "rea",
			"type": "string",
			"default": {},
			"routing": {
				"send": {
					"property": "rea",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenant_id",
			"type": "string",
			"default": "",
			"description": "The id of the tenant, to be used in case of single-tenant solutions that share webhook URLs. This property will included in webhook events.",
			"routing": {
				"send": {
					"property": "tenant_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Third Party Password",
			"name": "third_party_password",
			"type": "string",
			"default": "",
			"description": "The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.",
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
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Third Party Username",
			"name": "third_party_username",
			"type": "string",
			"default": "",
			"description": "The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.",
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
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Zip",
			"name": "zip",
			"type": "string",
			"default": "",
			"description": "The zipcode.",
			"routing": {
				"send": {
					"property": "zip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
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
						"Legal Entities"
					],
					"operation": [
						"Create Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "DELETE /legal_entities/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Delete Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "legal_entity id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Delete Legal Entity"
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
						"Legal Entities"
					],
					"operation": [
						"Delete Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "GET /legal_entities/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Get Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "legal_entity id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Get Legal Entity"
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
						"Legal Entities"
					],
					"operation": [
						"Get Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "PATCH /legal_entities/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "legal_entity id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Advertisements",
			"name": "advertisements",
			"type": "json",
			"default": "[\n  \"invoice\"\n]",
			"description": "A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents.",
			"routing": {
				"send": {
					"property": "advertisements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "",
			"description": "The city.",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"type": "options",
			"default": "AD",
			"description": "An ISO 3166-1 alpha-2 country code.",
			"options": [
				{
					"name": "AD",
					"value": "AD"
				},
				{
					"name": "AE",
					"value": "AE"
				},
				{
					"name": "AF",
					"value": "AF"
				},
				{
					"name": "AG",
					"value": "AG"
				},
				{
					"name": "AI",
					"value": "AI"
				},
				{
					"name": "AL",
					"value": "AL"
				},
				{
					"name": "AM",
					"value": "AM"
				},
				{
					"name": "AO",
					"value": "AO"
				},
				{
					"name": "AQ",
					"value": "AQ"
				},
				{
					"name": "AR",
					"value": "AR"
				},
				{
					"name": "AS",
					"value": "AS"
				},
				{
					"name": "AT",
					"value": "AT"
				},
				{
					"name": "AU",
					"value": "AU"
				},
				{
					"name": "AW",
					"value": "AW"
				},
				{
					"name": "AX",
					"value": "AX"
				},
				{
					"name": "AZ",
					"value": "AZ"
				},
				{
					"name": "BA",
					"value": "BA"
				},
				{
					"name": "BB",
					"value": "BB"
				},
				{
					"name": "BD",
					"value": "BD"
				},
				{
					"name": "BE",
					"value": "BE"
				},
				{
					"name": "BF",
					"value": "BF"
				},
				{
					"name": "BG",
					"value": "BG"
				},
				{
					"name": "BH",
					"value": "BH"
				},
				{
					"name": "BI",
					"value": "BI"
				},
				{
					"name": "BJ",
					"value": "BJ"
				},
				{
					"name": "BL",
					"value": "BL"
				},
				{
					"name": "BM",
					"value": "BM"
				},
				{
					"name": "BN",
					"value": "BN"
				},
				{
					"name": "BO",
					"value": "BO"
				},
				{
					"name": "BQ",
					"value": "BQ"
				},
				{
					"name": "BR",
					"value": "BR"
				},
				{
					"name": "BS",
					"value": "BS"
				},
				{
					"name": "BT",
					"value": "BT"
				},
				{
					"name": "BV",
					"value": "BV"
				},
				{
					"name": "BW",
					"value": "BW"
				},
				{
					"name": "BY",
					"value": "BY"
				},
				{
					"name": "BZ",
					"value": "BZ"
				},
				{
					"name": "CA",
					"value": "CA"
				},
				{
					"name": "CC",
					"value": "CC"
				},
				{
					"name": "CD",
					"value": "CD"
				},
				{
					"name": "CF",
					"value": "CF"
				},
				{
					"name": "CG",
					"value": "CG"
				},
				{
					"name": "CH",
					"value": "CH"
				},
				{
					"name": "CI",
					"value": "CI"
				},
				{
					"name": "CK",
					"value": "CK"
				},
				{
					"name": "CL",
					"value": "CL"
				},
				{
					"name": "CM",
					"value": "CM"
				},
				{
					"name": "CN",
					"value": "CN"
				},
				{
					"name": "CO",
					"value": "CO"
				},
				{
					"name": "CR",
					"value": "CR"
				},
				{
					"name": "CU",
					"value": "CU"
				},
				{
					"name": "CV",
					"value": "CV"
				},
				{
					"name": "CW",
					"value": "CW"
				},
				{
					"name": "CX",
					"value": "CX"
				},
				{
					"name": "CY",
					"value": "CY"
				},
				{
					"name": "CZ",
					"value": "CZ"
				},
				{
					"name": "DE",
					"value": "DE"
				},
				{
					"name": "DJ",
					"value": "DJ"
				},
				{
					"name": "DK",
					"value": "DK"
				},
				{
					"name": "DM",
					"value": "DM"
				},
				{
					"name": "DO",
					"value": "DO"
				},
				{
					"name": "DZ",
					"value": "DZ"
				},
				{
					"name": "EC",
					"value": "EC"
				},
				{
					"name": "EE",
					"value": "EE"
				},
				{
					"name": "EG",
					"value": "EG"
				},
				{
					"name": "EH",
					"value": "EH"
				},
				{
					"name": "ER",
					"value": "ER"
				},
				{
					"name": "ES",
					"value": "ES"
				},
				{
					"name": "ET",
					"value": "ET"
				},
				{
					"name": "FI",
					"value": "FI"
				},
				{
					"name": "FJ",
					"value": "FJ"
				},
				{
					"name": "FK",
					"value": "FK"
				},
				{
					"name": "FM",
					"value": "FM"
				},
				{
					"name": "FO",
					"value": "FO"
				},
				{
					"name": "FR",
					"value": "FR"
				},
				{
					"name": "GA",
					"value": "GA"
				},
				{
					"name": "GB",
					"value": "GB"
				},
				{
					"name": "GD",
					"value": "GD"
				},
				{
					"name": "GE",
					"value": "GE"
				},
				{
					"name": "GF",
					"value": "GF"
				},
				{
					"name": "GG",
					"value": "GG"
				},
				{
					"name": "GH",
					"value": "GH"
				},
				{
					"name": "GI",
					"value": "GI"
				},
				{
					"name": "GL",
					"value": "GL"
				},
				{
					"name": "GM",
					"value": "GM"
				},
				{
					"name": "GN",
					"value": "GN"
				},
				{
					"name": "GP",
					"value": "GP"
				},
				{
					"name": "GQ",
					"value": "GQ"
				},
				{
					"name": "GR",
					"value": "GR"
				},
				{
					"name": "GS",
					"value": "GS"
				},
				{
					"name": "GT",
					"value": "GT"
				},
				{
					"name": "GU",
					"value": "GU"
				},
				{
					"name": "GW",
					"value": "GW"
				},
				{
					"name": "GY",
					"value": "GY"
				},
				{
					"name": "HK",
					"value": "HK"
				},
				{
					"name": "HM",
					"value": "HM"
				},
				{
					"name": "HN",
					"value": "HN"
				},
				{
					"name": "HR",
					"value": "HR"
				},
				{
					"name": "HT",
					"value": "HT"
				},
				{
					"name": "HU",
					"value": "HU"
				},
				{
					"name": "ID",
					"value": "ID"
				},
				{
					"name": "IE",
					"value": "IE"
				},
				{
					"name": "IL",
					"value": "IL"
				},
				{
					"name": "IM",
					"value": "IM"
				},
				{
					"name": "IN",
					"value": "IN"
				},
				{
					"name": "IO",
					"value": "IO"
				},
				{
					"name": "IQ",
					"value": "IQ"
				},
				{
					"name": "IR",
					"value": "IR"
				},
				{
					"name": "IS",
					"value": "IS"
				},
				{
					"name": "IT",
					"value": "IT"
				},
				{
					"name": "JE",
					"value": "JE"
				},
				{
					"name": "JM",
					"value": "JM"
				},
				{
					"name": "JO",
					"value": "JO"
				},
				{
					"name": "JP",
					"value": "JP"
				},
				{
					"name": "KE",
					"value": "KE"
				},
				{
					"name": "KG",
					"value": "KG"
				},
				{
					"name": "KH",
					"value": "KH"
				},
				{
					"name": "KI",
					"value": "KI"
				},
				{
					"name": "KM",
					"value": "KM"
				},
				{
					"name": "KN",
					"value": "KN"
				},
				{
					"name": "KP",
					"value": "KP"
				},
				{
					"name": "KR",
					"value": "KR"
				},
				{
					"name": "KW",
					"value": "KW"
				},
				{
					"name": "KY",
					"value": "KY"
				},
				{
					"name": "KZ",
					"value": "KZ"
				},
				{
					"name": "LA",
					"value": "LA"
				},
				{
					"name": "LB",
					"value": "LB"
				},
				{
					"name": "LC",
					"value": "LC"
				},
				{
					"name": "LI",
					"value": "LI"
				},
				{
					"name": "LK",
					"value": "LK"
				},
				{
					"name": "LR",
					"value": "LR"
				},
				{
					"name": "LS",
					"value": "LS"
				},
				{
					"name": "LT",
					"value": "LT"
				},
				{
					"name": "LU",
					"value": "LU"
				},
				{
					"name": "LV",
					"value": "LV"
				},
				{
					"name": "LY",
					"value": "LY"
				},
				{
					"name": "MA",
					"value": "MA"
				},
				{
					"name": "MC",
					"value": "MC"
				},
				{
					"name": "MD",
					"value": "MD"
				},
				{
					"name": "ME",
					"value": "ME"
				},
				{
					"name": "MF",
					"value": "MF"
				},
				{
					"name": "MG",
					"value": "MG"
				},
				{
					"name": "MH",
					"value": "MH"
				},
				{
					"name": "MK",
					"value": "MK"
				},
				{
					"name": "ML",
					"value": "ML"
				},
				{
					"name": "MM",
					"value": "MM"
				},
				{
					"name": "MN",
					"value": "MN"
				},
				{
					"name": "MO",
					"value": "MO"
				},
				{
					"name": "MP",
					"value": "MP"
				},
				{
					"name": "MQ",
					"value": "MQ"
				},
				{
					"name": "MR",
					"value": "MR"
				},
				{
					"name": "MS",
					"value": "MS"
				},
				{
					"name": "MT",
					"value": "MT"
				},
				{
					"name": "MU",
					"value": "MU"
				},
				{
					"name": "MV",
					"value": "MV"
				},
				{
					"name": "MW",
					"value": "MW"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "MY",
					"value": "MY"
				},
				{
					"name": "MZ",
					"value": "MZ"
				},
				{
					"name": "NA",
					"value": "NA"
				},
				{
					"name": "NC",
					"value": "NC"
				},
				{
					"name": "NE",
					"value": "NE"
				},
				{
					"name": "NF",
					"value": "NF"
				},
				{
					"name": "NG",
					"value": "NG"
				},
				{
					"name": "NI",
					"value": "NI"
				},
				{
					"name": "NL",
					"value": "NL"
				},
				{
					"name": "NO",
					"value": "NO"
				},
				{
					"name": "NP",
					"value": "NP"
				},
				{
					"name": "NR",
					"value": "NR"
				},
				{
					"name": "NU",
					"value": "NU"
				},
				{
					"name": "NZ",
					"value": "NZ"
				},
				{
					"name": "OM",
					"value": "OM"
				},
				{
					"name": "PA",
					"value": "PA"
				},
				{
					"name": "PE",
					"value": "PE"
				},
				{
					"name": "PF",
					"value": "PF"
				},
				{
					"name": "PG",
					"value": "PG"
				},
				{
					"name": "PH",
					"value": "PH"
				},
				{
					"name": "PK",
					"value": "PK"
				},
				{
					"name": "PL",
					"value": "PL"
				},
				{
					"name": "PM",
					"value": "PM"
				},
				{
					"name": "PN",
					"value": "PN"
				},
				{
					"name": "PR",
					"value": "PR"
				},
				{
					"name": "PS",
					"value": "PS"
				},
				{
					"name": "PT",
					"value": "PT"
				},
				{
					"name": "PW",
					"value": "PW"
				},
				{
					"name": "PY",
					"value": "PY"
				},
				{
					"name": "QA",
					"value": "QA"
				},
				{
					"name": "RE",
					"value": "RE"
				},
				{
					"name": "RO",
					"value": "RO"
				},
				{
					"name": "RS",
					"value": "RS"
				},
				{
					"name": "RU",
					"value": "RU"
				},
				{
					"name": "RW",
					"value": "RW"
				},
				{
					"name": "SA",
					"value": "SA"
				},
				{
					"name": "SB",
					"value": "SB"
				},
				{
					"name": "SC",
					"value": "SC"
				},
				{
					"name": "SD",
					"value": "SD"
				},
				{
					"name": "SE",
					"value": "SE"
				},
				{
					"name": "SG",
					"value": "SG"
				},
				{
					"name": "SH",
					"value": "SH"
				},
				{
					"name": "SI",
					"value": "SI"
				},
				{
					"name": "SJ",
					"value": "SJ"
				},
				{
					"name": "SK",
					"value": "SK"
				},
				{
					"name": "SL",
					"value": "SL"
				},
				{
					"name": "SM",
					"value": "SM"
				},
				{
					"name": "SN",
					"value": "SN"
				},
				{
					"name": "SO",
					"value": "SO"
				},
				{
					"name": "SR",
					"value": "SR"
				},
				{
					"name": "SS",
					"value": "SS"
				},
				{
					"name": "ST",
					"value": "ST"
				},
				{
					"name": "SV",
					"value": "SV"
				},
				{
					"name": "SX",
					"value": "SX"
				},
				{
					"name": "SY",
					"value": "SY"
				},
				{
					"name": "SZ",
					"value": "SZ"
				},
				{
					"name": "TC",
					"value": "TC"
				},
				{
					"name": "TD",
					"value": "TD"
				},
				{
					"name": "TF",
					"value": "TF"
				},
				{
					"name": "TG",
					"value": "TG"
				},
				{
					"name": "TH",
					"value": "TH"
				},
				{
					"name": "TJ",
					"value": "TJ"
				},
				{
					"name": "TK",
					"value": "TK"
				},
				{
					"name": "TL",
					"value": "TL"
				},
				{
					"name": "TM",
					"value": "TM"
				},
				{
					"name": "TN",
					"value": "TN"
				},
				{
					"name": "TO",
					"value": "TO"
				},
				{
					"name": "TR",
					"value": "TR"
				},
				{
					"name": "TT",
					"value": "TT"
				},
				{
					"name": "TV",
					"value": "TV"
				},
				{
					"name": "TW",
					"value": "TW"
				},
				{
					"name": "TZ",
					"value": "TZ"
				},
				{
					"name": "UA",
					"value": "UA"
				},
				{
					"name": "UG",
					"value": "UG"
				},
				{
					"name": "UM",
					"value": "UM"
				},
				{
					"name": "US",
					"value": "US"
				},
				{
					"name": "UY",
					"value": "UY"
				},
				{
					"name": "UZ",
					"value": "UZ"
				},
				{
					"name": "VA",
					"value": "VA"
				},
				{
					"name": "VC",
					"value": "VC"
				},
				{
					"name": "VE",
					"value": "VE"
				},
				{
					"name": "VG",
					"value": "VG"
				},
				{
					"name": "VI",
					"value": "VI"
				},
				{
					"name": "VN",
					"value": "VN"
				},
				{
					"name": "VU",
					"value": "VU"
				},
				{
					"name": "WF",
					"value": "WF"
				},
				{
					"name": "WS",
					"value": "WS"
				},
				{
					"name": "XI",
					"value": "XI"
				},
				{
					"name": "YE",
					"value": "YE"
				},
				{
					"name": "YT",
					"value": "YT"
				},
				{
					"name": "ZA",
					"value": "ZA"
				},
				{
					"name": "ZM",
					"value": "ZM"
				},
				{
					"name": "ZW",
					"value": "ZW"
				}
			],
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
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "County",
			"name": "county",
			"type": "string",
			"default": "",
			"description": "County, if applicable",
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
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"description": "The Storecove assigned id for the LegalEntity.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Line 1",
			"name": "line1",
			"type": "string",
			"default": "",
			"description": "The first address line.",
			"routing": {
				"send": {
					"property": "line1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Line 2",
			"name": "line2",
			"type": "string",
			"default": "",
			"description": "The second address line, if applicable",
			"routing": {
				"send": {
					"property": "line2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Party Name",
			"name": "party_name",
			"type": "string",
			"default": "",
			"description": "The name of the company.",
			"routing": {
				"send": {
					"property": "party_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Public",
			"name": "public",
			"type": "boolean",
			"default": true,
			"description": "Whether or not this LegalEntity is public. Public means it will be listed in the PEPPOL directory at https://directory.peppol.eu/ which is normally what you want. If you have a good reason to not want the LegalEntity listed, provide false. This property is ignored when for country SG, where it is always true.",
			"routing": {
				"send": {
					"property": "public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Rea",
			"name": "rea",
			"type": "string",
			"default": {},
			"routing": {
				"send": {
					"property": "rea",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Smart Inbox",
			"name": "smart_inbox",
			"type": "string",
			"default": "",
			"description": "DEPRECATED. Use the <<_openapi_receiveddocuments_resource>> endpoint. The email address of the Smart Inbox for this LegalEntity.",
			"routing": {
				"send": {
					"property": "smart_inbox",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenant_id",
			"type": "string",
			"default": "",
			"description": "The id of the tenant, to be used in case of multi-tenant solutions. This property will included in webhook events.",
			"routing": {
				"send": {
					"property": "tenant_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Third Party Password",
			"name": "third_party_password",
			"type": "string",
			"default": "",
			"description": "The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.",
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
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Third Party Username",
			"name": "third_party_username",
			"type": "string",
			"default": "",
			"description": "The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.",
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
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Zip",
			"name": "zip",
			"type": "string",
			"default": "",
			"description": "The zipcode.",
			"routing": {
				"send": {
					"property": "zip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
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
						"Legal Entities"
					],
					"operation": [
						"Update Legal Entity"
					]
				}
			}
		},
];
