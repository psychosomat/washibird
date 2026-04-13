// =====================================================================
// Primary Theme — color definitions for browser.theme.update() (chrome)
// =====================================================================
const LIGHT_COLORS = {
	frame: "hsl(36, 37%, 92%)",
	tab_background_text: "hsl(31, 45%, 20%)",
	toolbar: "hsl(34, 36%, 88%)",
	toolbar_text: "hsl(35, 32%, 30%)",
	toolbar_field: "hsl(35, 36%, 95%)",
	toolbar_field_text: "hsl(35, 32%, 30%)",
	toolbar_field_border: "hsl(36, 37%, 83%)",
	sidebar: "hsl(35, 35%, 90%)",
	sidebar_text: "hsl(31, 45%, 20%)",
	sidebar_border: "hsl(36, 37%, 83%)",
	sidebar_highlight: "hsl(34, 36%, 88%)",
	sidebar_highlight_text: "hsl(31, 45%, 20%)",
	popup: "hsl(35, 36%, 95%)",
	popup_text: "hsl(35, 32%, 30%)",
	popup_border: "hsl(36, 37%, 83%)",
	popup_highlight: "hsla(186, 66%, 46%, 0.2)",
	popup_highlight_text: "hsl(31, 45%, 20%)",
	tab_selected: "hsl(36, 37%, 92%)",
	tab_line: "hsl(36, 37%, 83%)",
	tab_loading: "hsl(205, 66%, 46%)",
	icons: "hsl(34, 27%, 40%)",
	icons_attention: "hsl(205, 63%, 39%)",
	primary_whiter: "hsl(36, 37%, 97%)",
	primary_white: "hsl(35, 36%, 95%)",
	primary_gray_10: "hsl(36, 37%, 92%)",
	primary_gray_20: "hsl(35, 35%, 90%)",
	primary_gray_30: "hsl(34, 36%, 88%)",
	primary_gray_40: "hsl(36, 37%, 83%)",
	primary_gray_50: "hsl(34, 37%, 67%)",
	primary_gray_60: "hsl(34, 28%, 60%)",
	primary_gray_70: "hsl(31, 23%, 50%)",
	primary_gray_80: "hsl(34, 27%, 40%)",
	primary_gray_90: "hsl(34, 30%, 37%)",
	primary_gray_100: "hsl(35, 32%, 30%)",
	primary_black: "hsl(31, 45%, 20%)",
	primary_blacker: "hsl(32, 55%, 12%)",
	primary_red_300: "hsl(4, 54%, 61%)",
	primary_red_500: "hsl(4, 72%, 55%)",
	primary_red_700: "hsl(4, 56%, 48%)",
	primary_red_900: "hsl(4, 66%, 30%)",
	primary_orange_300: "hsl(26, 66%, 57%)",
	primary_orange_500: "hsl(21, 82%, 55%)",
	primary_orange_700: "hsl(18, 69%, 50%)",
	primary_orange_900: "hsl(24, 96%, 35%)",
	primary_yellow_300: "hsl(43, 71%, 67%)",
	primary_yellow_500: "hsl(43, 78%, 52%)",
	primary_yellow_700: "hsl(43, 100%, 42%)",
	primary_yellow_900: "hsl(43, 89%, 38%)",
	primary_green_300: "hsl(154, 58%, 65%)",
	primary_green_500: "hsl(154, 47%, 49%)",
	primary_green_700: "hsl(155, 52%, 38%)",
	primary_green_900: "hsl(165, 63%, 29%)",
	primary_blue_300: "hsl(198, 39%, 56%)",
	primary_blue_500: "hsl(205, 66%, 46%)",
	primary_blue_700: "hsl(205, 63%, 39%)",
	primary_blue_900: "hsl(205, 95%, 25%)",
	primary_violet_300: "hsl(270, 50%, 74%)",
	primary_violet_500: "hsl(266, 31%, 57%)",
	primary_violet_700: "hsl(267, 37%, 43%)",
	primary_violet_900: "hsl(266, 70%, 30%)",
	primary_highlight_red: "hsla(350, 84%, 63%, 0.2)",
	primary_highlight_orange: "hsla(27, 100%, 50%, 0.2)",
	primary_highlight_yellow: "hsla(44, 100%, 50%, 0.2)",
	primary_highlight_green: "hsla(74, 68%, 44%, 0.2)",
	primary_highlight_blue: "hsla(186, 66%, 46%, 0.2)",
	primary_highlight_violet: "hsla(236, 100%, 72%, 0.2)",
};

