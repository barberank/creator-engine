# Architecture

## Request flow

1. Confirm the user is an adult.
2. Normalize the inbound message.
3. Run deterministic safety checks.
4. Load character identity, voice and boundaries.
5. Load short-term conversation state and approved long-term memory.
6. Classify intent and conversational tone.
7. Generate a candidate response.
8. Validate disclosure, consistency and safety.
9. Save the message and approved memory updates.
10. Return the response or route it to human review.

## Initial modules

- Identity loader
- Memory loader and writer
- Intent classifier
- Conversation composer
- Safety validator
- Human-review queue
- Analytics events
