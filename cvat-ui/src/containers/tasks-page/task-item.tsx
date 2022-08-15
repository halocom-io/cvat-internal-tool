// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { cancelInferenceAsync } from 'actions/models-actions';
import { getTasksAsync } from 'actions/tasks-actions';
import TaskItemComponent from 'components/tasks-page/task-item';
import { connect } from 'react-redux';
import { ActiveInference, CombinedState, TasksQuery } from 'reducers/interfaces';

interface StateToProps {
    deleted: boolean;
    hidden: boolean;
    previewImage: string;
    taskInstance: any;
    activeInference: ActiveInference | null;
}

interface DispatchToProps {
    getTasks(query: TasksQuery): void;
    cancelAutoAnnotation(): void;
}

interface OwnProps {
    idx: number;
    taskID: number;
}

function mapStateToProps(state: CombinedState, own: OwnProps): StateToProps {
    const task = state.tasks.current[own.idx];
    const { deletes } = state.tasks.activities;
    const id = own.taskID;

    return {
        hidden: state.tasks.hideEmpty && task.instance.jobs.length === 0,
        deleted: id in deletes ? deletes[id] === true : false,
        previewImage: task.preview,
        taskInstance: task.instance,
        activeInference: state.models.inferences[id] || null,
    };
}

function mapDispatchToProps(dispatch: any, own: OwnProps): DispatchToProps {
    return {
        getTasks(query: TasksQuery): void {
            dispatch(getTasksAsync(query));
        },
        cancelAutoAnnotation(): void {
            dispatch(cancelInferenceAsync(own.taskID));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItemComponent);
