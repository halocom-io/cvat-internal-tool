// Copyright (C) 2020-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { CheckCircleOutlined, StopOutlined } from '@ant-design/icons';
import { ArrowSmLeftIcon, ArrowSmRightIcon, MenuIcon, SaveIcon } from '@heroicons/react/outline';
import Button from 'antd/lib/button';
import Dropdown from 'antd/lib/dropdown';
import { Col } from 'antd/lib/grid';
import Modal from 'antd/lib/modal';
import Timeline from 'antd/lib/timeline';
import CVATTooltip from 'components/common/cvat-tooltip';
import AnnotationMenuContainer from 'containers/annotation-page/top-bar/annotation-menu';
import React from 'react';
import { ActiveControl, ToolsBlockerState } from 'reducers/interfaces';

interface Props {
    saving: boolean;
    savingStatuses: string[];
    undoAction?: string;
    redoAction?: string;
    saveShortcut: string;
    undoShortcut: string;
    redoShortcut: string;
    drawShortcut: string;
    switchToolsBlockerShortcut: string;
    toolsBlockerState: ToolsBlockerState;
    activeControl: ActiveControl;
    onSaveAnnotation(): void;
    onUndoClick(): void;
    onRedoClick(): void;
    onFinishDraw(): void;
    onSwitchToolsBlockerState(): void;
}

function LeftGroup(props: Props): JSX.Element {
    const {
        saving,
        savingStatuses,
        undoAction,
        redoAction,
        saveShortcut,
        undoShortcut,
        redoShortcut,
        drawShortcut,
        switchToolsBlockerShortcut,
        activeControl,
        toolsBlockerState,
        onSaveAnnotation,
        onUndoClick,
        onRedoClick,
        onFinishDraw,
        onSwitchToolsBlockerState,
    } = props;

    const includesDoneButton = [
        ActiveControl.DRAW_POLYGON,
        ActiveControl.DRAW_POLYLINE,
        ActiveControl.DRAW_POINTS,
        ActiveControl.AI_TOOLS,
        ActiveControl.OPENCV_TOOLS,
    ].includes(activeControl);

    const includesToolsBlockerButton =
        [ActiveControl.OPENCV_TOOLS, ActiveControl.AI_TOOLS].includes(activeControl) && toolsBlockerState.buttonVisible;

    const shouldEnableToolsBlockerOnClick = [ActiveControl.OPENCV_TOOLS].includes(activeControl);

    return (
        <>
            <Modal title='Saving changes on the server' visible={saving} footer={[]} closable={false}>
                <Timeline pending={savingStatuses[savingStatuses.length - 1] || 'Pending..'}>
                    {savingStatuses.slice(0, -1).map((status: string, id: number) => (
                        <Timeline.Item key={id}>{status}</Timeline.Item>
                    ))}
                </Timeline>
            </Modal>
            <Col className='cvat-annotation-header-left-group'>
                <Dropdown overlay={<AnnotationMenuContainer />}>
                    <Button type='link' className='cvat-annotation-header-button'>
                        <span className='text-white'>
                            <MenuIcon width={18} height={18} fill='#fff' />
                        </span>
                    </Button>
                </Dropdown>
                <CVATTooltip overlay={`Save current changes ${saveShortcut}`}>
                    <Button
                        onClick={saving ? undefined : onSaveAnnotation}
                        type='link'
                        className={saving ? 'cvat-annotation-disabled-header-button' : 'cvat-annotation-header-button'}
                    >
                        <span className='text-zinc-500'>
                            <SaveIcon width={18} height={18} />
                        </span>
                        {saving ? 'Saving...' : 'Save'}
                    </Button>
                </CVATTooltip>
                <CVATTooltip overlay={`Undo: ${undoAction} ${undoShortcut}`}>
                    <Button
                        style={{ pointerEvents: undoAction ? 'initial' : 'none', opacity: undoAction ? 1 : 0.5 }}
                        type='link'
                        className='cvat-annotation-header-button'
                        onClick={onUndoClick}
                    >
                        <span className='text-zinc-500'>
                            <ArrowSmLeftIcon width={18} height={18} />
                        </span>
                        <span>Undo</span>
                    </Button>
                </CVATTooltip>
                <CVATTooltip overlay={`Redo: ${redoAction} ${redoShortcut}`}>
                    <Button
                        style={{ pointerEvents: redoAction ? 'initial' : 'none', opacity: redoAction ? 1 : 0.5 }}
                        type='link'
                        className='cvat-annotation-header-button'
                        onClick={onRedoClick}
                    >
                        <span className='text-zinc-500'>
                            <ArrowSmRightIcon width={18} height={18} />
                        </span>
                        Redo
                    </Button>
                </CVATTooltip>
                {includesDoneButton ? (
                    <CVATTooltip overlay={`Press "${drawShortcut}" to finish`}>
                        <Button type='link' className='cvat-annotation-header-button' onClick={onFinishDraw}>
                            <CheckCircleOutlined />
                            Done
                        </Button>
                    </CVATTooltip>
                ) : null}
                {includesToolsBlockerButton ? (
                    <CVATTooltip overlay={`Press "${switchToolsBlockerShortcut}" to postpone running the algorithm `}>
                        <Button
                            type='link'
                            className={`cvat-annotation-header-button ${
                                toolsBlockerState.algorithmsLocked ? 'cvat-button-active' : ''
                            }`}
                            onClick={shouldEnableToolsBlockerOnClick ? onSwitchToolsBlockerState : undefined}
                        >
                            <StopOutlined />
                            Block
                        </Button>
                    </CVATTooltip>
                ) : null}
            </Col>
        </>
    );
}

export default React.memo(LeftGroup);
