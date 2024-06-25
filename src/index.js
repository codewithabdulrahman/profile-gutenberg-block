
import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	attributes: {
		memberName:{ type: 'string'},
		memberStatus:{ type: 'string'},
		memberShortBio:{ type: 'string'},
		memberPicture:{ type: 'string'},
		moreAboutMember:{ type: 'string'},
	},

	edit: Edit,
	save,
} );
