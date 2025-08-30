function createNoiseCanvas()
{
    const canvasEl = document.createElement('canvas');
    canvasEl.width = 256;
    canvasEl.height = 256;

    const context = canvasEl.getContext('2d');
    context.fillRect(0, 0, 255, 255);

    const buff = new Uint8ClampedArray(256 * 4);

    for (let y = 0; y < 256; y++)
    {
        for (let x = 0; x < 256 * 4; x++)
        {
            buff[x] = Math.floor(Math.random() * 256);
        }

        const imageData = new ImageData(buff, 256, 1);
        context.putImageData(imageData, 0, y);
    }

    return context;
}

export const noiseTexture = createNoiseCanvas();