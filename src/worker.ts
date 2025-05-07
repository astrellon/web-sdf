import { WorkerRequests } from "./states";
import { renderScene1 } from "./render-scenes";

self.addEventListener('message', (e: MessageEvent<WorkerRequests>) =>
{
    if (e.data.type === 'render')
    {
        renderScene1(e.data);
        self.postMessage({ type: "render", buffer: e.data.buffer }, [e.data.buffer]);
    }
});