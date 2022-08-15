// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import Tooltip, { TooltipProps } from 'antd/lib/tooltip';
import React from 'react';

function CVATTooltip(props: TooltipProps): JSX.Element {
    const { children, ...rest } = props;

    return (
        <Tooltip destroyTooltipOnHide={{ keepParent: false }} mouseLeaveDelay={0} {...rest}>
            {children}
        </Tooltip>
    );
}

export default React.memo(CVATTooltip);
