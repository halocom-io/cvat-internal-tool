// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { PlusCircleOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import React from 'react';

import { Label } from './common';
import ConstructorViewerItem from './constructor-viewer-item';

interface ConstructorViewerProps {
    labels: Label[];
    onUpdate: (label: Label) => void;
    onDelete: (label: Label) => void;
    onCreate: () => void;
}

export default function ConstructorViewer(props: ConstructorViewerProps): JSX.Element {
    const { onCreate } = props;
    const list = [
        <Button key='create' type='ghost' onClick={onCreate} className='cvat-constructor-viewer-new-item'>
            Add label
            <PlusCircleOutlined />
        </Button>,
    ];
    for (const label of props.labels) {
        list.push(
            <ConstructorViewerItem
                onUpdate={props.onUpdate}
                onDelete={props.onDelete}
                label={label}
                key={label.id}
                color={label.color}
            />,
        );
    }

    return <div className='cvat-constructor-viewer'>{list}</div>;
}
