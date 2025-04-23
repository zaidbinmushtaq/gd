---
id: troubleshooting
title: Troubleshooting Guide
sidebar_label: Troubleshooting
---

# Troubleshooting Guide

This guide helps you resolve common issues you might encounter while using GitAds.

## 🔍 Quick Issue Finder

Select your issue type:
- [Ad Not Displaying](#ad-not-displaying)
- [Verification Problems](#verification-problems)
- [Payment Issues](#payment-issues)
- [Dashboard Problems](#dashboard-problems)
- [Integration Issues](#integration-issues)

## Ad Not Displaying

### Symptoms
- Ad space is blank
- Placeholder image shows instead of actual ad
- Ad appears broken or malformed

### Common Solutions

1. **Check Ad Snippet**
   ```markdown
   # Correct Format
   [![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=username/repository@github)](https://gitads.dev/v1/ad-track?source=username/repository@github)
   ```
   - Verify the URL format
   - Ensure repository name is correct
   - Check for special characters

2. **Cache Issues**
   - Clear browser cache
   - Wait 5-10 minutes for propagation
   - Try incognito mode

3. **Repository Settings**
   - Verify repository is public
   - Check repository visibility settings
   - Confirm README.md is in root directory

## Verification Problems

### Common Issues

1. **Verification Code Not Working**
   - Double-check code format
   - Ensure no extra spaces
   - Verify branch name (main vs master)

2. **Repository Not Found**
   ```bash
   # Common Fix
   git push origin main
   git status # Check current branch
   ```

3. **Permission Errors**
   - Verify GitHub permissions
   - Check organization access
   - Confirm admin rights

## Payment Issues

### Troubleshooting Steps

1. **Payment Not Received**
   - Verify minimum threshold ($50)
   - Check payment details
   - Confirm KYC status

2. **Wrong Amount**
   - Review dashboard metrics
   - Check payment history
   - Verify currency settings

3. **Payment Method Issues**
   - Update payment information
   - Verify bank details
   - Check PayPal email

## Dashboard Problems

### Common Dashboard Issues

1. **Stats Not Updating**
   - Wait for data refresh (up to 24h)
   - Clear browser cache
   - Check tracking implementation

2. **Access Issues**
   - Reset password
   - Clear cookies
   - Update browser

3. **Missing Data**
   ```javascript
   // Check implementation
   console.log('GitAds: Loaded'); // Should appear in console
   ```

## Integration Issues

### Common Integration Problems

1. **Documentation Platform Issues**
   - Docusaurus configuration
   - VuePress setup
   - GitBook integration

2. **Custom Implementation**
   - Check site configuration
   - Verify ad placement
   - Review content settings

## 🔧 Advanced Troubleshooting

### Debug Mode
Enable debug mode in your browser console to get detailed logs:
```javascript
window.GitAds.debug = true;
```

### Network Issues
1. Check your network connection
2. Verify firewall settings
3. Review proxy configuration

### Security Concerns
1. SSL certificate issues
2. Content Security Policy (CSP)
3. Cross-Origin Resource Sharing (CORS)

## 📞 Still Need Help?

If you're still experiencing issues:

1. **Contact Support**
   - Email: [support@gitads.dev](mailto:support@gitads.dev)
   - Priority support for verified publishers
   - Include your repository URL and error details

2. **Join Community**
   - [Discord Server](https://discord.com/invite/S3EdtEbqw7)
   - Community forums
   - GitHub discussions

3. **Submit Bug Report**
   - Provide detailed reproduction steps
   - Include console logs
   - Attach screenshots

:::tip Quick Response
For fastest support, always include:
- Your repository URL
- Screenshots of the issue
- Browser console logs
- Steps to reproduce
:::

## 🔄 Common Error Codes

| Error Code | Description | Solution |
|------------|-------------|----------|
| `ADS001` | Ad Not Found | Verify ad snippet |
| `VER002` | Verification Failed | Check verification code |
| `PAY003` | Payment Error | Update payment details |
| `INT001` | Integration Error | Review implementation |

Remember to check our [FAQ section](/docs/faq/publishers) for more common questions and answers. 