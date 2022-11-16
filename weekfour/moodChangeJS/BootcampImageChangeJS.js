
import url from 'url';
import { createRunner } from '@puppeteer/replay';

export const flow = {
    "title": "BootcampImageChangeJS",
    "steps": [
        {
            "type": "setViewport",
            "width": 1249,
            "height": 372,
            "deviceScaleFactor": 1,
            "isMobile": false,
            "hasTouch": false,
            "isLandscape": false
        },
        {
            "type": "navigate",
            "url": "http://127.0.0.1:5500/index.html",
            "assertedEvents": [
                {
                    "type": "navigation",
                    "url": "http://127.0.0.1:5500/index.html",
                    "title": "Mood Change JS"
                }
            ]
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "aria/Before"
                ],
                [
                    "body > div > div.button > button.btn.btn-warning"
                ]
            ],
            "offsetY": 19.026824951171875,
            "offsetX": 26.90899658203125,
            "duration": 3639.2999999821186
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "aria/After"
                ],
                [
                    "body > div > div.button > button.btn.btn-success"
                ]
            ],
            "offsetY": 16.026824951171875,
            "offsetX": 27.696044921875
        }
    ]
};

export async function run(extension) {
  const runner = await createRunner(flow, extension);
  await runner.run();
}

if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  await run();
}