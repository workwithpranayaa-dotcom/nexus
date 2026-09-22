# NEXUS — Autonomous Incident Intelligence Platform

A production-oriented portfolio project for demonstrating distributed systems, observability, event-driven architecture, anomaly detection, and AI-assisted incident investigation.

## Core idea
NEXUS correlates deployments, logs, metrics, traces, and service events into incidents and reconstructs a timeline.

## Architecture
Browser → API → Event Bus → Correlation Engine → Incident Store
                         ↘ Metrics/Logs/Traces
                         ↘ AI Investigation Layer

## Suggested stack
- Next.js + TypeScript
- NestJS
- PostgreSQL
- Redis
- Kafka
- Python anomaly service
- OpenTelemetry + Prometheus
- Docker Compose
- WebSockets

## Run the starter
```bash
docker compose up --build
```

The included services are intentionally small, but the repository is structured for expansion into a serious distributed-systems project.

## Portfolio milestones
1. Ingest synthetic events.
2. Persist services/deployments/incidents.
3. Build correlation rules.
4. Add anomaly scoring.
5. Add OpenTelemetry traces.
6. Add live incident dashboard.
7. Add AI incident summaries.
8. Add load/failure tests and ADRs.
