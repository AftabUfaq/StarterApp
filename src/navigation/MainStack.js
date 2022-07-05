import React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'

import CandidatesScreen from '../screens/CandidatesScreen';
import AddCandidatesScreen from '../screens/CandidatesScreen/AddCandidateScreen';
import CandidatesDetailsScreen from '../screens/CandidatesScreen/CandidateDetailScreen';

import HomeScreen from '../screens/HomeScreen/index';
import EditProfileScreen from '../screens/EditProfileScreen'

import CompanyScreen from '../screens/CompanyScreen';
import AddCompanyScreen from '../screens/CompanyScreen/AddCompanyScreen';

import ContactScreen from '../screens/ContactScreen';
import AddContactScreen from '../screens/ContactScreen/AddContactScreen';
import JobOrderScreen from '../screens/JobOrderScreen';
import AddJobScreen from '../screens/JobOrderScreen/AddJobScreen'
import JobDetailsScreen from '../screens/JobOrderScreen/JobDetailsScreen'

import OnBoardingScreen from '../screens/OnBoardingScreen';
import AddonBoardingScreen from '../screens/OnBoardingScreen/AddonBoardingScreen';
import OnBoardingDetailsScreen from '../screens/OnBoardingScreen/OnBoardingDetailsScreen';


import PlacementsScreen from '../screens/PlacementScreen';
import AddPlacementScreen from '../screens/PlacementScreen/AddPlacementScreen';
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