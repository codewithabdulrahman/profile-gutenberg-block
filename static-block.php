<?php
/**
 * Plugin Name:       The Static
 * Description:       This is a Static gutenberg block
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       static-block
 *
 * @package Static
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
function static_static_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'static_static_block_block_init' );
