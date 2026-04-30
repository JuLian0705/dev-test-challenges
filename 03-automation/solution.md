# Flow Documentation — User Registration with n8n

## Node 1 — Webhook (Entry Point)

- **Type:** Webhook
- **Description:** it is the single entry point of the flow; it receives the HTTP request sent from Postman
- **Input data:** `name`, `email`, `source`
- **Function:** captures the data from the request body and passes it to the next node to initiate the registration process

Please provide the text you would like to have translated.

## Node 2 — Email Validation (`IF`)

- **Type:** IF
- **Description:** validates if the `email` field is correctly provided in the request
- **Condition:**
- If the email **exists and is valid** → proceed to the duplicate search node
- If the email **does not exist, is empty, or is invalid** → redirect to the invalid response node

Please provide the text you would like to have translated.

## Node 3 — Find Duplicate (Google Sheets)

- **Type:** Google Sheets (read)
- **Description:** searches the Google Sheets document to see if the email has already been registered
- **Condition:**
- If the email **already exists** in the sheet → redirect to the duplicate email response webhook
- If the email **does not exist** → proceed to the user saving node

Please provide the text you would like to have translated.

## Node 4 — Save User (Google Sheets)

- **Type:** Google Sheets (write)
- **Description:** saves the new user in the Google Sheets with the fields `name`, `email`, and `source`
- **Result:** the record becomes visible in the sheet and the flow continues toward the success response

Please provide the text you would like to have translated.

## Node 5 — Successful Response (Webhook Response)

- **Type:** Respond to Webhook
- **Description:** responds to the original Postman request with a confirmation message
- **Response:** indicates that the registration was successful and that the user is already saved in Google Sheets

Please provide the text you would like to have translated.

## Node 6 — Error Management (`Log Error`)

- **Type:** Error Handler / Log
- **Description:** detects runtime errors within the flow
- **Known use case:** if the destination sheet in Google Sheets is changed without updating the node configuration, the `Log Error` is triggered and returns an error message from n8n
- **Function:** allows identifying at which point in the flow the failure occurred without leaving the flow silent
