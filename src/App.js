import { useEffect, useState } from 'react'
import Sidebar from './components/side-bar'
import TopBar from './components/top-bar'
import MarkdownEditor from './components/markdown'
import PreviewEditor from './components/preview'

const data = [
	{
		createdAt: '04-01-2022',
		name: 'untitled-document.md',
		content: '',
	},
	{
		createdAt: '04-01-2022',
		name: 'welcome.md',
		content:
			"# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
	},
]

const INITIAL_DOCUMENT = { name: 'welcome.md', content: data[1].content, createDate: new Date() }
const BLANK_DOCUMENT = { name: 'untitled.md', content: '', createDate: new Date() }

function App() {
	const [showMenu, toggleMenu] = useState(false)
	const [documents, setDocuments] = useState([INITIAL_DOCUMENT])
	const [activeDocument, setActiveDocument] = useState(INITIAL_DOCUMENT)
	const [markdownValue, setMarkdownValue] = useState(activeDocument.content)
	const [showPreview, togglePreview] = useState(false)
	const [hasChanges, toggleHasChanges] = useState(false)

	useEffect(() => {
		// if all documents are deleted
		if (documents.length === 0) {
			setDocuments([BLANK_DOCUMENT])
			setActiveDocument(BLANK_DOCUMENT)
			setMarkdownValue(BLANK_DOCUMENT.content)
		}
	}, [documents])

	const handleUpdateActiveDocument = (document) => {
		setActiveDocument(document)
		setMarkdownValue(document.content)
		toggleHasChanges(false)
	}

	const handleCreateNewDocument = () => {
		setDocuments([...documents, BLANK_DOCUMENT])
		setActiveDocument(BLANK_DOCUMENT)
		setMarkdownValue(BLANK_DOCUMENT.content)
		toggleHasChanges(false)
	}

	const handleEditDocument = (value) => {
		setMarkdownValue(value)
		setActiveDocument({
			...activeDocument,
			content: value,
		})
		toggleHasChanges(true)
	}

	const handleDocumentRename = (event) => {
		const { value } = event.target
		const doc = documents.find((d) => d.name === activeDocument.name)
		doc.name = value
		setActiveDocument({
			...activeDocument,
			name: value,
		})
		toggleHasChanges(true)
	}

	const handleSaveChanges = () => {
		const newDocs = documents.map((d) => {
			if (d.name === activeDocument.name) return activeDocument
			else return d
		})
		setDocuments(newDocs)
		toggleHasChanges(false)
	}

	const handleDeleteDocument = (document) => {
		const newDocs = documents.filter((d) => d.name !== document.name)
		setDocuments(newDocs)
	}

	return (
		<div className='wrapper'>
			<Sidebar
				activeDocument={activeDocument}
				handleUpdateActiveDocument={handleUpdateActiveDocument}
				documents={documents}
				handleCreateNewDocument={handleCreateNewDocument}
				showMenu={showMenu}
			/>
			<div className='container'>
				<TopBar
					activeDocument={activeDocument}
					hasChanges={hasChanges}
					handleDocumentRename={handleDocumentRename}
					handleSaveChanges={handleSaveChanges}
					showMenu={showMenu}
					toggleMenu={toggleMenu}
					handleDeleteDocument={handleDeleteDocument}
				/>
				<div className='content'>
					<MarkdownEditor
						markdownValue={markdownValue}
						handleEditDocument={handleEditDocument}
						showPreview={showPreview}
					/>
					<PreviewEditor markdownValue={markdownValue} showPreview={showPreview} togglePreview={togglePreview} />
				</div>
			</div>
		</div>
	)
}

export default App
