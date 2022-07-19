import React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'

import CandidatesScreen from '../screens/CandidatesScreen';
import AddCandidatesScreen from '../screens/CandidatesScreen/AddCandidateScreen';
import EditCandidateScreen from '../screens/CandidatesScreen/EditCandidateScreen';
import CandidatesDetailsScreen from '../screens/CandidatesScreen/CandidateDetailScreen';

import HomeScreen from '../screens/HomeScreen/index';
import EditProfileScreen from '../screens/EditProfileScreen'

import CompanyScreen from '../screens/CompanyScreen';
import AddCompanyScreen from '../screens/CompanyScreen/AddCompanyScreen';
import EditCompanyScreen from '../screens/CompanyScreen/EditcompanyScreen';

import ContactScreen from '../screens/ContactScreen';
import AddContactScreen from '../screens/ContactScreen/AddContactScreen';
import EditContactScreen from '../screens/ContactScreen/EditContactScreen';
import ContactDetailScreen from '../screens/ContactScreen/ContactDetailScreen';

import JobOrderScreen from '../screens/JobOrderScreen';
import AddJobScreen from '../screens/JobOrderScreen/AddJobScreen'
import EditJobScreen from '../screens/JobOrderScreen/EditJobScreen'

import JobDetailsScreen from '../screens/JobOrderScreen/JobDetailsScreen'

import OnBoardingScreen from '../screens/OnBoardingScreen';
import AddonBoardingScreen from '../screens/OnBoardingScreen/AddonBoardingScreen';
import EditonBoardingScreen from '../screens/OnBoardingScreen/EditonBoardingScreen';
import OnBoardingDetailsScreen from '../screens/OnBoardingScreen/OnBoardingDetailsScreen';


import PlacementsScreen from '../screens/PlacementScreen';
import AddPlacementScreen from '../screens/PlacementScreen/AddPlacementScreen';
import EditPlacementScreen from '../screens/PlacementScreen/EditPlacementScreen';
import PlacementDetailsScreen from '../screens/PlacementScreen/PlacementDetailsScreen';

import TimeSheetScreen from '../screens/TimeSheetScreen';
import AddTimesheetScreen from '../screens/TimeSheetScreen/AddTimesheetScreen';

import TimeSheetDetailsScreen from '../screens/TimeSheetScreen/TimeSheetDetailsScreen';

import ExpensesScreen from '../screens/ExpensesScreen';
import ExpensesAddScreen from '../screens/ExpensesScreen/ExpensesAddScreen';
import ExpensesDetailsScreen from '../screens/ExpensesScreen/ExpensesDetailsScreen';


import InvoicesScreen from '../screens/InvoicesScreen';
import DashBoardScreen from '../screens/DasboardScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Reports Scrreens

import CommissionReportScreen from '../screens/ReportsScreens/CommissionReportScreen';
import CompaniesActivityScreen from '../screens/ReportsScreens/CompaniesActivityScreen';
import CurrentPlacementScreen from '../screens/ReportsScreens/CurrentPlacementScreen';
import EqualEmploymentOpportunityScreen from '../screens/ReportsScreens/EqualEmploymentOpportunityScreen';
import JobOrdersActivityScreen from '../screens/ReportsScreens/JobOrdersActivityScreen';
import PlacementDetailScreen from '../screens/ReportsScreens/PlacementDetailScreen';
import RecruiterContactSubmissionScreen from '../screens/ReportsScreens/RecruiterContactSubmissionScreen';
import RecruiterInternalSubmissionScreen from '../screens/ReportsScreens/RecruiterInternalSubmissionScreen';
import RecruitersKPIsSummaryScreen from '../screens/ReportsScreens/RecruitersKPIsSummaryScreen';
import SourcerPipelineScreen from '../screens/ReportsScreens/SourcerPipelineScreen';
import UserActivityDetailsScreen from '../screens/ReportsScreens/UserActivityDetailsScreen';
import UserActivitySummaryScreen from '../screens/ReportsScreens/UserActivitySummaryScreen';
import UserAnalyticalReportScreen from '../screens/ReportsScreens/UserAnalyticalReportScreen';


//Settings Screens 

import LableCustomizationSettings from '../screens/SettingsScreen/LableCustomizationSettings';
import StatusCustomizationSettings from '../screens/SettingsScreen/StatusCustomizationSettings';
import FieldscustomizationSettings from '../screens/SettingsScreen/FieldscustomizationSettings';
import LocalizationSettings from '../screens/SettingsScreen/LocalizationSettings';
import WorkFlowSettings from '../screens/SettingsScreen/WorkFlowSettings';
import LeavesRequestSettings from '../screens/SettingsScreen/LeavesRequestSettings';
import PowerSearchCalibrationSettings from '../screens/SettingsScreen/PowerSearchCalibrationSettings';
import CancelSubscriptionSettings from '../screens/SettingsScreen/CancelSubscriptionSettings';
import HistorySettings from '../screens/SettingsScreen/HistorySettings';
import PayForUserSubscriptioSettings from '../screens/SettingsScreen/PayForUserSubscriptioSettings';
import PayForConsultantsSettings from '../screens/SettingsScreen/PayForConsultantsSettings';
import IntegrationsSettings from '../screens/SettingsScreen/IntegrationsSettings';
import JobBoardsSettings from '../screens/SettingsScreen/JobBoardsSettings';
import BulkEmailSettings from '../screens/SettingsScreen/BulkEmailSettings';



