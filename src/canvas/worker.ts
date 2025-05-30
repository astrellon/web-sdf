import { WorkerRequests } from "./states";
import { renderScene2 } from "./render-scenes";

self.addEventListener('message', (e: MessageEvent<WorkerRequests>) =>
{
    if (e.data.type === 'render')
    {
        renderScene2(e.data);
        self.postMessage({ type: "render", buffer: e.data.buffer }, [e.data.buffer]);
    }
});