const DARK_COLORS = {
	frame: "hsl(27, 14%, 15%)",
	tab_background_text: "hsl(33, 66%, 90%)",
	toolbar: "hsl(30, 15%, 13%)",
	toolbar_text: "hsl(34, 18%, 62%)",
	toolbar_field: "hsl(32, 19%, 13%)",
	toolbar_field_text: "hsl(34, 50%, 80%)",
	toolbar_field_border: "hsl(33, 20%, 20%)",
	sidebar: "hsl(30, 15%, 13%)",
	sidebar_text: "hsl(34, 50%, 80%)",
	sidebar_border: "hsl(33, 20%, 20%)",
	sidebar_highlight: "hsl(30, 19%, 17%)",
	sidebar_highlight_text: "hsl(33, 66%, 90%)",
	popup: "hsl(32, 19%, 13%)",
	popup_text: "hsl(34, 50%, 80%)",
	popup_border: "hsl(33, 20%, 20%)",
	popup_highlight: "hsla(186, 66%, 46%, 0.2)",
	popup_highlight_text: "hsl(33, 66%, 90%)",
	tab_selected: "hsl(27, 14%, 15%)",
	tab_line: "hsl(33, 20%, 20%)",
	tab_loading: "hsl(198, 62%, 57%)",
	icons: "hsl(34, 18%, 62%)",
	icons_attention: "hsl(198, 57%, 55%)",
	primary_whiter: "hsl(33, 66%, 90%)",
	primary_white: "hsl(34, 50%, 80%)",
	primary_gray_10: "hsl(34, 18%, 62%)",
	primary_gray_20: "hsl(35, 27%, 55%)",
	primary_gray_30: "hsl(34, 24%, 30%)",
	primary_gray_40: "hsl(33, 22%, 30%)",
	primary_gray_50: "hsl(33, 20%, 20%)",
	primary_gray_60: "hsl(30, 19%, 17%)",
	primary_gray_70: "hsl(27, 14%, 15%)",
	primary_gray_80: "hsl(32, 19%, 13%)",
	primary_gray_90: "hsl(30, 15%, 13%)",
	primary_gray_100: "hsl(27, 15%, 12%)",
	primary_black: "hsl(26, 16%, 9%)",
	primary_blacker: "hsl(30, 20%, 8%)",
	primary_red_300: "hsl(4, 100%, 68%)",
	primary_red_500: "hsl(4, 65%, 60%)",
	primary_red_700: "hsl(4, 90%, 61%)",
	primary_red_900: "hsl(4, 77%, 38%)",
	primary_orange_300: "hsl(22, 92%, 64%)",
	primary_orange_500: "hsl(22, 92%, 57%)",
	primary_orange_700: "hsl(21, 88%, 51%)",
	primary_orange_900: "hsl(20, 80%, 41%)",
	primary_yellow_300: "hsl(46, 91%, 69%)",
	primary_yellow_500: "hsl(50, 100%, 46%)",
	primary_yellow_700: "hsl(43, 100%, 42%)",
	primary_yellow_900: "hsl(39, 92%, 33%)",
	primary_green_300: "hsl(150, 66%, 53%)",
	primary_green_500: "hsl(154, 52%, 49%)",
	primary_green_700: "hsl(154, 61%, 39%)",
	primary_green_900: "hsl(155, 81%, 24%)",
	primary_blue_300: "hsl(198, 39%, 56%)",
	primary_blue_500: "hsl(198, 62%, 57%)",
	primary_blue_700: "hsl(198, 57%, 55%)",
	primary_blue_900: "hsl(198, 75%, 35%)",
	primary_violet_300: "hsl(256, 63%, 74%)",
	primary_violet_500: "hsl(263, 60%, 67%)",
	primary_violet_700: "hsl(256, 52%, 57%)",
	primary_violet_900: "hsl(256, 44%, 50%)",
	primary_highlight_red: "hsla(350, 84%, 63%, 0.2)",
	primary_highlight_orange: "hsla(27, 100%, 50%, 0.2)",
	primary_highlight_yellow: "hsla(44, 100%, 50%, 0.2)",
	primary_highlight_green: "hsla(74, 68%, 44%, 0.2)",
	primary_highlight_blue: "hsla(186, 66%, 46%, 0.2)",
	primary_highlight_violet: "hsla(236, 100%, 72%, 0.2)",
};

