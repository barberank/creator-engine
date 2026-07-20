import { NextResponse } from "next/server";
import { z } from "zod";
import { prepareConversation } from "@/lib/prepareConversation";

const bodySchema = z.object({
  userId: z.string().min(1),
  message: z.string().min(1).max(4000),
  confirmedAdult: z.literal(true)
});

export async function POST(request: Request) {
  const parsed = bodySchema.safeParse(await request.json());

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request or adult confirmation missing." },
      { status: 400 }
    );
  }

  const context = await prepareConversation(parsed.data);

  return NextResponse.json({
    status: "scaffold",
    disclosure: "Mia is a virtual AI-generated character.",
    context
  });
}
