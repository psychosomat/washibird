const THEME_MODE_KEY = "primaryThemeMode";
const STATUS_CLEAR_DELAY_MS = 2000;

const modeSelect = document.getElementById("themeMode");
const statusNode = document.getElementById("status");

let clearStatusTimeout;
let currentOverrideLink = null;

function setStatus(text) {
	if (clearStatusTimeout) {
		clearTimeout(clearStatusTimeout);
		clearStatusTimeout = null;
	}

	statusNode.textContent = text;
	if (text) {
		clearStatusTimeout = setTimeout(() => {
			statusNode.textContent = "";
			clearStatusTimeout = null;
		}, STATUS_CLEAR_DELAY_MS);
	}
}

async function loadCurrentMode() {
	const result = await browser.storage.local.get(THEME_MODE_KEY);
	modeSelect.value = result[THEME_MODE_KEY] || "system";
	await applyThemeOverride(result[THEME_MODE_KEY] || "system");
}

async function applyThemeOverride(mode) {
	console.log("[WashiBird options] Applying theme override for mode:", mode);

	if (currentOverrideLink) {
		currentOverrideLink.remove();
		currentOverrideLink = null;
	}

	if (mode === "dark") {
		currentOverrideLink = document.createElement("link");
		currentOverrideLink.rel = "stylesheet";
		currentOverrideLink.href = "../skin/colors-dark-override.css";
		document.head.appendChild(currentOverrideLink);
		console.log("[WashiBird options] Loaded dark override CSS");
	} else if (mode === "light") {
		currentOverrideLink = document.createElement("link");
		currentOverrideLink.rel = "stylesheet";
		currentOverrideLink.href = "../skin/colors-light-override.css";
		document.head.appendChild(currentOverrideLink);
		console.log("[WashiBird options] Loaded light override CSS");
	} else {
		console.log("[WashiBird options] Using system mode (no override)");
	}
}

async function handleModeChange() {
	const mode = modeSelect.value;
	await browser.storage.local.set({ [THEME_MODE_KEY]: mode });
	await applyThemeOverride(mode);
	setStatus("Saved. Theme will update shortly.");
}

async function init() {
	await loadCurrentMode();
	modeSelect.addEventListener("change", () => {
		handleModeChange().catch((error) => {
			console.error("[WashiBird options] Failed to save mode:", error);
			setStatus("Failed to save preference.");
		});
	});
}

init().catch((error) => {
	console.error("[WashiBird options] Failed to initialize options:", error);
	setStatus("Failed to initialize preferences.");
});
