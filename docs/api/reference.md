---
id: api-reference
title: API Reference
sidebar_label: API Reference
---

# GitAds API Reference

## Authentication

All API requests require authentication using Bearer tokens.

```bash
Authorization: Bearer your-api-key
```

## Base URL

```
https://api.gitads.dev/v1
```

## Rate Limits

| Plan | Rate Limit |
|------|------------|
| Standard | 100 requests/minute |
| Premium | 500 requests/minute |
| Enterprise | Custom limits |

## Endpoints

### Publishers API

#### List Repositories

```http
GET /publishers/repositories
```

Query Parameters:
- `page` (optional): Page number for pagination
- `per_page` (optional): Items per page (default: 20)
- `status` (optional): Filter by status (active, pending, archived)

Response:
```json
{
  "repositories": [
    {
      "id": "repo_123",
      "name": "username/repository",
      "status": "active",
      "earnings": {
        "total": 1234.56,
        "pending": 100.00,
        "currency": "USD"
      },
      "stats": {
        "impressions": 10000,
        "clicks": 150,
        "ctr": 0.015
      }
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 5,
    "total_items": 100
  }
}
```

#### Get Repository Performance

```http
GET /publishers/repositories/{repository_id}/performance
```

Query Parameters:
- `start_date`: Start date (YYYY-MM-DD)
- `end_date`: End date (YYYY-MM-DD)
- `metrics` (optional): Comma-separated list of metrics

Response:
```json
{
  "repository_id": "repo_123",
  "period": {
    "start": "2024-01-01",
    "end": "2024-01-31"
  },
  "metrics": {
    "impressions": 50000,
    "clicks": 750,
    "ctr": 0.015,
    "earnings": 450.75
  },
  "daily_data": [
    {
      "date": "2024-01-01",
      "impressions": 1600,
      "clicks": 24,
      "earnings": 14.40
    }
  ]
}
```

### Advertisers API

#### Create Campaign

```http
POST /advertisers/campaigns
```

Request Body:
```json
{
  "name": "Developer Tools Campaign",
  "budget": {
    "total": 1000.00,
    "daily": 100.00,
    "currency": "USD"
  },
  "targeting": {
    "languages": ["javascript", "python"],
    "categories": ["developer-tools"],
    "countries": ["US", "UK", "DE"],
    "min_repository_stars": 100
  },
  "creatives": [
    {
      "type": "banner",
      "title": "Boost Your Development",
      "description": "Try our developer tools suite",
      "image_url": "https://example.com/ad-image.png",
      "landing_url": "https://example.com/landing"
    }
  ],
  "schedule": {
    "start_date": "2024-02-01",
    "end_date": "2024-02-28"
  }
}
```

Response:
```json
{
  "campaign_id": "camp_123",
  "status": "pending_review",
  "created_at": "2024-01-15T12:00:00Z",
  "review_eta": "2024-01-16T12:00:00Z"
}
```

#### Get Campaign Performance

```http
GET /advertisers/campaigns/{campaign_id}/performance
```

Query Parameters:
- `start_date`: Start date (YYYY-MM-DD)
- `end_date`: End date (YYYY-MM-DD)
- `granularity`: Data granularity (hourly, daily, weekly, monthly)

Response:
```json
{
  "campaign_id": "camp_123",
  "period": {
    "start": "2024-01-01",
    "end": "2024-01-31"
  },
  "summary": {
    "impressions": 100000,
    "clicks": 1500,
    "ctr": 0.015,
    "spend": 750.00,
    "conversions": 45,
    "cpa": 16.67
  },
  "timeline": [
    {
      "date": "2024-01-01",
      "impressions": 3225,
      "clicks": 48,
      "spend": 24.00,
      "conversions": 1
    }
  ]
}
```

### Analytics API

#### Get Real-time Stats

```http
GET /analytics/realtime
```

Response:
```json
{
  "timestamp": "2024-01-15T12:00:00Z",
  "active_campaigns": 25,
  "last_minute": {
    "impressions": 1000,
    "clicks": 15,
    "spend": 7.50
  },
  "top_performing": {
    "repositories": [
      {
        "id": "repo_123",
        "impressions": 100,
        "clicks": 5
      }
    ],
    "campaigns": [
      {
        "id": "camp_123",
        "impressions": 150,
        "clicks": 8
      }
    ]
  }
}
```

#### Generate Custom Report

```http
POST /analytics/reports
```

Request Body:
```json
{
  "type": "custom",
  "period": {
    "start": "2024-01-01",
    "end": "2024-01-31"
  },
  "metrics": [
    "impressions",
    "clicks",
    "ctr",
    "spend",
    "conversions"
  ],
  "dimensions": [
    "campaign",
    "repository",
    "country"
  ],
  "filters": {
    "campaigns": ["camp_123", "camp_456"],
    "countries": ["US", "UK"],
    "min_impressions": 1000
  },
  "sort": {
    "metric": "clicks",
    "order": "desc"
  }
}
```

Response:
```json
{
  "report_id": "report_123",
  "status": "processing",
  "eta_seconds": 30,
  "download_url": null
}
```

### Webhooks API

#### Register Webhook

```http
POST /webhooks
```

Request Body:
```json
{
  "url": "https://your-server.com/webhook",
  "events": [
    "campaign.approved",
    "campaign.paused",
    "payment.processed"
  ],
  "secret": "your-webhook-secret"
}
```

Response:
```json
{
  "webhook_id": "hook_123",
  "status": "active",
  "created_at": "2024-01-15T12:00:00Z"
}
```

## Error Responses

All error responses follow this format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {
      "field": "Additional error context"
    }
  }
}
```

Common Error Codes:
- `INVALID_REQUEST`: Request validation failed
- `UNAUTHORIZED`: Invalid or missing API key
- `FORBIDDEN`: Insufficient permissions
- `NOT_FOUND`: Resource not found
- `RATE_LIMITED`: Too many requests
- `INTERNAL_ERROR`: Server error

## Pagination

All list endpoints support pagination using:
- `page`: Page number (starts at 1)
- `per_page`: Items per page (default: 20, max: 100)

Response includes pagination metadata:
```json
{
  "data": [...],
  "pagination": {
    "current_page": 1,
    "total_pages": 10,
    "total_items": 195,
    "per_page": 20
  }
}
```

## SDKs and Libraries

Official SDKs:
- [JavaScript/TypeScript](https://github.com/gitads/gitads-js)
- [Python](https://github.com/gitads/gitads-python)
- [Ruby](https://github.com/gitads/gitads-ruby)
- [PHP](https://github.com/gitads/gitads-php)

## Changelog

### 2024-01-15 - v1.2.0
- Added real-time analytics endpoint
- Improved webhook reliability
- Added new targeting options

### 2023-12-01 - v1.1.0
- Added custom reporting endpoint
- Enhanced campaign performance metrics
- Added support for multiple creative formats

### 2023-10-15 - v1.0.0
- Initial API release

## Support

For API support:
- Email: [api-support@gitads.dev](mailto:api-support@gitads.dev)
- API Status: [status.gitads.dev](https://status.gitads.dev)
- Developer Discord: [Join here](https://discord.com/invite/S3EdtEbqw7) 