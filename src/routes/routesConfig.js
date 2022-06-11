import PeoplePage from "../containers/PeoplePage";
import PersonPage from "../containers/PersonPage";
import NewPersonPage from "../containers/NewPerson";
import EditPersonPage from "../containers/EditPerson";

const routesConfig = [
    {
        path: '/people',
        exact: true,
        component: <PeoplePage/>
    },
    {
        path: '/new',
        exact: true,
        component: <NewPersonPage/>
    },
    {
        path: '/people/:id',
        exact: true,
        component: <PersonPage/>
    },
    {
        path: '/people/edit:id',
        exact: true,
        component: <EditPersonPage/>
    }
];

export default routesConfig;
