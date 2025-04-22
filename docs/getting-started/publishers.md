---
id: publishers
title: Getting Started for Publishers
sidebar_label: Publishers Guide
---

### Step 1: Register
Go to [Publisher Registration](https://gitads.dev/publisher/register) and sign up.

### Step 2: Add Repository
After registration, add your GitHub repository to GitAds.

### Step 3: Repository Verification
To verify ownership of your GitHub repository, follow these quick steps:

1. **Copy Verification Code**
   ```html
   <!-- GitAds-Verify: HOVLFSRKIHCRFHC4B31EXLJFM1KAZMAK -->
   ```

2. **Add to README.md**
   Paste the code anywhere in your `README.md` file. It's an HTML comment and invisible to normal visitors.

3. **Verify Repository**
   - Click the "Verify" button on GitAds.
   - Make sure your branch is `main`. If it's something else (like `master`), update it in the GitAds dashboard.

> ⚠️ If verification doesn't work immediately, wait 10 minutes and try again. Double-check the repository URL format:
> - ✅ `https://github.com/username/repo`
> - ❌ `https://github.com/username/repo.git` or `.../readme.md`

Once verified, you can remove the old verification code.

### Step 4: Place Ads
Copy and paste the following ad snippet into your `README.md`:

```markdown
[![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=awesome-user/awesome-repository@github)](https://gitads.dev/v1/ad-track?source=awesome-user/awesome-repository@github)
```

Your ads will appear instantly.

### Step 5: Complete KYC
KYC is required before payouts. Most verifications take less than a few minutes.