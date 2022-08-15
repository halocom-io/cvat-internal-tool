// Copyright (C) 2020-2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { updateProjectAsync } from 'actions/projects-actions';
import { Col, Row } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import LabelsEditor from 'components/labels-editor/labels-editor';
import BugTrackerEditor from 'components/task-page/bug-tracker-editor';
import UserSelector from 'components/task-page/user-selector';
import getCore from 'cvat-core-wrapper';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const core = getCore();

interface DetailsComponentProps {
    project: any;
}

export default function DetailsComponent(props: DetailsComponentProps): JSX.Element {
    const { project } = props;

    const dispatch = useDispatch();
    const [projectName, setProjectName] = useState(project.name);

    return (
        <div cvat-project-id={project.id} className='cvat-project-details'>
            <Row>
                <Col>
                    <Title
                        level={4}
                        editable={{
                            onChange: (value: string): void => {
                                setProjectName(value);
                                project.name = value;
                                dispatch(updateProjectAsync(project));
                            },
                        }}
                        className='cvat-text-color cvat-project-name'
                    >
                        {projectName}
                    </Title>
                </Col>
            </Row>
            <Row justify='space-between' className='cvat-project-description'>
                <Col>
                    <Text type='secondary'>
                        {`Project #${project.id} created`}
                        {project.owner ? ` by ${project.owner.username}` : null}
                        {` on ${moment(project.createdDate).format('MMMM Do YYYY')}`}
                    </Text>
                    <BugTrackerEditor
                        instance={project}
                        onChange={(bugTracker): void => {
                            project.bugTracker = bugTracker;
                            dispatch(updateProjectAsync(project));
                        }}
                    />
                </Col>
                <Col>
                    <Text type='secondary'>Assigned to</Text>
                    <UserSelector
                        value={project.assignee}
                        onSelect={(user) => {
                            project.assignee = user;
                            dispatch(updateProjectAsync(project));
                        }}
                    />
                </Col>
            </Row>
            <LabelsEditor
                labels={project.labels.map((label: any): string => label.toJSON())}
                onSubmit={(labels: any[]): void => {
                    project.labels = labels.map((labelData): any => new core.classes.Label(labelData));
                    dispatch(updateProjectAsync(project));
                }}
            />
        </div>
    );
}
