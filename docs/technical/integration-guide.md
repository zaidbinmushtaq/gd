---
id: integration-guide
title: Technical Integration Guide
sidebar_label: Integration Guide
---

# GitAds Technical Integration Guide

This guide provides detailed technical information about integrating GitAds into your repository or advertising system.

## Publisher Integration

### Ad Snippet Implementation

```markdown
[![GitAds](https://gitads.dev/v1/ad-serve?source=username/repository@github)](https://gitads.dev/v1/ad-track?source=username/repository@github)
```

#### Parameters Explained
- `source`: Your repository identifier (format: username/repository@github)
- `ad-serve`: Endpoint for serving the ad content
- `ad-track`: Click tracking endpoint

### Advanced Implementation

#### Custom Styling
```html
<div class="gitads-container">
  <!-- Standard GitAds Snippet -->
  [![GitAds](https://gitads.dev/v1/ad-serve?source=username/repository@github&style=custom)](https://gitads.dev/v1/ad-track?source=username/repository@github)
</div>
```

#### Multiple Ad Placements
```markdown
<!-- Primary Ad Placement -->
[![GitAds Primary](https://gitads.dev/v1/ad-serve?source=username/repository@github&placement=primary)](https://gitads.dev/v1/ad-track?source=username/repository@github)

<!-- Secondary Ad Placement -->
[![GitAds Secondary](https://gitads.dev/v1/ad-serve?source=username/repository@github&placement=secondary)](https://gitads.dev/v1/ad-track?source=username/repository@github)
```

### Performance Optimization

1. **Lazy Loading**
```html
<div class="gitads-lazy" data-source="username/repository@github">
  <!-- Ad will be loaded when this element enters viewport -->
</div>
```

2. **Fallback Handling**
```html
<div class="gitads-container">
  <!-- Primary Ad -->
  <div class="gitads-primary">
    <!-- Standard GitAds Snippet -->
  </div>
  <!-- Fallback Content -->
  <div class="gitads-fallback">
    Support this project by checking out our sponsors
  </div>
</div>
```

## Advertiser Integration

### Campaign API Integration

#### Authentication
```javascript
const GITADS_API_KEY = 'your-api-key';
const headers = {
  'Authorization': `Bearer ${GITADS_API_KEY}`,
  'Content-Type': 'application/json'
};
```

#### Create Campaign
```javascript
const campaign = {
  name: 'Developer Tools Campaign',
  budget: 1000,
  daily_cap: 100,
  targeting: {
    languages: ['javascript', 'python'],
    categories: ['developer-tools', 'web-development'],
    countries: ['US', 'UK', 'DE']
  },
  creatives: [{
    type: 'banner',
    title: 'Boost Your Development',
    description: 'Try our developer tools suite',
    image_url: 'https://example.com/ad-image.png',
    landing_url: 'https://example.com/landing'
  }]
};

await fetch('https://api.gitads.dev/v1/campaigns', {
  method: 'POST',
  headers,
  body: JSON.stringify(campaign)
});
```

### Conversion Tracking

#### Pixel Implementation
```html
<!-- Place in your landing page -->
<img src="https://gitads.dev/v1/pixel?campaign_id=YOUR_CAMPAIGN_ID&event=conversion" style="display: none;" />
```

#### JavaScript SDK
```javascript
// Initialize GitAds Tracking
window.GitAds.init('YOUR_ADVERTISER_ID');

// Track Custom Events
window.GitAds.track('signup_completed', {
  campaign_id: 'CAMPAIGN_ID',
  value: 99.99,
  currency: 'USD'
});
```

## Analytics Integration

### Real-time Analytics

```javascript
// WebSocket Connection for Real-time Updates
const ws = new WebSocket('wss://analytics.gitads.dev/v1/stream');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Real-time analytics:', data);
};
```

### Custom Reporting

```javascript
// Fetch Custom Report
const report = await fetch('https://api.gitads.dev/v1/reports/custom', {
  method: 'POST',
  headers,
  body: JSON.stringify({
    start_date: '2024-01-01',
    end_date: '2024-01-31',
    metrics: ['impressions', 'clicks', 'conversions'],
    dimensions: ['campaign', 'country', 'repository'],
    filters: {
      campaign_id: ['campaign1', 'campaign2']
    }
  })
});
```

## Security Considerations

### CORS Configuration
```javascript
// Allowed Origins
const allowedOrigins = [
  'https://github.com',
  'https://gitads.dev'
];

// CORS Headers
response.headers.set('Access-Control-Allow-Origin', origin);
response.headers.set('Access-Control-Allow-Methods', 'GET, POST');
```

### Rate Limiting
```javascript
// Example Rate Limiting Implementation
const rateLimit = {
  window: 60000, // 1 minute
  max_requests: 100
};
```

## Error Handling

### Common Error Codes
```javascript
const errorCodes = {
  INVALID_REPOSITORY: 'ERR001',
  CAMPAIGN_BUDGET_EXCEEDED: 'ERR002',
  INVALID_AD_FORMAT: 'ERR003',
  TRACKING_BLOCKED: 'ERR004'
};

// Error Handler
function handleError(error) {
  switch(error.code) {
    case errorCodes.INVALID_REPOSITORY:
      // Handle invalid repository
      break;
    case errorCodes.CAMPAIGN_BUDGET_EXCEEDED:
      // Pause campaign
      break;
    // ... handle other errors
  }
}
```

## Best Practices

1. **Ad Loading**
   - Implement lazy loading for better performance
   - Use fallback content when ads can't load
   - Cache ad responses appropriately

2. **Tracking**
   - Implement retry logic for failed tracking calls
   - Use batch processing for multiple events
   - Handle ad blockers gracefully

3. **Security**
   - Rotate API keys regularly
   - Implement rate limiting
   - Use HTTPS for all requests
   - Validate all input data

4. **Performance**
   - Minimize ad payload size
   - Use CDN for asset delivery
   - Implement caching strategies
   - Monitor response times

## Testing

### Test Environment
```bash
# Test API Endpoint
GITADS_API_URL=https://test-api.gitads.dev

# Test Publisher ID
TEST_PUBLISHER_ID=test_pub_123

# Test Campaign ID
TEST_CAMPAIGN_ID=test_camp_456
```

### Integration Tests
```javascript
describe('GitAds Integration', () => {
  it('should load ad content', async () => {
    const response = await fetch(`${GITADS_API_URL}/ad-serve?source=${TEST_PUBLISHER_ID}`);
    expect(response.status).toBe(200);
  });

  it('should track clicks', async () => {
    const response = await fetch(`${GITADS_API_URL}/ad-track?campaign=${TEST_CAMPAIGN_ID}`);
    expect(response.status).toBe(200);
  });
});
```

Need help with integration? Contact our developer support at [dev-support@gitads.dev](mailto:dev-support@gitads.dev) 