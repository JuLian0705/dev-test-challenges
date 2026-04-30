# Challenge 05 — Mini Application

**Module weight:** 10% of the total score
**Estimated time:** 90–120 min

## What to build

A simple fullstack mini application that:

1. Accepts a **text input** from the user (a search term or a username)
2. Calls a real external API with that input Call a **real external API** with that input
3. **Store** the response (in memory, localStorage, or a simple database) **Store** the response (in memory, localStorage, or a simple database)
4. **Show** a list of previous results **Show** a list of previous results

## Restrictions

- Use any stack you want (React, Vue, plain JS, Python + Flask, etc.)
- Keep it simple — no over-engineering
- It must be functional and executable locally

## Suggested APIs (free, no authentication required)

- `https://api.github.com/users/{username}` — GitHub user information
- `https://api.thecatapi.com/v1/images/search` — random cat image

- `https://jsonplaceholder.typicode.com/posts` — fake posts
- Or any other public API you prefer

## Critical Requirement — AI Transparency Section

Your README file **must** include a section called `## AI Usage` that answers the following questions:

1. Which parts of this application were generated using AI tools? What parts of this application were generated using AI tools?
2. What parts did you write manually? What parts did you write manually?
3. What do you completely understand in this code? What do you completely understand in this code?
4. What parts generate uncertainty for you? Which parts generate uncertainty for you?

This section is mandatory. Failing it = automatic rejection from this module.**

## What to send

- The **URL of your repository**
- Optional: demo link (Vercel, Netlify, Replit, etc.)

## Evaluation Criteria

| Criterion | Weighting |
|-----------|--------|
| The application works as described | 40% |
| AI transparency section present and honest | 30% |
| The code is simple and not overloaded | 15% |
| The candidate can explain their own decisions | 15% |

> Simple code + clear reasoning = HIGH SCORE Perfect code + poor explanation = PENALTY
## Use of AI to answer the following questions:

1. Which parts of this application were generated with AI tools? What parts of this application were generated with AI tools?
The base structure of the JavaScript code, including the consumption of the GitHub API and the initial logic for handling the history, was generated with the help of artificial intelligence tools.
2. What parts did you write by hand? What parts did you write by hand?
I made modifications to the logic of the variables to adapt them to my implementation, validated the correct functioning of localStorage, and separated the code into different files (HTML and JavaScript) to improve the organization of the project.
3. What parts of this code do you fully understand? Which parts of this code do you fully understand?
I understand the complete flow of the application: capturing data from the input, consuming the API using fetch, manipulating the DOM to display results, and using localStorage to persist the history.
4. What parts do you have doubts about? Which parts are unclear to you?
The more advanced handling of errors in API communication and possible improvements in code optimization for larger-scale scenarios.