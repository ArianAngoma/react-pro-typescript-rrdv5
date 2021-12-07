import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

/* Importaciones propias */
import {RegisterPage} from '../03-forms/pages/RegisterPage';
import {FormikBasicPage} from '../03-forms/pages/FormikBasicPage';
import {FormikYupPage} from '../03-forms/pages/FormikYupPage';

import logo from '../logo.svg';

export const Navigations = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup Page</NavLink>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/register">
                        <RegisterPage/>
                    </Route>
                    <Route path="/formik-basic">
                        <FormikBasicPage/>
                    </Route>
                    <Route path="/formik-yup">
                        <FormikYupPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}