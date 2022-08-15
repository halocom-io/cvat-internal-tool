// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { AboutActions, AboutActionTypes } from 'actions/about-actions';
import { AuthActions, AuthActionTypes } from 'actions/auth-actions';
import { BoundariesActions, BoundariesActionTypes } from 'actions/boundaries-actions';
import { CanvasVersion } from 'cvat-canvas-wrapper';
import getCore from 'cvat-core-wrapper';

import pjson from '../../package.json';
import { AboutState } from './interfaces';

const defaultState: AboutState = {
    server: {},
    packageVersion: {
        core: getCore().client.version,
        canvas: CanvasVersion,
        ui: pjson.version,
    },
    fetching: false,
    initialized: false,
};

export default function (
    state: AboutState = defaultState,
    action: AboutActions | AuthActions | BoundariesActions,
): AboutState {
    switch (action.type) {
        case AboutActionTypes.GET_ABOUT: {
            return {
                ...state,
                fetching: true,
                initialized: false,
            };
        }
        case AboutActionTypes.GET_ABOUT_SUCCESS:
            return {
                ...state,
                fetching: false,
                initialized: true,
                server: action.payload.server,
            };
        case AboutActionTypes.GET_ABOUT_FAILED:
            return {
                ...state,
                fetching: false,
                initialized: true,
            };
        case AuthActionTypes.LOGOUT_SUCCESS:
        case BoundariesActionTypes.RESET_AFTER_ERROR: {
            return {
                ...defaultState,
            };
        }
        default:
            return state;
    }
}
