// Copyright (C) 2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import Icon from '@ant-design/icons';

import { CursorClickIcon } from '@heroicons/react/outline';
import { ActiveControl } from 'reducers/interfaces';
import { Canvas } from 'cvat-canvas-wrapper';
import { Canvas3d } from 'cvat-canvas3d-wrapper';
import CVATTooltip from 'components/common/cvat-tooltip';

export interface Props {
    canvasInstance: Canvas | Canvas3d;
    cursorShortkey: string;
    activeControl: ActiveControl;
}

function CursorControl(props: Props): JSX.Element {
    const { canvasInstance, activeControl, cursorShortkey } = props;

    return (
        <CVATTooltip title={`Cursor ${cursorShortkey}`} placement='right'>
            <Icon
                component={() => <CursorClickIcon width={40} height={40} />}
                className={
                    activeControl === ActiveControl.CURSOR ?
                        'cvat-active-canvas-control cvat-cursor-control' :
                        'cvat-cursor-control'
                }
                onClick={activeControl !== ActiveControl.CURSOR ? (): void => canvasInstance.cancel() : undefined}
            />
        </CVATTooltip>
    );
}

export default React.memo(CursorControl);
