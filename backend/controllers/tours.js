import {
    getNearbyArticle,
    getArticleContent
} from "./article.js";

import {
    generateLandmarkIntro,
    generateLandmarkDetails,
    generateMotivationalResponse
} from "./tour_guide.js";

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const generateTourMessage = async (req, res) => {
    try {
        // Assuming the format of the request body
        // Lat, long, disRemaining

        // Get the overview blurb from the wiki page of the nearest landmark to the runner
        const article = await getNearbyArticle(req.body.lat, req.body.long);
        const content = await getArticleContent(article.title);

        // Use Cohere to generate a summary of the landmark in the fashion that a tour guide would 
        // deliver it
        let message = "";
        // message += await generateLandmarkDetails(article.title, content);
        // message += await generateMotivationalResponse(req.body.disRemaining);
        message += await generateLandmarkIntro(article.title);
        message += await generateLandmarkDetails(article.title);
        message += await generateMotivationalResponse(req.body.disRemaining);

        res.status(201).json(message);
    } catch (err) {
        // Need to fix this
        res.status(500).send("Something went wrong");
    }
}