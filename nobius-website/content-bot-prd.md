## Content Bot PRD (with Fixer Integration)

### 1) Goal
Enable non-technical users to edit website content via Telegram while ensuring
automatic repair of build failures caused by content edits.

---

### 2) Users
- **Owner/Developer (Sachin):** needs full failure context + fixer status.
- **Client:** needs simple success/failure messages, no technical noise.

---

### 3) Success Criteria
- Content updates succeed without developer intervention in most cases.
- Build failures trigger auto‑repair within 4 minutes.
- Client receives clear, non-technical status updates.
- Developer receives detailed errors and fixer outcomes.

---

### 4) Core Flows

#### Flow A: Owner edit → Build succeeds
1) Owner edits content via Telegram.
2) Bot commits change.
3) Netlify build succeeds.
4) Owner gets ✅ success message. No extra notifications.

#### Flow B: Owner edit → Build fails
1) Owner edits content via Telegram.
2) Bot commits change.
3) Netlify build fails.
4) Owner gets: “🚨 Build failed (auto-fix started)” + error + deploy ID + logs.
5) Fixer runs:
   - If fixed: Owner gets ✅ “Auto-fix applied” + commit link.
   - If failed: Owner gets ❌ “Auto-fix failed” + reason + logs.

#### Flow C: Client edit → Build fails
1) Client edits content via Telegram.
2) Bot commits change.
3) Netlify build fails.
4) Client gets: “⚠️ Update failed. Developer is fixing it now. Your previous content is safe.”
5) Owner gets: “🚨 Build failed (client-triggered, auto-fix started)” + error + logs.
6) Fixer sends result to Owner (success/fail).

#### Flow D: Any edit → Build succeeds
1) Editor gets ✅ success message.
2) Owner is not notified (no spam).

---

### 5) Fixer Integration

#### Trigger
When a build fails, the Content Bot calls the Fixer locally:

```
POST http://127.0.0.1:3001/trigger
{ "buildId": "<netlify-build-id>", "errorMessage": "<optional>" }
```

#### Health Check
Before triggering:
```
GET http://127.0.0.1:3001/health
```

If unhealthy:
- Notify Owner: “Fixer is down, cannot auto‑fix.”
- Do not attempt to start fixer automatically.

#### Fixer Guardrails (summary)
- Patch only; single file.
- ≤ 50 lines changed.
- No import/export edits.
- 4‑minute time budget.
- 3 attempts max (mini, mini, big).

---

### 6) Notification Copy

**Owner (build failed, fixer running):**  
“🚨 Build failed (auto‑fix started)  
Error: <summary>  
Deploy: <id>  
[View Build Logs]”

**Owner (fix success):**  
“✅ Auto‑fix applied  
File: <path>  
[View Commit]”

**Owner (fix failed):**  
“❌ Auto‑fix failed  
Reason: <reason>  
[View Build Logs]”

**Client (failure):**  
“⚠️ Update failed. There was an issue updating the website.  
The developer has been notified and will fix it shortly.  
Your previous content is still safe.”

---

### 7) Non-Goals
- No automatic rollback.
- No external webhooks (local-only trigger).
- No direct PR workflow for fixes (direct commit only if safe).

---

### 8) Metrics to Track (optional)
- Number of failures auto‑fixed.
- Average fix time.
- Failure reasons (parser failure, diff too large, etc.).

