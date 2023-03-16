import { useEffect, useRef } from 'react'
import MDEditor from '@uiw/react-md-editor'
import rehypeSanitize from 'rehype-sanitize'

const MarkdownEditor = ({ markdownValue, handleEditDocument, showPreview, theme }) => {
	const markdownRef = useRef(null)

	useEffect(() => {
		if (markdownRef.current) {
			const md = document.querySelector('.w-md-editor')
			const mdPre = document.querySelector('.wmde-markdown')
			md.classList.remove('wmde-markdown-var')
			mdPre.classList.remove('wmde-markdown-color')
		}
	}, [])

	useEffect(() => {
		const mdInput = document.querySelector('.w-md-editor-text-input')
		if (theme === 'dark') {
			mdInput.classList.add('dark')
		} else {
			mdInput.classList.remove('dark')
		}
	}, [theme])

	const style = {
		display: showPreview ? 'none' : 'block',
	}

	return (
		<div className={`markdown-container ${theme}`} style={style}>
			<h1>Markdown</h1>
			<div className='markdown-editor'>
				<MDEditor
					ref={markdownRef}
					value={markdownValue}
					onChange={handleEditDocument}
					hideToolbar={true}
					enableScroll={false}
					visibleDragbar={false}
					height='100vh'
					preview='edit'
					previewOptions={{
						rehypePlugins: [[rehypeSanitize]],
					}}
				/>
			</div>
		</div>
	)
}

export default MarkdownEditor
