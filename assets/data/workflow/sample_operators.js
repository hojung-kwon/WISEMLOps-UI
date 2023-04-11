export const operatorList = {
  "DataSource": [
    {
      "operatorName": "MySQL",
      "attributes": {
        "connectId": {
          "type": "select",
          "hidden": false
        },
        "query": {
          "type": "textarea",
          "hidden": false
        }
      }
    },
    {
      "operatorName": "ElasticSearch",
      "attributes": {
        "connectId": {
          "type": "select",
          "hidden": false
        },
        "index": {
          "type": "string",
          "hidden": false
        },
        "query": {
          "type": "textarea",
          "hidden": false
        }
      }
    },
    {
      "operatorName": "SimpleHttp",
      "attributes": {
        "connectId": {
          "type": "select",
          "hidden": false
        },
        "method": {
          "type": "string",
          "hidden": false
        },
        "header": {
          "type": "textarea",
          "hidden": false
        },
        "body": {
          "type": "textarea",
          "hidden": false
        }
      }
    },
    {
      "operatorName": "CSV",
      "attributes": {
        "type": {
          "type": "string",
          "hidden": true,
          "value": "fileUpload"
        },
        "fileName": {
          "type": "string",
          "hidden": false
        }
      }
    }
  ],
  "Transform": [
    {
      "operatorName": "Join",
      "attributes": {}
    },
    {
      "operatorName": "Filter",
      "attributes": {}
    },
    {
      "operatorName": "Mapping",
      "attributes": {}
    }
  ],
  "DataTarget": [
    {
      "operatorName": "MySQL",
      "attributes": {
        "connectId": {
          "type": "select",
          "hidden": false
        },
        "query": {
          "type": "textarea",
          "hidden": false
        }
      }
    },
    {
      "operatorName": "ElasticSearch",
      "attributes": {
        "connectId": {
          "type": "select",
          "hidden": false
        },
        "index": {
          "type": "string",
          "hidden": false
        },
        "query": {
          "type": "textarea",
          "hidden": false
        }
      }
    },
    {
      "operatorName": "SimpleHttp",
      "attributes": {
        "connectId": {
          "type": "select",
          "hidden": false
        },
        "method": {
          "type": "string",
          "hidden": false
        },
        "header": {
          "type": "textarea",
          "hidden": false
        },
        "body": {
          "type": "textarea",
          "hidden": false
        }
      }
    },
    {
      "operatorName": "CSV",
      "attributes": {
        "file": {
          "type": "string",
          "hidden": false
        }
      }
    }
  ]
};