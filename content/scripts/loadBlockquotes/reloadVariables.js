var variableList = {};

async function reloadAllVariables() {
	const saved = await messenger.storage.local.get(DefaultVariableKeys);

	for (const key of Object.keys(variableList)) {
		delete variableList[key];
	}

	Object.assign(variableList, DefaultVariables, saved);
	return variableList;
}

reloadAllVariables().catch((error) => {
	console.error(
		"[PrimaryDebug] Failed to initialize blockquote variables:",
		error,
	);
});
