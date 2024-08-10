import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const foldingProvider = vscode.languages.registerFoldingRangeProvider({ language: 'plaintext' }, {
		provideFoldingRanges(document: vscode.TextDocument, context: vscode.FoldingContext, token: vscode.CancellationToken) {
			const ranges: vscode.FoldingRange[] = [];
			for (let i = 0; i < document.lineCount; i++) {
				const line = document.lineAt(i);

				if (line.text.includes("#SECTION")) {
					console.log(line)
				}

				ranges.push(new vscode.FoldingRange(1, 2));
			}
			return ranges;
		}
	});

	context.subscriptions.push(foldingProvider);
}

// This method is called when your extension is deactivated
export function deactivate() { }
