// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { loginAsync } from 'actions/auth-actions';
import LoginPageComponent from 'components/login-page/login-page';
import { connect } from 'react-redux';
import { CombinedState } from 'reducers/interfaces';

interface StateToProps {
    fetching: boolean;
    renderResetPassword: boolean;
}

interface DispatchToProps {
    onLogin: typeof loginAsync;
}

function mapStateToProps(state: CombinedState): StateToProps {
    return {
        fetching: state.auth.fetching,
        renderResetPassword: state.auth.allowResetPassword,
    };
}

const mapDispatchToProps: DispatchToProps = {
    onLogin: loginAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);
