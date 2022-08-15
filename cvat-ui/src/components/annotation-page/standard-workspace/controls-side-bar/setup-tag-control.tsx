// Copyright (C) 2020-2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import Icon from '@ant-design/icons';
import Popover from 'antd/lib/popover';
import SetupTagPopoverContainer from 'containers/annotation-page/standard-workspace/controls-side-bar/setup-tag-popover';
import { Canvas } from 'cvat-canvas-wrapper';
import { TagIcon } from 'icons';
import React from 'react';

import withVisibilityHandling from './handle-popover-visibility';

export interface Props {
    canvasInstance: Canvas;
    isDrawing: boolean;
    disabled?: boolean;
}

const CustomPopover = withVisibilityHandling(Popover, 'setup-tag');
function SetupTagControl(props: Props): JSX.Element {
    const { isDrawing, disabled } = props;
    const dynamicPopoverProps = isDrawing
        ? {
              overlayStyle: {
                  display: 'none',
              },
          }
        : {};

    return disabled ? (
        <Icon className='cvat-setup-tag-control cvat-disabled-canvas-control' component={TagIcon} />
    ) : (
        <CustomPopover {...dynamicPopoverProps} placement='right' content={<SetupTagPopoverContainer />}>
            <Icon className='cvat-setup-tag-control' component={TagIcon} />
        </CustomPopover>
    );
}

export default React.memo(SetupTagControl);
