import * as webllm from "https://esm.run/@mlc-ai/web-llm";

var engine; // <-- hold a reference to MLCEngine in the module
var dotnetInstance; // <-- hold a reference to the WebLLMService instance in the module

// Callback function to update model loading progress
const initProgressCallback = (initProgress) => {
    // console.log(initProgress);
    // Make a call to.NET with the updated status
    dotnetInstance.invokeMethodAsync("OnInitializing", initProgress);
}

export async function initialize(selectedModel, dotnet) {
    dotnetInstance = dotnet; // <-- WebLLMService insntance
    //console.log("initialize start");
    engine = await webllm.CreateMLCEngine(
        selectedModel,
        { initProgressCallback: initProgressCallback }, // engineConfig
    );
}

export async function completeStream(messages) {
	// Chunks is an AsyncGenerator object
  console.log("completeStream");
  console.log(dotnetInstance);
	const chunks = await engine.chat.completions.create({
		messages,
		temperature: 1,
		stream: true, // <-- Enable streaming
		stream_options: { include_usage: true },
	});

	for await (const chunk of chunks) {
	  console.log(chunk);
    console.log(dotnetInstance);
		await dotnetInstance.invokeMethodAsync("ReceiveChunkCompletion", chunk);
	}
}

