import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

//GET (read)

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Failed to find prompt", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};

//PATCH (update)

export const PATCH = async (request, { params }) => {
  await connectToDB();
  const { prompt, tag } = await request.json();
  try {
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new Response("failed to find prompt", { status: 404 });
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save;

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
