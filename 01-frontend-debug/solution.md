# Error Report

## Error 1: Missing `await` in `fetch`

- **File:** `api.js`
- **Problem:** `fetch` was returning an unresolved promise, preventing the actual response from being obtained
- **Root Cause:** `await` was not being used in the `fetch` call
- **Solution:** `await` was added to ensure the HTTP request was resolved

## Error 2: Missing `await` in `response.json()`

- **File:** `api.js`
- **Problem:** The `response.json()` method was returning a promise instead of the processed data
- **Root Cause:** `await` was missing when parsing the response
- **Solution:** `await` was added to correctly obtain the JSON object

## Error 3 — Logical Validation Error

- **File:** `app.js`
- **Problem:** The condition used assignment instead of comparison, resulting in incorrect validations.
- **Root Cause:** Incorrect use of the `=` operator within a condition.
- **Solution:** Replaced with `===` to ensure a strict comparison.

---

## Error 4 — XSS Risk Due to Unsafe Rendering

- **File:** `app.js`
- **Problem:** Use of `innerHTML` with user-supplied data, allowing potential HTML injection.
- **Root Cause:** Direct DOM manipulation without sanitization.
- **Solution:** Replaced `innerHTML` with `textContent` to prevent the execution of malicious content.