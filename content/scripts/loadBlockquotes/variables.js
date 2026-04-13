const QUOTE_LEVELS = 5;

const PrimaryGlobals = {
	// Border widths in "ex".
	aPrimary_borderwidth: [0.1667, 0.5, 0.8333],
	aPrimary_borderstyle: ["double", "solid", "dashed", "dotted"],
	nPrimary_MAX_LEVELS: QUOTE_LEVELS,
};

const DefaultVariables = {
	debug: false,
	enableBlockquoteTextColor: true,
	enableBlockquoteBackgroundColor: true,
	borderMode: 0,
	borderStyle: 1,
	borderWidth: 2,
	borderposition_bottom: false,
	borderposition_left: true,
	borderposition_right: false,
	borderposition_top: false,
	collapseBorders: false,
	colorHTMLmessages: true,
	usermsgcolors: true,
	hidesignatures: false,
	hidestructdelimiters: true,
	enableQuotecolorsOnCompose: true,
	enableUsermsgcolorsOnCompose: true,
	enableQuoteCollapse: false,
	quoteCollapseByDefault: false,
	quoteCollapseOnlySubquotes: true,
	primaryLightBlockquoteTextColor1: "hsl(32, 55%, 12%)",
	primaryLightBlockquoteTextColor2: "hsl(32, 55%, 12%)",
	primaryLightBlockquoteTextColor3: "hsl(32, 55%, 12%)",
	primaryLightBlockquoteTextColor4: "hsl(32, 55%, 12%)",
	primaryLightBlockquoteTextColor5: "hsl(32, 55%, 12%)",
	primaryLightBlockquoteBackgroundColor1: "hsla(350, 84%, 63%, 0.05)",
	primaryLightBlockquoteBackgroundColor2: "hsla(44, 100%, 50%, 0.05)",
	primaryLightBlockquoteBackgroundColor3: "hsla(74, 68%, 44%, 0.05)",
	primaryLightBlockquoteBackgroundColor4: "hsla(186, 66%, 46%, 0.05)",
	primaryLightBlockquoteBackgroundColor5: "hsla(236, 100%, 72%, 0.05)",
	primaryLightBorderColor: "hsl(36, 37%, 83%)",
	primaryLightTextColor: "hsl(31, 45%, 20%)",
	primaryLightBackgroundColor: "hsl(35, 36%, 95%)",
	primaryLightLinkColor: "hsl(43, 89%, 38%)",
	primaryLightLinkHoverColor: "hsl(43, 100%, 42%)",
	primaryLightLinkVisitedColor: "hsl(43, 100%, 42%)",
	primaryLightSignatureColor: "hsl(34, 28%, 60%)",
	primaryLightSignatureLinkColor: "hsl(43, 89%, 38%)",
	primaryDarkBlockquoteTextColor1: "hsl(33, 66%, 90%)",
	primaryDarkBlockquoteTextColor2: "hsl(33, 66%, 90%)",
	primaryDarkBlockquoteTextColor3: "hsl(33, 66%, 90%)",
	primaryDarkBlockquoteTextColor4: "hsl(33, 66%, 90%)",
	primaryDarkBlockquoteTextColor5: "hsl(33, 66%, 90%)",
	primaryDarkBlockquoteBackgroundColor1: "hsla(350, 84%, 63%, 0.05)",
	primaryDarkBlockquoteBackgroundColor2: "hsla(44, 100%, 50%, 0.05)",
	primaryDarkBlockquoteBackgroundColor3: "hsla(74, 68%, 44%, 0.05)",
	primaryDarkBlockquoteBackgroundColor4: "hsla(186, 66%, 46%, 0.05)",
	primaryDarkBlockquoteBackgroundColor5: "hsla(236, 100%, 72%, 0.05)",
	primaryDarkBorderColor: "hsl(33, 20%, 20%)",
	primaryDarkTextColor: "hsl(33, 66%, 90%)",
	primaryDarkBackgroundColor: "hsl(27, 14%, 15%)",
	primaryDarkLinkColor: "hsl(50, 100%, 46%)",
	primaryDarkLinkHoverColor: "hsl(46, 91%, 69%)",
	primaryDarkLinkVisitedColor: "hsl(46, 91%, 69%)",
	primaryDarkSignatureColor: "hsl(35, 27%, 55%)",
	primaryDarkSignatureLinkColor: "hsl(50, 100%, 46%)",
};

const DefaultVariableKeys = Object.keys(DefaultVariables);

// Exported globals for legacy Thunderbird background scripts.
void PrimaryGlobals;
void DefaultVariables;
void DefaultVariableKeys;
