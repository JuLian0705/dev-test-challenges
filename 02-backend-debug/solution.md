# Error Report — 02-debug-backend

## Error #1 — Missing `await` in `async` function

- **Problem:** `const data = getDataFromDB();` returned a promise that was not resolved, so `data` never contained the actual result.
- **Root cause:** absence of `await` when calling an asynchronous function
- **Solution:** `await` was added to wait for the promise; now `data` contains the object `{}` with the actual data from the database.

Please provide the text you would like to have translated.

## Error #2 — Incorrect HTTP code `200` instead of `404`

- **Problem:** `res.status(200)` responded with "everything OK" even tho the resource did not exist, confusing the frontend with an error message.
- **Root cause:** incorrect use of the HTTP code in a resource not found response
- **Solution:** `200` was replaced with `404` and `return` was added to stop the execution of the remaining code.

Please provide the text you would like me to translate.

## Error #3 — Lack of validation in `POST`

- **Problem:** `const { name, value } = req.body;` accepted `null`, `undefined`, empty strings, and potential malicious payloads without any validation.
- **Root cause:** absence of validation for required fields before processing the request
- **Solution:** an `if` was added to check that `name` and `value` exist; if they are missing, it returns a message indicating that the fields are mandatory.

Please provide the text you would like to have translated.

## Error #4 — Memory loss (infinite array)

- **Problem:** the log array was growing without limit, causing high memory consumption in production until the server's RAM was exhausted.
- **Root cause:** use of `.push()` without any size control of the array
- **Solution:**
- `const MAX_LOG_SIZE = 1000;` is defined to set the maximum limit of entries.

- The function `addToLog()` is created to replace the direct `.`push()`:
- Before adding, check if the array has already reached the limit.

- If it is full, use `.shift()` to remove the oldest element (the first one) and free up space.
- Then add the new entry with `.push(entry)`
- In this way, the array never exceeds 1000 entries.

Please provide the text you would like to have translated.

## Error #5 — Lack of error handling (`try/catch` and middleware)

- **Problem:** errors were not being caught; without a `catch`, an unexpected error could bring down the server without leaving a clear trace.
- **Root cause:** absence of `try/catch` and an error handling middleware in Express
- **Solution:**
- `try/catch` is added in the routes to capture errors before they propagate.

- The `next` parameter is added to the `GET` and `POST` routes so that Express can identify the path to the error middleware.
- The middleware receives four parameters: `err` (the error), `req` (the HTTP request), `res` (the HTTP response), and `next` (function to pass to the next middleware).
- `console.log` is used to print the error in the server console.
- A response with `res.status(500)` is sent so that the client knows something went wrong on the server without exposing internal code details.

Please provide the text you would like to have translated.

## Error #6 — Incorrect field in the response (`result` vs `value`)

- **Problem:** `res.json({ resultado: data.result })` was sending an empty value because the `result` field does not exist in the object returned by the database.
- **Root cause:** JavaScript does not throw an error when accessing a non-existent property; it simply returns `undefined`, so the server responded with `200 OK` with empty data without any warning in the console.
- **Solution:** `data.result` was replaced with `data.value`, which is the actual field returned by the database; now the response contains the correct data.
