# Deployment and verification

## Local preview

From the project root run `python -m http.server 8000` and open `http://localhost:8000`. The page should show the hero, service sections, team, safety modal, booking links and review form.

## Netlify

1. In Netlify, select the **existing** live AlShifa Care site.
2. To connect GitHub, use **Site configuration → Build & deploy → Continuous deployment** (UI wording may vary) and select the correct repository/branch.
3. Leave build command empty and set publish directory to `.`.
4. Deploy and confirm the production URL. Record it in the README only after verifying it.
5. Verify the site after deploy, including on mobile.

## Review integration checklist

- [ ] `review-config.js` points to the intended Supabase project (public URL and public publishable key only).
- [ ] Supabase `reviews` table exists and RLS is enabled.
- [ ] Anonymous SELECT only returns rows where `approved = true`.
- [ ] Anonymous INSERT cannot set `approved = true`.
- [ ] Submit a test review; confirm it is initially not public.
- [ ] Approve it in Supabase Table Editor; refresh and confirm it appears.
- [ ] Toggle it back to unapproved; confirm it disappears.
- [ ] Verify review name, text, star rating, service and show-more behavior.
- [ ] Verify WhatsApp booking links open the intended contact.
- [ ] Check browser console and Network panel for errors.

Do not publish personal patient data or private keys in issue reports or screenshots.
