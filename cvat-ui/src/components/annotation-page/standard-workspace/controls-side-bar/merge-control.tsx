// Copyright (C) 2020-2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import Icon from '@ant-design/icons';
import CVATTooltip from 'components/common/cvat-tooltip';
import { Canvas } from 'cvat-canvas-wrapper';
import { MergeIcon } from 'icons';
import React from 'react';
import { ActiveControl } from 'reducers/interfaces';

export interface Props {
    canvasInstance: Canvas;
    activeControl: ActiveControl;
    switchMergeShortcut: string;
    disabled?: boolean;
    mergeObjects(enabled: boolean): void;
}

function MergeControl(props: Props): JSX.Element {
    const {
        switchMergeShortcut, activeControl, canvasInstance, mergeObjects, disabled,
    } = props;

    const dynamicIconProps =
        activeControl === ActiveControl.MERGE ?
            {
                className: 'cvat-merge-control cvat-active-canvas-control',
                onClick: (): void => {
                    canvasInstance.merge({ enabled: false });
                    mergeObjects(false);
                },
            } :
            {
                className: 'cvat-merge-control',
                onClick: (): void => {
                    canvasInstance.cancel();
                    canvasInstance.merge({ enabled: true });
                    mergeObjects(true);
                },
            };

    return disabled ? (
        <Icon className='cvat-merge-control cvat-disabled-canvas-control' component={MergeIcon} />
    ) : (
        <CVATTooltip title={`Merge shapes/tracks ${switchMergeShortcut}`} placement='right'>
            <Icon {...dynamicIconProps} component={MergeIcon} />
        </CVATTooltip>
    );
}

export default React.memo(MergeControl);
