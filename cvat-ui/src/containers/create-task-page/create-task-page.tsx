// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { createTaskAsync } from 'actions/tasks-actions';
import { CreateTaskData } from 'components/create-task-page/create-task-content';
import CreateTaskComponent from 'components/create-task-page/create-task-page';
import { connect } from 'react-redux';
import { CombinedState } from 'reducers/interfaces';

interface StateToProps {
    taskId: number | null;
    status: string;
    error: string;
    installedGit: boolean;
    dumpers:[]
}

interface DispatchToProps {
    onCreate: (data: CreateTaskData) => void;
}

function mapDispatchToProps(dispatch: any): DispatchToProps {
    return {
        onCreate: (data: CreateTaskData): void => dispatch(createTaskAsync(data)),
    };
}

function mapStateToProps(state: CombinedState): StateToProps {
    const { creates } = state.tasks.activities;
    return {
        ...creates,
        installedGit: state.plugins.list.GIT_INTEGRATION,
        dumpers: state.formats.annotationFormats.dumpers,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskComponent);
