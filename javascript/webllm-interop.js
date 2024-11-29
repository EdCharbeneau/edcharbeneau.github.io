import * as webllm from "https://esm.run/@mlc-ai/web-llm";

var dotnetInstance;
var engine;
// Callback function to update model loading progress
const initProgressCallback = (initProgress) => {
	//console.log(initProgress);
	dotnetInstance.invokeMethodAsync("OnInitializing", initProgress);
}
//const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";

export async function initialize(selectedModel, dotnet) {
	dotnetInstance = dotnet;
	console.log(dotnet);
	//console.log("initialize start");
	engine = await webllm.CreateMLCEngine(
		selectedModel,
		{ initProgressCallback: initProgressCallback }, // engineConfig
	);
}

export async function complete(messages) {
	//console.log(messages);
	var reply = await engine.chat.completions.create({
		messages,
	});
	//console.log(reply);
	return reply;
}
