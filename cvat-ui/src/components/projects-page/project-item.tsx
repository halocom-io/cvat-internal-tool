// Copyright (C) 2020-2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { MoreOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import Meta from 'antd/lib/card/Meta';
import Dropdown from 'antd/lib/dropdown';
import Empty from 'antd/lib/empty';
import Text from 'antd/lib/typography/Text';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { CombinedState, Project } from 'reducers/interfaces';
import { useCardHeightHOC } from 'utils/hooks';

import ProjectActionsMenuComponent from './actions-menu';

interface Props {
    projectInstance: Project;
}

const useCardHeight = useCardHeightHOC({
    containerClassName: 'cvat-projects-page',
    siblingClassNames: ['cvat-projects-pagination', 'cvat-projects-page-top-bar'],
    paddings: 40,
    numberOfRows: 3,
});

export default function ProjectItemComponent(props: Props): JSX.Element {
    const {
        projectInstance: { instance, preview },
    } = props;

    const history = useHistory();
    const height = useCardHeight();
    const ownerName = instance.owner ? instance.owner.username : null;
    const updated = moment(instance.updatedDate).fromNow();
    const deletes = useSelector((state: CombinedState) => state.projects.activities.deletes);
    const deleted = instance.id in deletes ? deletes[instance.id] : false;

    const onOpenProject = (): void => {
        history.push(`/projects/${instance.id}`);
    };

    const style: React.CSSProperties = { height };
    if (deleted) {
        style.pointerEvents = 'none';
        style.opacity = 0.5;
    }

    return (
        <Card
            cover={
                preview ? (
                    <img
                        className='cvat-projects-project-item-card-preview'
                        src={preview}
                        alt='Preview'
                        onClick={onOpenProject}
                        aria-hidden
                    />
                ) : (
                    <div className='cvat-projects-project-item-card-preview' onClick={onOpenProject} aria-hidden>
                        <Empty description='No tasks' />
                    </div>
                )
            }
            size='small'
            style={style}
            className='cvat-projects-project-item-card'
        >
            <Meta
                title={(
                    <span onClick={onOpenProject} className='cvat-projects-project-item-title' aria-hidden>
                        {instance.name}
                    </span>
                )}
                description={(
                    <div className='cvat-porjects-project-item-description'>
                        <div>
                            {ownerName && (
                                <>
                                    <Text type='secondary'>{`Created ${ownerName ? `by ${ownerName}` : ''}`}</Text>
                                    <br />
                                </>
                            )}
                            <Text type='secondary'>{`Last updated ${updated}`}</Text>
                        </div>
                        <div>
                            <Dropdown overlay={<ProjectActionsMenuComponent projectInstance={instance} />}>
                                <Button type='link' size='large' icon={<MoreOutlined />} />
                            </Dropdown>
                        </div>
                    </div>
                )}
            />
        </Card>
    );
}
