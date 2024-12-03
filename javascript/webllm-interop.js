import * as webllm from "https://esm.run/@mlc-ai/web-llm";

var dotnetInstance;
var engine;

// Callback function to update model loading progress
const initProgressCallback = (initProgress) => {
	//console.log(initProgress);
	dotnetInstance.invokeMethodAsync("OnInitializing", initProgress);
}

export async function initialize(selectedModel, dotnet) {
	dotnetInstance = dotnet;
	console.log(dotnet);
	//console.log("initialize start");
	engine = await webllm.CreateMLCEngine(
		selectedModel,
		{ initProgressCallback: initProgressCallback }, // engineConfig
	);
}

//export async function complete(messages) {
//	console.log(messages);
//	var reply = await engine.chat.completions.create({
//		messages,
//	});
//	console.log(reply);
//	return reply;
//}

export async function completeStream(messages, dotnetReceiver) {
	// Chunks is an AsyncGenerator object
	const chunks = await engine.chat.completions.create({
		messages,
		temperature: 1,
		stream: true, // <-- Enable streaming
		stream_options: { include_usage: true },
	});

	for await (const chunk of chunks) {
		//console.log(chunk);
		await dotnetReceiver.invokeMethodAsync("ReceiveChunkCompletion", chunk);
	}
}
