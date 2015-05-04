
// Cache the project reference
var myProject = app.project;

// Add New Composition
var myComposition = myProject.items.addComp("Auto Text Creation", 1920, 1080, 1.0, 120, 12);

// Add Layers to the composition, and store their reference in variables
var mySolid = myComposition.layers.addSolid([240/255,200/255,100/255], "Background", 1920, 1080, 100.00);
var myTextLayer = myComposition.layers.addText( "Texto" );

// Access the text layer source text property and define their base properties
var myTextDocument = myTextLayer.property("Source Text");
var textDocument = myTextDocument.value;

textDocument.resetCharStyle();
textDocument.fontSize = 60;
textDocument.fillColor = [0.2, 0.4, 0.6];
textDocument.strokeColor = [0.2, 1, 0.2];
textDocument.strokeWidth = 1;
textDocument.font = "OpenSans";
textDocument.strokeOverFill = true;
textDocument.applyStroke = true;
textDocument.applyFill = true;
textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
textDocument.tracking = 50;

myTextDocument.setValue(textDocument);

// Create an array of phrases
var content =
[
  "Wake up",
  "Shut up",
  "It's time",
  "Smell the coffee"
]

var seconds  = 0; //Initial second of text animation
var step     = 2; //Step in seconds to change the source text

// Loop trough content array and set phrases
for( text in content ) {
  myTextDocument.setValueAtTime(seconds, new TextDocument( content[text] ));
  seconds += step;
}