// =====================================================================
// CSS file paths for injection into content tabs
// =====================================================================
const MAIN_CSS = "/content/skin/messenger.css";
const DARK_OVERRIDE_CSS = "/content/skin/colors-dark-override.css";
const LIGHT_OVERRIDE_CSS = "/content/skin/colors-light-override.css";

// =====================================================================
// Get current mode from storage
// =====================================================================
async function getMode() {
	const result = await browser.storage.local.get("primaryThemeMode");
	return result.primaryThemeMode || "system";
}

// =====================================================================
// 1. Chrome-level theme via browser.theme.update()
// =====================================================================
async function applyChromeTheme(mode) {
	let colors;
	if (mode === "dark") {
		colors = DARK_COLORS;
	} else if (mode === "light") {
		colors = LIGHT_COLORS;
	} else {
		if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
			colors = DARK_COLORS;
		} else {
			colors = LIGHT_COLORS;
		}
	}
	browser.theme.update({ colors });
}

// =====================================================================
// 2. Inject CSS into content tabs (about:3pane, about:message, etc.)
// =====================================================================
async function injectCssIntoTab(tabId, mode) {
	try {
		await messenger.tabs.insertCSS(tabId, { file: MAIN_CSS });
	} catch (_e) {
		/* tab may not support CSS injection */
	}

	// Remove both overrides first, then apply the correct one
	try {
		await messenger.tabs.removeCSS(tabId, { file: DARK_OVERRIDE_CSS });
	} catch (_e) {}
	try {
		await messenger.tabs.removeCSS(tabId, { file: LIGHT_OVERRIDE_CSS });
	} catch (_e) {}

	if (mode === "dark") {
		try {
			await messenger.tabs.insertCSS(tabId, { file: DARK_OVERRIDE_CSS });
		} catch (_e) {}
	} else if (mode === "light") {
		try {
			await messenger.tabs.insertCSS(tabId, { file: LIGHT_OVERRIDE_CSS });
		} catch (_e) {}
	}
	// system mode: no override — CSS @media handles it
}

async function injectCssIntoAllTabs(mode) {
	const tabs = await messenger.tabs.query({});
	for (const tab of tabs) {
		await injectCssIntoTab(tab.id, mode);
	}
}

// =====================================================================
// 3. Message display CSS (for the message preview pane)
// =====================================================================
let msgDisplayRegistration = null;

async function registerMessageDisplayCss(mode) {
	if (msgDisplayRegistration) {
		try {
			const reg = await msgDisplayRegistration;
			await reg.unregister();
		} catch (_e) {}
	}

	const cssEntries = [{ file: MAIN_CSS }];
	if (mode === "dark") {
		cssEntries.push({ file: DARK_OVERRIDE_CSS });
	} else if (mode === "light") {
		cssEntries.push({ file: LIGHT_OVERRIDE_CSS });
	}

	msgDisplayRegistration = messenger.messageDisplayScripts.register({
		css: cssEntries,
	});
}

// =====================================================================
// Main apply function — orchestrates all three layers
// =====================================================================
async function applyTheme() {
	const mode = await getMode();
	await applyChromeTheme(mode);
	await injectCssIntoAllTabs(mode);
	await registerMessageDisplayCss(mode);
}

// =====================================================================
// Listeners
// =====================================================================

// Apply on startup
applyTheme();

// Re-apply when preference changes in storage
browser.storage.onChanged.addListener((changes) => {
	if (changes.primaryThemeMode) {
		applyTheme();
	}
});

// Re-apply when system color scheme changes (for system mode)
if (window.matchMedia) {
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", () => {
			applyTheme();
		});
}

// Inject CSS when a new tab is created
messenger.tabs.onCreated.addListener(async (tab) => {
	const mode = await getMode();
	// Small delay to let the tab content load
	setTimeout(() => injectCssIntoTab(tab.id, mode), 250);
});

// Re-inject CSS when a tab finishes loading (navigation)
messenger.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
	if (changeInfo.status === "complete") {
		const mode = await getMode();
		await injectCssIntoTab(tabId, mode);
	}
});
