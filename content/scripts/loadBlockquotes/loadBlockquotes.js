let composeCssRegistration = null;
let messageDisplayRegistration = null;

const QUOTE_COMMANDS = new Set([
	"toggle-all-quotes",
	"collapse-one-more-level",
	"expand-one-more-level",
]);

async function registerComposeCss(cssCode) {
	if (composeCssRegistration) {
		await composeCssRegistration.unregister();
	}

	composeCssRegistration = await messenger.composeScripts.register({
		css: [{ code: cssCode }],
	});
}

async function registerMessageDisplayScripts() {
	if (messageDisplayRegistration) {
		await messageDisplayRegistration.unregister();
	}

	messageDisplayRegistration = await messenger.messageDisplayScripts.register({
		js: [
			{ code: `var variableList = ${JSON.stringify(variableList)};` },
			{ code: `var PrimaryGlobals = ${JSON.stringify(PrimaryGlobals)};` },
			{ file: "/content/scripts/loadBlockquotes/debug.js" },
			{ file: "/content/scripts/loadBlockquotes/msgDisplay.js" },
		],
	});
}

async function rebuildRegistrations() {
	await reloadAllVariables();
	const composeCss = ComposeCssObj.initMain() || "";
	await registerComposeCss(composeCss);
	await registerMessageDisplayScripts();
}

async function handleStorageChange(changes, areaName) {
	if (areaName !== "local" || Object.keys(changes).length === 0) {
		return;
	}

	consoleDebug(
		"[PrimaryDebug] Storage changed, rebuilding blockquote scripts.",
	);
	await rebuildRegistrations();
}

async function handleCommand(command) {
	if (
		!QUOTE_COMMANDS.has(command) ||
		variableList.enableQuoteCollapse !== true
	) {
		return;
	}

	const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
	if (!tab) {
		return;
	}

	try {
		await browser.tabs.sendMessage(tab.id, command);
	} catch (_error) {
		consoleDebug(
			"[PrimaryDebug] Quote command ignored because message listener is unavailable.",
		);
	}
}

messenger.storage.onChanged.addListener((changes, areaName) => {
	handleStorageChange(changes, areaName).catch((error) => {
		console.error("[PrimaryDebug] Failed to process storage change:", error);
	});
});

browser.commands.onCommand.addListener((command) => {
	handleCommand(command).catch((error) => {
		console.error("[PrimaryDebug] Failed to handle command:", error);
	});
});

rebuildRegistrations().catch((error) => {
	console.error(
		"[PrimaryDebug] Failed to initialize blockquote scripts:",
		error,
	);
});
