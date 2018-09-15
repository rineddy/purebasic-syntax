import {
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams
} from 'vscode-languageserver';

/**
 * This handler provides the initial list of the completion items.
 * @param txtDocPositionParams
 */
export function getCompletionItems(txtDocPositionParams: TextDocumentPositionParams): CompletionItem[] {
	// The pass parameter contains the position of the text document in
	// which code complete got requested. For the example we ignore this
	// info and always provide the same completion items.
	return [
		{
			label: 'Procedure',
			kind: CompletionItemKind.Keyword,
			data: 1
		},
		{
			label: 'EndProcedure',
			kind: CompletionItemKind.Keyword,
			data: 2
		}
	];
}

/**
 * This handler resolve additional information for the item selected in the completion list.
 * @param item
 */
export function getCompletionDescription(item: CompletionItem): CompletionItem {
	if (item.data === 1) {
		(item.detail = 'Procedure details'),
			(item.documentation = 'Procedure documentation');
	} else if (item.data === 2) {
		(item.detail = 'EndProcedure details'),
			(item.documentation = 'EndProcedure documentation');
	}
	return item;
}
