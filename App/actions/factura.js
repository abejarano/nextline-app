import {actionGenerator} from './utils';

export const FACTURA_FETCH_SUCCESS = '@factura/SUCCESS';
export const FACTURA_FETCH_FAILED = '@factura/FAILED';
export const FACTURA_FETCHING_DATA = '@factura/FETCHING_DATA';
export const FACTURA_SELECTED = '@factura/SELECTED';

export const facturaFetch = actionGenerator(FACTURA_FETCHING_DATA);

export const facturaSelect = actionGenerator(FACTURA_SELECTED);

export const facturaFetchSucces = actionGenerator(FACTURA_FETCH_SUCCESS);
export const facturaFetchFailed = actionGenerator(FACTURA_FETCH_FAILED);
