import React, { useEffect } from "react";
import mermaid from "mermaid";

// --ifm-color-success: #35c481;
// --ifm-color-info: #536DFE;
// --ifm-color-warning: #FFD03B;
// --ifm-color-danger: #F86D70;

// .node general for all nodes
// .nodeWarning .nodeDanger alternative background fills
// .nodeTezos tezos fill and white text

mermaid.initialize({
	startOnLoad: true,
	themeCSS: 
		`
			.node rect { fill: #f7f8fe; stroke: #000000 } 
			.node polygon { fill: #f7f8fe; stroke: #000000 } 
			.node path { fill: #f7f8fe; stroke: #000000 } 
			.nodeWarning > rect{fill:#FFD03B; stroke:#000000;}
			.nodeDanger > rect{fill: #F86D70; stroke:#000000;} 
			.nodeTezos > .label{color: #ffffff} 
			.nodeTezos > rect {fill: #536DFE}
		`
});

const Mermaid = ({ chart }) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return <div className="mermaid">{chart}</div>;
};

export default Mermaid;