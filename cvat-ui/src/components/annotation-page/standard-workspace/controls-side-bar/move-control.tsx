// Copyright (C) 2020-2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import Icon from '@ant-design/icons';
import CVATTooltip from 'components/common/cvat-tooltip';
import { Canvas } from 'cvat-canvas-wrapper';
import { Canvas3d } from 'cvat-canvas3d-wrapper';
import { MoveIcon } from 'icons';
import React from 'react';
import { ActiveControl } from 'reducers/interfaces';

export interface Props {
    canvasInstance: Canvas | Canvas3d;
    activeControl: ActiveControl;
}

function MoveControl(props: Props): JSX.Element {
    const { canvasInstance, activeControl } = props;

    return (
        <CVATTooltip title='Move the image' placement='right'>
            <Icon
                component={MoveIcon}
                className={
                    activeControl === ActiveControl.DRAG_CANVAS
                        ? 'cvat-move-control cvat-active-canvas-control'
                        : 'cvat-move-control'
                }
                onClick={(): void => {
                    if (activeControl === ActiveControl.DRAG_CANVAS) {
                        canvasInstance.dragCanvas(false);
                    } else {
                        canvasInstance.cancel();
                        canvasInstance.dragCanvas(true);
                    }
                }}
            />
        </CVATTooltip>
    );
}

export default React.memo(MoveControl);
