# Security policy

AlShifa Care is a static frontend with a Supabase-backed public review submission feature. Security depends on the deployed Supabase Row Level Security policies, which must be audited separately.

- **Never publish Supabase secret keys** or service role credentials.
- Browser-only publishable/anon keys are public by design and are governed by RLS.
- Never include patient information, credentials, or real review records in bug reports or PRs.
- Please report security vulnerabilities **privately to the repository owner** instead of posting public exploitation details.

See [security and privacy guidance](docs/SECURITY.md) for data handling and moderation notes.
