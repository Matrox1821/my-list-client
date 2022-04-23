import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../helpers/routes";
import { Layout } from "../Layout";
import { HomePage } from "../Pages/HomePage";
import { AnimesPage } from "../Pages/AnimesPage";
export const AppRouters: FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path={routes.home} element={<HomePage />} />
                    <Route path={routes.home} element={<AnimesPage />} />
                </Routes>
                {/* <Route path="*" component={NotFoundPage} /> */}
            </Layout>
        </Router>
    );
};
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "../layout";
import { routes } from "./helpers/routes";
export const AppRouters = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path={routes.home} component={HomePage} />

                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Layout>
        </Router>
    );
};
 */
