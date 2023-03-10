// import { cohere } from "cohere-ai";
import cohere from "cohere-ai";

// Initialize the cohere client with the trial API key
cohere.init('ftC04BtCJRft9XSpIETUXY50QHIz7BKmPWaZee4p');

export const generateLandmarkIntro = async (location) => {
  const response = await cohere.generate({
    model: "command-xlarge-nightly",
    prompt: `Pretend to be a running instructor and write one sentence to let your class know that they are passing by the location below.
    
            ${location}`,
    max_tokens: 500
  });
  return response.body.generations[0].text;
};

export const generateLandmarkDetails = async (location) => {
  const response = await cohere.generate({
    model: "command-xlarge-nightly",
    prompt: `Give a 4-sentence long description of the following location that sounds like it was written by a tour guide.
    
            ${location}`,
    max_tokens: 500
});

return response.body.generations[0].text;
}

/**
 * Uses the Cohere API to motivate the runner and tell them the distance left in the run
 * 
 * @param distanceLeft The integer number of kilometers that the user has left in their run.
 * @returns string containing motivitional words and remaining distance
 */
export const generateMotivationalResponse = async (distanceLeft) => {
    const response = await cohere.generate({
        model: "command-xlarge-nightly",
        prompt: `Assume you are a motivational running coach.
             Give a short, motivational message to a runner that mentions that they have ${distanceLeft} kilometers left.`,
        max_tokens: 500
    });

    return response.body.generations[0].text;
}
