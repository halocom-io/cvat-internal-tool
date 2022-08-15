// Copyright (C) 2020-2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import Icon from '@ant-design/icons';
import CVATTooltip from 'components/common/cvat-tooltip';
import { Canvas } from 'cvat-canvas-wrapper';
import { FitIcon } from 'icons';
import React from 'react';

export interface Props {
    canvasInstance: Canvas;
}

function FitControl(props: Props): JSX.Element {
    const { canvasInstance } = props;

    return (
        <CVATTooltip title='Fit the image [Double Click]' placement='right'>
            <Icon className='cvat-fit-control' component={FitIcon} onClick={(): void => canvasInstance.fit()} />
        </CVATTooltip>
    );
}

export default React.memo(FitControl);
