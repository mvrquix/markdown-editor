import { useState } from 'react'
import { MenuIcon, FileIcon, TrashIcon, SaveIcon } from './icons'

const TopBar = ({
	activeDocument,
	hasChanges,
	handleSaveChanges,
	handleDocumentRename,
	showMenu,
	toggleMenu,
	handleDeleteDocument,
}) => {
	const [showDeleteModal, toggleDeleteModal] = useState(false)

	const handleConfirmDelete = () => {
		handleDeleteDocument(activeDocument)
	}

	return (
		<div className='top-bar'>
			<div className='top-bar__left'>
				<button onClick={() => toggleMenu(!showMenu)} className='btn nav-btn'>
					<MenuIcon />
				</button>
				<h1>Markdown</h1>
				<div className='active-document'>
					<i className='icon'>
						<FileIcon />
					</i>
					<div className='active-document__details'>
						<span className='subtitle'>Document Name</span>
						<span className='title'>
							<input onChange={handleDocumentRename} value={activeDocument.name} />
						</span>
					</div>
				</div>
			</div>
			<div className='top-bar__right'>
				<button onClick={() => toggleDeleteModal(true)} className='btn delete-btn'>
					<TrashIcon />
				</button>
				<button
					onClick={handleSaveChanges}
					className='btn save-btn'
					disabled={!hasChanges}
					style={{ opacity: hasChanges ? 1 : 0.4 }}>
					<i className='icon'>
						<SaveIcon />
					</i>
					<span>Save Changes</span>
				</button>
			</div>
			<div
				onClick={() => toggleDeleteModal(false)}
				className='delete-modal-overlay'
				style={{ display: showDeleteModal ? 'block' : 'none' }}>
				<div className='delete-modal'>
					<h3>Delete this document?</h3>
					<p>
						Are you sure you want to delete the '{activeDocument.name}' document and its contents? This action cannot be
						reversed.
					</p>
					<button onClick={handleConfirmDelete} className='btn delete-doc-btn'>
						Confirm & Delete
					</button>
				</div>
			</div>
		</div>
	)
}

export default TopBar
