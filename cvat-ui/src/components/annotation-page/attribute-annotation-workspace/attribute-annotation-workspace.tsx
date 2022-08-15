// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';

import Layout from 'antd/lib/layout';
import CanvasWrapperContainer from 'containers/annotation-page/canvas/canvas-wrapper';
import React from 'react';

import AttributeAnnotationSidebar from './attribute-annotation-sidebar/attribute-annotation-sidebar';

export default function AttributeAnnotationWorkspace(): JSX.Element {
    return (
        <Layout hasSider className='attribute-annotation-workspace'>
            <CanvasWrapperContainer />
            <AttributeAnnotationSidebar />
        </Layout>
    );
}
