import MDEditor from '@uiw/react-md-editor'
import { PreviewIcon, PreviewOffIcon } from './icons'

const PreviewEditor = ({ markdownValue, showPreview, togglePreview }) => {
	const containerStyle = {
		width: showPreview ? '100%' : '50%',
	}

	const editorStyle = showPreview ? { width: '75%', margin: '0 auto' } : {}

	return (
		<div className='preview-container' style={containerStyle}>
			<h1>Preview</h1>
			<button onClick={() => togglePreview(!showPreview)} className='btn preview-btn'>
				{showPreview ? <PreviewOffIcon /> : <PreviewIcon />}
			</button>
			<div className='markdown-preview' style={editorStyle}>
				<MDEditor.Markdown source={markdownValue} />
			</div>
		</div>
	)
}

export default PreviewEditor
