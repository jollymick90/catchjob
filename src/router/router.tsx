import { ReactElement } from 'react';
import { Route, RouteProps, Switch } from 'react-router';

export interface RouteComponent extends RouteProps {
    key: string
}


const RouteWithSubRoutes = (route: RouteComponent): ReactElement => {
    return (
        <Route
            
            path={route.path}
            exact={route.exact}
            component={route.component} />

    );
}

export interface RenderProps {
    routes: RouteComponent[]
}

export const SwitchRenderRoutes = ({ routes }: RenderProps) => {

    return (
        <Switch>
            {
                routes.map((route: RouteComponent, i: number) => {
                    return <RouteWithSubRoutes {...route} />
                })
            }
        </Switch>
    )
}


