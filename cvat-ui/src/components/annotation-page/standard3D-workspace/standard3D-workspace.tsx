// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';

import Layout from 'antd/lib/layout';
import CanvasPointContextMenuComponent from 'components/annotation-page/canvas/canvas-point-context-menu';
import ObjectSideBarComponent from 'components/annotation-page/standard-workspace/objects-side-bar/objects-side-bar';
import CanvasContextMenuContainer from 'containers/annotation-page/canvas/canvas-context-menu';
import CanvasWrapperContainer from 'containers/annotation-page/canvas/canvas-wrapper3D';
import ObjectsListContainer from 'containers/annotation-page/standard-workspace/objects-side-bar/objects-list';
import PropagateConfirmContainer from 'containers/annotation-page/standard-workspace/propagate-confirm';
import ControlsSideBarContainer from 'containers/annotation-page/standard3D-workspace/controls-side-bar/controls-side-bar';
import React from 'react';

export default function StandardWorkspace3DComponent(): JSX.Element {
    return (
        <Layout hasSider className='cvat-standard-workspace'>
            <ControlsSideBarContainer />
            <CanvasWrapperContainer />
            <ObjectSideBarComponent objectsList={<ObjectsListContainer />} />
            <PropagateConfirmContainer />
            <CanvasContextMenuContainer />
            <CanvasPointContextMenuComponent />
        </Layout>
    );
}
