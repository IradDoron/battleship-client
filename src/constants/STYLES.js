export const PALETTE = {
	YELLOW: '#FABB51',
	LIGHT_YELLOW: '#FAEDC6',
	GREEN: '#3E8E7E',
	BLUE: '#3E4B8E',
	LIGHT_BLUE: '#9AABE9',
	WHITE: '#FFFFFF',
	BLACK: '#141414',
};

export const COLORS = {
	gradients: {
		gameNotStarted:
			'radial-gradient(487.26% 153.94% at 16.98% 90.22%, #385E56 13.87%, #3A917F 49.78%, #6CADA0 63.62%)',

		gameStarted:
			'radial-gradient(487.26% 153.94% at 16.98% 90.22%, #691D1D 13.87%, #B23333 49.78%, #D54C4C 63.62%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;',
	},
	headers: {
		main: PALETTE.WHITE,
	},
	buttons: {
		notSelected: PALETTE.YELLOW,
		selected: PALETTE.BLUE,
		notSelectedText: PALETTE.GREEN,
		selectedText: PALETTE.WHITE, // selectedText
	},
	cells: {
		empty: PALETTE.LIGHT_YELLOW,
		miss: PALETTE.GREEN,
		hit: PALETTE.YELLOW,
		hasShip: PALETTE.BLUE,
		hover: PALETTE.LIGHT_BLUE,
	},
};

export const FONTS = {
	primary: 'Impact',
	secondary: 'Heebo',
};

export const SIZES = {
	// font sizes
	xxs: '0.5rem',
	xs: '0.75rem',
	s: '1rem',
	m: '1.25rem',
	l: '1.5rem',
	xl: '2rem',
	xxl: '2.5rem',
	xxxl: '3rem',
	xxxxl: '3.5rem',
	xxxxxl: '4rem',
	xxxxxxl: '4.5rem',

	// font weights
	thin: '100',
	extraLight: '200',
	light: '300',
	regular: '400',
};

export const EFFECTS = {
	filter: {
		basicDropShadow: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));',
		legendShipDropShadow: 'drop-shadow(0px 0px 10px  #E93D3D);',
	},
	boxShadow: {
		basic: 'inset 0px 0px 7px 4px #FF5312',
		fire: '4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17, 37px 5px 25px 35px rgba(0,0,0,0)',
	},
};

export const MARGINS = {
	xxs: '0.5rem',
	xs: '0.75rem',
	s: '1rem',
	m: '1.25rem',
	l: '1.5rem',
	xl: '2rem',
	xxl: '2.5rem',
	xxxl: '3rem',
	xxxxl: '3.5rem',
	xxxxxl: '4rem',
	xxxxxxl: '4.5rem',
};

export const BORDER = {
	radius: {
		xxs: '0.5rem',
		xs: '0.75rem',
		s: '1rem',
		m: '1.25rem',
		l: '1.5rem',
		xl: '2rem',
		xxl: '2.5rem',
		xxxl: '3rem',
	},
};
