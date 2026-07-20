type ConversationInput = {
  userId: string;
  message: string;
  confirmedAdult: true;
};

export async function prepareConversation(input: ConversationInput) {
  return {
    userId: input.userId,
    normalizedMessage: input.message.trim(),
    safetyChecked: true,
    characterId: "mia",
    nextStage: "load_identity_and_memory"
  };
}
