
import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';


import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	// Custom Functions 
	// Name
	function nameUpdate(event) {
		setAttributes({ memberName: event.target.value })
	}
	// status
	function statusUpdate(event) {
		setAttributes({ memberStatus: event.target.value })
	}
	// shortBio
	function shortBioUpdate(event) {
		setAttributes({ memberShortBio: event.target.value })
	}
	// Image
	function pictureUpdate(media) {
		setAttributes({ memberPicture: media.url })
	}
	// More About
	function moreAboutUpdate(event) {
		setAttributes({ moreAboutMember: event.target.value })
	}

	return (
		<div class="main-container">
			<div class="name-box box_1">
				<label> Name </label>
				<input type='text' value={attributes.memberName} onChange={nameUpdate} />
			</div>
			<div class="status-box box_2">
				<label> Status </label>
				<input type='text' value={attributes.memberStatus} onChange={statusUpdate} />
			</div>
			<div class="shortBio-box box_3">
				<label> ShortBio </label>
				<textarea name="shortBio" id="shortBio_id" value={attributes.memberShortBio} onChange={shortBioUpdate} ></textarea>
			</div>
			<div class="image-box box_4">
				<label> Picture </label>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={pictureUpdate}
						allowedTypes={['image']}
						value={attributes.memberPicture}
						render={({ open }) => (
							<button onClick={open} id="button">
								{__('Upload Image', 'static-block')}
							</button>
						)}
					/>
				</MediaUploadCheck>
				<img id='image_preview_id' src={attributes.memberPicture} />
			</div>
			<div class="more-about-box box_5">
				<label> More About </label>
				<textarea name="moreAbout" id="moreAbout_id" value={attributes.moreAboutMember} onChange={moreAboutUpdate} ></textarea>
			</div>
		</div>

	);
}
