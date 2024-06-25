import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div class="main_save_box">
			<div class="header_section">
				<h1>{attributes.memberName}</h1>
				<h3>{attributes.memberStatus}</h3>
			</div>
			<div class="profile_section">
				<div class="short_bio">
					<h1>{attributes.memberName}</h1>
					<p>{attributes.memberShortBio}</p>
				</div>
				<div class="image_box">
					<img src={attributes.memberPicture}></img>
				</div>
			</div>
			<hr></hr>
			<div class="more_about_section">
				<h1>More About Me</h1>
				<p>
					{attributes.moreAboutMember}
				</p>
			</div>
		</div>
	);
}
