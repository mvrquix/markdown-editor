import { FileIcon } from './icons'
import { formatCreateDate } from '../utils'

const Sidebar = ({ activeDocument, handleUpdateActiveDocument, documents, handleCreateNewDocument, showMenu }) => {
	return (
		<div className={`side-bar ${showMenu ? 'active' : ''}`}>
			<h3>My Documents</h3>
			<button onClick={handleCreateNewDocument} className='btn new-btn'>
				+ New Document
			</button>
			<ul className='document-list'>
				{documents.map((document) => {
					const isActive = document.name === activeDocument.name
					return (
						<li
							onClick={() => handleUpdateActiveDocument(document)}
							key={document.name}
							className='document-list__item'>
							<i className='icon'>
								<FileIcon />
							</i>
							<div className='document-list__item-details'>
								<span className='date'>{formatCreateDate(document.createDate)}</span>
								<span className='name' style={{ color: isActive ? '#e46643' : '#FFFFFF' }}>
									{document.name}
								</span>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Sidebar
