---
topicType; adr
tags: codex remark unified
---
# 2. initial implementation for unified and remark

Date: 2022-01-07

## Status

Accepted

## Context

> The issue motivating this decision, and any context that influences or constrains the decision.

For our initial implementation there were some importing issues with the `unified@10.x` version and requiring update es5 module hanlding as identified by the project maintainer -- [unifiedjs/issue/121](https://github.com/unifiedjs/unified/issues/121) and in [unifiedjs/rfc-4](https://github.com/unifiedjs/rfcs/pull/4)

## Decision

> The change that we're proposing or have agreed to implement.

The decision to downgrade to `unified@9.1.0` and `remark-parse@9.0.0` so that our default `process` wrapper will out of the box as part of the teaching exercise/live-coding session.  

## Consequences

> What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.

Give us a foundation to build a test driven approach to further development of the __Codex__ interface(s).