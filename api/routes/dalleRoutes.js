import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.send('Hello from DALL-E!');
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        // Call the summarization API first
        const aiSummaryResponse = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Summarize this for the DALL-E image generator prompt:\n\n ${prompt}`,
            temperature: 0.7,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        const summary = aiSummaryResponse.data['choices'][0]['text'];

        // Call the image generation API with the summarized prompt
        const aiImageResponse = await openai.createImage({
            prompt: summary,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = aiImageResponse.data.data[0].b64_json;
        res.status(200).json({ photo: image });

    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message);
    }
});

export default router;