import DrawerContent from './DrawerContent';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
    return(
        <Stack.Navigator
            initialRouteName='HomeScreen'
        >
            
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="EditProfileScreen" 
                component={EditProfileScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="CompanyScreen" 
                component={CompanyScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="AddCompanyScreen" 
                component={AddCompanyScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="EditCompanyScreen" 
                component={EditCompanyScreen} 
                options={{
                    headerShown:false
                }}
            />



            <Stack.Screen 
                name="ContactScreen" 
                component={ContactScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="AddContactScreen" 
                component={AddContactScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="ContactDetailScreen" 
                component={ContactDetailScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="EditContactScreen" 
                component={EditContactScreen} 
                options={{
                    headerShown:false
                }}
            />



            <Stack.Screen 
                name="JobOrderScreen" 
                component={JobOrderScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="AddJobScreen" 
                component={AddJobScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="EditJobScreen" 
                component={EditJobScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="JobDetailsScreen" 
                component={JobDetailsScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="CandidatesScreen" 
                component={CandidatesScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="AddCandidatesScreen" 
                component={AddCandidatesScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="EditCandidatesScreen" 
                component={EditCandidateScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="CandidatesDetailsScreen" 
                component={CandidatesDetailsScreen} 
                options={{
                    headerShown:false
                }}
            />
            

            <Stack.Screen 
                name="OnBoardingScreen" 
                component={OnBoardingScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="AddonBoardingScreen" 
                component={AddonBoardingScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="EditonBoardingScreen" 
                component={EditonBoardingScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="OnBoardingDetailsScreen" 
                component={OnBoardingDetailsScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="PlacementsScreen" 
                component={PlacementsScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="AddPlacementScreen" 
                component={AddPlacementScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="EditPlacementScreen" 
                component={EditPlacementScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="PlacementDetailsScreen" 
                component={PlacementDetailsScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="TimeSheetScreen" 
                component={TimeSheetScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="AddTimesheetScreen" 
                component={AddTimesheetScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="TimeSheetDetailsScreen" 
                component={TimeSheetDetailsScreen} 
                options={{
                    headerShown:false
                }}
            />



            <Stack.Screen 
                name="ExpensesScreen" 
                component={ExpensesScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="ExpensesAddScreen" 
                component={ExpensesAddScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="ExpensesDetailsScreen" 
                component={ExpensesDetailsScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="InvoicesScreen" 
                component={InvoicesScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="DashBoardScreen" 
                component={DashBoardScreen} 
                options={{
                    headerShown:false
                }}
            />


            <Stack.Screen 
                name="SettingsScreen" 
                component={SettingsScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="UserAnalyticalReportScreen" 
                component={UserAnalyticalReportScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="UserActivitySummaryScreen" 
                component={UserActivitySummaryScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="UserActivityDetailsScreen" 
                component={UserActivityDetailsScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="SourcerPipelineScreen" 
                component={SourcerPipelineScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="RecruitersKPIsSummaryScreen" 
                component={RecruitersKPIsSummaryScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="RecruiterInternalSubmissionScreen" 
                component={RecruiterInternalSubmissionScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="RecruiterContactSubmissionScreen" 
                component={RecruiterContactSubmissionScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="PlacementDetailScreen" 
                component={PlacementDetailScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="JobOrdersActivityScreen" 
                component={JobOrdersActivityScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="EqualEmploymentOpportunityScreen" 
                component={EqualEmploymentOpportunityScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="CurrentPlacementScreen" 
                component={CurrentPlacementScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="CompaniesActivityScreen" 
                component={CompaniesActivityScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="CommissionReportScreen" 
                component={CommissionReportScreen} 
                options={{
                    headerShown:false
                }}
            />
            
            
            {/* Start Settings */}
            <Stack.Screen 
                name="LableCustomizationSettings" 
                component={LableCustomizationSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="StatusCustomizationSettings" 
                component={StatusCustomizationSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="FieldscustomizationSettings" 
                component={FieldscustomizationSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="LocalizationSettings" 
                component={LocalizationSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="WorkFlowSettings" 
                component={WorkFlowSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="LeavesRequestSettings" 
                component={LeavesRequestSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="PowerSearchCalibrationSettings" 
                component={PowerSearchCalibrationSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="CancelSubscriptionSettings" 
                component={CancelSubscriptionSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="HistorySettings" 
                component={HistorySettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="PayForUserSubscriptioSettings" 
                component={PayForUserSubscriptioSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="PayForConsultantsSettings" 
                component={PayForConsultantsSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="IntegrationsSettings" 
                component={IntegrationsSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="JobBoardsSettings" 
                component={JobBoardsSettings} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="BulkEmailSettings" 
                component={BulkEmailSettings} 
                options={{
                    headerShown:false
                }}
            />
            {/* End Settigs */}
        </Stack.Navigator>
    )
}
const StackNavigator = () => (
    <Drawer.Navigator
      gestureEnabled={false}
      screenOptions={{
        swipeEnabled:true,
        headerShown:false
      }}
        drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name ="MainStack" headerShown={false}>
                {props => <MainStack {...props} />}
            </Drawer.Screen>
    </Drawer.Navigator>
)

export default StackNavigator;