# GitHub User Finder

Web application that allows searching for GitHub profiles by username, displaying the result with an avatar, and saving a search history in the browser.

Please provide the text you would like to have translated.

## Project Files

- `index.html` — interface structure
- `file.js` — search logic, history, and rendering

Please provide the text you would like to have translated.

## Application Flow

### 1. When loading the page

Se ejecuta `mostrarHistorial()` de forma inmediata para renderizar las búsquedas previas guardadas en `localStorage`.

Please provide the text you would like to have translated.

### 2. The user types a name and presses "Search"

Se dispara la función `buscar()`:

- Lee el valor del `input` con `id="nombre_usuario"` 
- Si el campo está vacío, detiene la ejecución con `return` 
- Hace una petición `GET` a `https://api.github.com/users/{nombre_usuario}` 
- Espera la respuesta con `await fetch(...)` y parsea el JSON con `await res.json()`

Please provide the text you would like to have translated.

### 3. Validación de respuesta de la API

- Si `data.message === "Not Found"` → muestra `"Usuario no encontrado"` en el `div#resultado` y detiene el flujo 
- Si el usuario existe → extrae `data.login` y `data.avatar_url` y los renderiza en el `div#resultado`

Please provide the text you would like to have translated.

### 4. Guardado en historial

Se llama a `guardarHistorial(usuario)`:

- Obtiene el historial actual desde `localStorage` con `obtenerHistorial()` 
- Agrega el nuevo usuario al array con `.push()` 
- Guarda el array actualizado con `localStorage.setItem()`

---

### 5. Renderizado del historial

Se llama a `mostrarHistorial()`:

- Lee el array desde `localStorage` 
- Limpia el contenido del `ul#historial` 
- Por cada entrada crea un `<li>` con el `nombre_usuario` y lo agrega a la lista

---

## Funciones

| Función | Descripción | 
|---|---| 
| `obtenerHistorial()` | Lee y parsea el historial desde `localStorage`; retorna `[]` si no existe | 
| `guardarHistorial(data)` | Agrega un usuario al historial y lo persiste en `localStorage` | 
| `buscar()` | Función principal: valida input, llama a la API, renderiza resultado y actualiza historial | 
| `mostrarHistorial()` | Renderiza la lista de búsquedas previas en el `ul#historial` |

---

## Tecnologías

- HTML5 
- JavaScript (vanilla) 
- GitHub REST API — `GET /users/{username}` 
- `localStorage` para persistencia en el navegador 
