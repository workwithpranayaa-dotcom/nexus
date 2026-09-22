# ADR-001: Event-driven incident processing

## Context
Incident data arrives from many independent systems. Synchronous coupling would make the platform fragile.

## Decision
Use an event bus between producers and correlation/analysis services.

## Consequences
Positive:
- services can scale independently
- events can be replayed
- consumers can evolve independently

Trade-offs:
- operational complexity
- eventual consistency
- schema/version management becomes important
