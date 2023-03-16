import { useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { useWindowDimension } from '../hooks/window-dimensions'

const PreviewEditor = ({ markdownValue, showPreview, togglePreview, theme }) => {
	const { width } = useWindowDimension()

	useEffect(() => {
		const mdPre = document.querySelector('.wmde-markdown')
		if (theme === 'dark') {
			mdPre.classList.add('dark')
		} else {
			mdPre.classList.remove('dark')
		}
	}, [theme])

	const getContainerStyle = () => {
		let _width, _display
		if (showPreview) {
			_width = '100%'
			_display = 'block'
		} else if (width <= 600) {
			_width = '0%'
			_display = 'none'
		}

		return {
			width: _width,
			display: _display,
		}
	}

	const containerStyle = getContainerStyle()

	const editorStyle = showPreview ? { width: '75%', margin: '0 auto' } : {}

	return (
		<div className={`preview-container ${theme}`} style={containerStyle}>
			<h1>Preview</h1>

			<div className='markdown-preview' style={editorStyle}>
				<MDEditor.Markdown source={markdownValue} />
			</div>
		</div>
	)
}

export default PreviewEditor
