import React from 'react';
import './DashboardPage.scss';
import SideBarMenu from '../../components/Sidebar-Menu/SidebarMenu.component';
import DashBoardNav from '../../components/DashBoardNav/DashBoardNav.component';
import { Switch } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import CreateAccount from '../../components/CreateAccount/CreateAccount.component';
import PrincipalContent from '../PrincipalContent/PrincipalContent';
import FavoriteAccount from '../../components/CreateFavoriteAccount/FavoriteAccount';
import TransferContainer from '../../components/TransferContainer/TransferContainer.component';
import Profile from '../../components/Profile/Profile.component';

const DashboardPage = ({history}) => {

    return ( 
    
        <div className="dashboard-container">
            <SideBarMenu></SideBarMenu>
            <div className="dashboard-container__accounts">
                <DashBoardNav history={history}></DashBoardNav>
                <div className="dashboard-container__accounts-content">
                    <Switch>
                        <ProtectedRoute exact path="/dashboard/create-account" component={CreateAccount}/>
                        <ProtectedRoute exact path="/dashboard" component={PrincipalContent}/>
                        <ProtectedRoute exact path="/dashboard/create-favorite-account" component={FavoriteAccount}/>
                        <ProtectedRoute exact path="/dashboard/transfer-money" component={TransferContainer}/>
                        <ProtectedRoute exact path="/dashboard/profile" component={Profile}/>
                    </Switch>
                </div> 
            </div>
        </div>
       
     );
}
 
export default DashboardPage;