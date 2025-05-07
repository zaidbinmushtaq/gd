---
id: publishers
title: Getting Started for Publishers
sidebar_label: Publishers Guide
---

# Getting Started for Publishers


1. **Sign Up**: Visit [Publisher Registration](https://gitads.dev/publisher/register) to create your account
2. **Add Repository**: Enter your GitHub repository URL in your dashboard
3. **Verify**: Add the verification code to your README.md
4. **Place Ad**: Copy and paste the ad snippet at the top of your README.md
5. **Earnings**: Monitor your dashboard for impressions and earnings

Ready for detailed setup? Continue reading below! 👇

Welcome to GitAds! This comprehensive guide will walk you through the process of monetizing your GitHub repositories with non-intrusive, developer-focused advertisements.

## Step 1: Register Your Account

1. Visit [Publisher Registration](https://gitads.dev/publisher/register) to create your account
2. Fill in your basic information:
   - Email address
   - Password
   - Username
3. Verify your email address to activate your account

> **Note:** GitAds works with individual developers, open-source projects, and organizations of all sizes.

## Step 2: Add Your Repository

1. From your All Repositories, click **Add Repository**
2. Enter your GitHub repository URL in the format: `https://github.com/username/repository`
3. Select the Tags that best describe your repository. These tags help us match your repository with relevant advertisers.
4. Click  **Add**

:::tip
> **Pro Tip:** Repositories with clear documentation and active maintenance typically generate higher advertising revenue.
:::
## Step 3: Verify Repository Ownership

To ensure security, we require verification of repository ownership:

1. **Copy Your Unique Verification Code after clicking Verify Button**
   ```html
   <!-- GitAds-Verify: UNIQUECODEEXAMPLE123456789 -->
   ```
   This code will be displayed in Verification Page for each repository.

2. **Add to Your README.md**
   - Edit your repository's `README.md` file
   - Paste the verification code anywhere in the file
   - The code is an HTML comment and will be invisible to normal visitors
   - Commit and push the changes to your repository

3. **Complete Verification**
   - Return to your GitAds
   - Click the **Verify** in the Verification Page
   - Ensure you've selected the correct branch (default is `main`)
   - If using a different default branch (like `master`), update it in the dashboard

:::danger
> **Troubleshooting:** If verification fails, check:
> - The code was added exactly as provided
> - You're using the correct repository URL format (`https://github.com/username/repo`)
> - Changes have been pushed and are visible on GitHub
> - Wait 5-10 minutes and try again (GitHub caching can delay verification)
:::

After successful verification, you can remove the verification code from your README if desired.

## Step 4: Place Ad Snippets

1. **Choose Placement Location**
   - Ads perform best at the top of your README.md

2. **Copy Your Ad Snippet**
   From your verified repository list, copy the ad snippet:
   ```markdown
   [![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=username/repository@github)](https://gitads.dev/v1/ad-track?source=username/repository@github)
   ```

3. **Insert the Snippet**
   - Paste the snippet in your README.md
   - Commit and push the changes
   - Your ad will appear immediately when viewed on GitHub
:::note
> **Best Practices:**
> - Place ads where they'll be seen but not disrupt documentation
> - Consider adding a brief message explaining that ads help support the project
> - For multi-language repositories, you can place ads in translated READMEs as well
:::
## Step 5: Complete KYC and Payment Setup

Before you can receive payments for your earnings, you'll need to:

1. **Set Up Payment Information**
   - Currently we are allowing payments via paypal only.

2. **Complete KYC Verification**
   Know Your Customer (KYC) verification is required before receiving payments:
   - Navigate to the **KYC Verification** section, displayed on the dashboard itself.
   - Prepare the required documents:
     - Government-issued ID (passport, driver's license)
   - Upload the requested documents
   - Verification typically takes 5-7 business days (Currently we are not, until we move to Beta)

:::note
You can start displaying ads and earning revenue while your KYC verification is in progress. However, you'll need to complete verification before receiving your first payment.
:::

## Step 6: Monitor Performance & Get Paid

1. **Track Performance**
   - Your dashboard shows real-time impressions, clicks, and estimated earnings
   - View historical data and trends to optimize ad placement
   - See which repositories generate the most revenue

2. **Payment Details**
   - Payments are processed based on Users requerst.
   - Payment methods include PayPal (currently, others soon to come)
   - Earnings accumulate until they reach the minimum threshold (currently $30 -> Closed balance).
   - After the Closed Balance passes this threshold, you can transfer them to Available balance.
   - What is in the Available balance, you can make a request to withdraw that amount (fully or part of it).
   - Payments are typically sent within the first 5 days after the request is placed.

## Step 7: Get Support When You Need It

GitAds provides comprehensive support to help you maximize your earnings and resolve any issues:

1. **Create Support Tickets**
   - Log in to your GitAds publisher dashboard
   - Navigate to the **Support** tab in the left sidebar
   - Click **Create New Ticket**
   - Select the appropriate category for your issue
   - Provide detailed information about your question or problem
   - Attach screenshots if relevant

2. **Track Your Support Requests**
   - All your tickets are visible in the **My Tickets** section
   - Each ticket shows its current status and priority
   - You'll receive email notifications when there are updates
   - Respond to support agent questions directly through the ticket interface


4. **Additional Support Options**
   - **Knowledge Base**: Browse our [Publisher FAQ](/docs/faq/faq-publishers) for instant answers
   - **Community Forum**: Connect with other publishers to share tips and strategies
> **Pro Tip:** When submitting a support ticket, always include your repository URL and specific details about your issue to receive faster assistance.

## Maximizing Your Revenue

- **Maintain active repositories** with regular updates and contributions
- **Improve documentation quality** to increase visitor engagement
- **Promote your repositories** on social media and developer communities
- **Add GitAds to multiple repositories** to increase overall earnings
- **Engage with your community** about how ads support development

## Need Help?

Our publisher support team is here to assist you:

- Email: [support@gitads.dev](mailto:support@gitads.dev)
- Visit our [Publisher FAQ](/docs/faq/publishers)
- Join our [Discord community](https://discord.com/invite/S3EdtEbqw7) to connect with other publishers

Start monetizing your open-source work today while maintaining the integrity of your projects!
