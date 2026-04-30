# Challenge 06 — Conceptual Questions

**Module weight:** 10% of total score  
**Estimated time:** 45–60 min

## Instructions

Answer all 10 questions directly in the evaluation form.  
Write in your own words — not copied from documentation or AI output.  
Minimum 70 characters per answer. Quality over quantity.

---

## Questions

**Q1. Explain how async/await works internally in JavaScript.**  
async/await basically lets you write asynchronous code that reads like it's synchronous, which makes it way easier to follow. Before this, you'd end up in callback hell. When you hit an await, the function pauses right there and hands control back to the rest of the app — it doesn't freeze everything. Once the Promise finishes, it picks up exactly where it left off.
**Q2. What risks does `innerHTML` introduce, and how do you mitigate them?**  
The big risk is XSS — if you're dropping user input directly into innerHTML, an attacker can sneak in a script tag or something like <img src=x onerror=alert('hacked')> and run arbitrary code in the browser. The fix is simple: use .textContent instead, which treats everything as plain text and never executes it.
**Q3. What is the difference between `==` and `===` in edge cases?**  
== tries to be "helpful" by converting types before comparing, which leads to weird results. === is strict — same value AND same type, or it's false. For example: 0 == false is true but 0 === false is false. Same with "" == 0 being true but "" === 0 being false. I always use === to avoid surprises.
**Q4. What happens if an API does not validate its input?**  
You're basically leaving the door open. Someone could inject SQL to dump your database, or send a massive payload that crashes the server. The fix is to validate everything coming in — I'd use something like Zod or Joi to define what's acceptable and reject anything that doesn't match before it even touches your logic.
**Q5. Explain how a webhook differs from polling.**  
Polling is like refreshing your email every 30 seconds to check if something arrived. Webhooks are the opposite — the server taps you on the shoulder when something actually happens. I'd go with webhooks for anything real-time since it's way more efficient. Polling still makes sense when the server doesn't support webhooks or you're working behind a firewall.
**Q6. Why should you use separate `dev` and `main` branches?**  
Because you don't want half-finished code going straight to production. Having a dev branch means the team can work, review, and test without touching what's live. By the time something hits main, it's already been reviewed and passed CI. It's just good hygiene in a team environment.
**Q7. What causes a memory leak in backend systems?**  
Usually it's something accumulating without ever being cleaned up — like pushing data into a global array on every request with no limit. Over time the server just eats more and more RAM. I ran into exactly this in the challenge with requestLog. The fix was capping the array size and using shift() to drop old entries. For detection I'd use Chrome DevTools or a tool like heapdump to see what's growing.
**Q8. Why should HTTP status codes match the actual response?**  
Because clients rely on them to know what happened. If you return 200 OK when something actually failed, the frontend might think everything's fine and move on — or worse, a monitoring tool silently ignores a critical error. I actually fixed this in the challenge: the original code was returning 200 for a "not found" case, which I corrected to 404.
**Q9. What is idempotency in APIs?**  
It means you can call the same endpoint multiple times and the outcome is always the same. GET and PUT are idempotent — fetching data twice or setting a status to "active" twice doesn't change anything extra. POST isn't — if you hit "create order" twice, you get two orders. It matters a lot when dealing with retries or network failures.
**Q10. How would you debug a production issue with no logs?**  
First I'd try to reproduce it locally or in staging. Then I'd look at whatever signals I do have — network requests, browser console, database state. If I can deploy, I'd add temporary logging or tracing to the suspected area. Then I'd dig into recent Git history to see if anything changed right before the issue started. Basically: narrow it down, don't guess randomly.
---

## Evaluation Criteria

Each question is scored independently:
- Answer ≥ 70 characters with relevant content → full credit
- Answer < 70 characters → zero for that question (below minimum threshold)
- Answer present but unrelated to the question → zero (penalty)

| Criterion | Weight per question |
|-----------|-------------------|
| Technical accuracy | 60% |
| Concrete example or scenario | 25% |
| Own words (not copy-paste) | 15% |

> Answers that demonstrate conceptual understanding score higher than textbook definitions.