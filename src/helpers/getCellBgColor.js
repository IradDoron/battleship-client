import CELL_STATUSES from '../constants/CELL_STATUSES';
import { COLORS } from '../constants/STYLES';

function getCellBgColor(cellStatus) {
	if (typeof cellStatus === 'number') {
		return '#321dbb';
	}
	switch (cellStatus) {
		case CELL_STATUSES.EMPTY:
			return COLORS.cells.empty;
		case CELL_STATUSES.HAS_SHIP:
			return COLORS.cells.hasShip;
		case CELL_STATUSES.HIT:
			return '#dc2626';
		case CELL_STATUSES.MISS:
			return '#f9c78f';
		case CELL_STATUSES.HOVER:
			return COLORS.cells.hover;
		case CELL_STATUSES.SUNK:
			return '#33398d';
		case CELL_STATUSES.WAVE:
			return '#1f213a';

		default:
			return '#fff';
	}
}

export default getCellBgColor;
