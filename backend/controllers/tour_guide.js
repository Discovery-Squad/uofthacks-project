import { cohere } from "cohere-ai";

// Initialize the cohere client with the trial API key
cohere.init('ftC04BtCJRft9XSpIETUXY50QHIz7BKmPWaZee4p');

/**
 * Generates a description about a landmark in the style of tour guide.
 * Lists interesting facts and information about the landmark to keep the runner engaged
 * during their guided run session.
 * 
 * @param location The name of the landmark at the user's current location
 * @param article The wikipedia article that contains information about the above location
 */
const generateLandmarkDetails = async (article) => {
  const response = await cohere.generate({
    model: "command-xlarge-nightly",
    prompt: `
    Please act like a tour guide, and write a 4-sentence summary that describes all the interesting things about this location like a tour guide would.
    Before the summary, write a sentence welcoming someone to this location, telling them what it is called. Do not include any text before the welcome statement.

    Article:
    Location: ${location}
    ${article}
    `,
    max_tokens: 500
  });

  console.log(`Prediction: ${response.body.generations[0].text}`);
};

/**
 * Uses the Cohere API to motivate the runner and tell them the distance left in the run
 * 
 * @param distanceLeft The integer number of kilometers that the user has left in their run.
 * @returns string containing motivitional words and remaining distance
 */
const generateMotivationalResponse = async (distanceLeft) => {
    const response = await cohere.generate({
        model: "command-xlarge-nightly",
        prompt: `Assume you are a motivational running coach.
             Give a short, motivational message to a runner that mentions that they have ${distanceLeft} kilometers left.`,
        max_tokens: 500
    });

    return response.body.generations[0].text;
}