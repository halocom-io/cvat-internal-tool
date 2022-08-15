// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';

import { Label } from './common';
import LabelForm from './label-form';

interface Props {
    label: Label;
    onUpdate: (label: Label | null) => void;
}

export default function ConstructorUpdater(props: Props): JSX.Element {
    const { label, onUpdate } = props;

    return (
        <div className='cvat-label-constructor-updater'>
            <LabelForm label={label} onSubmit={onUpdate} />
        </div>
    );
}
