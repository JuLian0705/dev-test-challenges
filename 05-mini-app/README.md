# Challenge 05 — Mini App

**Module weight:** 10% of total score  
**Estimated time:** 90–120 min

## What to Build

A simple fullstack mini app that:

1. Accepts a **text input** from the user (a search term or username)
2. Calls a **real external API** with that input
3. **Stores** the response (in-memory, localStorage, or a simple DB)
4. **Displays** a list of past results

## Constraints

- Use any stack you want (React, Vue, plain JS, Python + Flask, etc.)
- Keep it simple — no overengineering
- Must be functional and runnable locally

## Suggested APIs (free, no auth required)

- `https://api.github.com/users/{username}` — GitHub user info
- `https://api.thecatapi.com/v1/images/search` — random cat image
- `https://jsonplaceholder.typicode.com/posts` — fake posts
- Or any other public API you prefer

## Critical Requirement — AI Transparency Section

Your README **must** include a section called `## AI Usage` that answers:

1. What parts of this app were generated using AI tools?
2. What parts did you write manually?
3. What do you fully understand in this code?
4. What parts are you uncertain about?

**This section is mandatory. Missing it = automatic rejection of this module.**

## What to Submit

- Your **repo URL**
- Optional: demo link (Vercel, Netlify, Replit, etc.)

## Evaluation Criteria

| Criterion | Weight |
|-----------|--------|
| App works as described | 40% |
| AI Transparency section present and honest | 30% |
| Code is simple and not over-engineered | 15% |
| Candidate can explain their own decisions | 15% |

> Simple code + clear reasoning = HIGH SCORE  
> Perfect code + poor explanation = PENALTY
`## Uso de IA` que responda a las siguientes preguntas:

1. ¿Qué partes de esta aplicación se generaron con herramientas de IA?
La estructura base del código JavaScript, incluyendo el consumo de la API de GitHub y la lógica inicial para manejar el historial, fue generada con ayuda de herramientas de inteligencia artificial.
2. ¿Qué partes escribiste manualmente?
Realicé modificaciones en la lógica de las variables para adaptarlas a mi implementación, validé el correcto funcionamiento del almacenamiento en localStorage y separé el código en archivos distintos (HTML y JavaScript) para mejorar la organización del proyecto.
3. ¿Qué partes de este código comprendes completamente?
Comprendo el flujo completo de la aplicación: captura de datos desde el input, consumo de la API mediante fetch, manipulación del DOM para mostrar resultados y uso de localStorage para persistir el historial.
4. ¿Qué partes te generan dudas?
El manejo más avanzado de errores en la comunicación con la API y posibles mejoras en la optimización del código para escenarios de mayor escala.