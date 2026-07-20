export type ConversationIntent =
  | "CASUAL_CHAT"
  | "COMPLIMENT"
  | "FLIRT"
  | "PERSONAL_QUESTION"
  | "EMOTIONAL_SUPPORT"
  | "CONTENT_QUESTION"
  | "PURCHASE_INTENT"
  | "BOUNDARY_TEST"
  | "HARASSMENT"
  | "GOODBYE";

export type SafetyDecision = "ALLOW" | "BLOCK" | "HUMAN_REVIEW";
