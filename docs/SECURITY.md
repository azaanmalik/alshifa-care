# Security, moderation, and privacy

The website is a static frontend with a Supabase-backed, moderated reviews feature.

- The project URL and Supabase **publishable/anon** key are designed for public browser clients; **never** publish a service-role or secret key.
- Enable and independently verify Row Level Security on the live Supabase reviews table.
- Public readers should see **approved** reviews only. Public submitters must not be able to approve their own submissions or update/delete reviews.
- Review names and messages may contain personal information. Collect only necessary data, moderate submissions, and establish retention/deletion procedures.
- Client-side form validation is not a security boundary. Apply database constraints and abuse protection; add rate limiting / CAPTCHA if spam occurs.
- Display text is HTML escaped before insertion into the DOM.
- Do not submit personal data or secrets in public issues.
- External links, fonts and scripts have their own privacy/availability considerations.

For a private security report, contact the repository owner rather than opening a public issue.
