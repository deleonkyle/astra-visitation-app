import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MapsPage } from './maps/maps.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'manor-details',
    loadChildren: () => import('./manor-details/manor-details.module').then( m => m.ManorDetailsPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'villas-details',
    loadChildren: () => import('./villas-details/villas-details.module').then( m => m.VillasDetailsPageModule)
  },
  {
    path: 'house-model',
    loadChildren: () => import('./house-model/house-model.module').then( m => m.HouseModelPageModule)
  },
    {
      path: 'maps',
      component: MapsPage,
    },
  {
    path: 'house-reservation',
    loadChildren: () => import('./house-reservation/house-reservation.module').then( m => m.HouseReservationPageModule)
  },
  {
    path: 'agent-selection',
    loadChildren: () => import('./agent-selection/agent-selection.module').then( m => m.AgentSelectionPageModule)
  },
  { path: 'forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'notification-modal',
    loadChildren: () => import('./notification-modal/notification-modal.module').then( m => m.NotificationModalPageModule)
  },
  {
    path: 'admin-listing',
    loadChildren: () => import('./admin-listing/admin-listing.module').then( m => m.AdminListingPageModule)
  },
  {
    path: 'admin.home',
    loadChildren: () => import('./admin.home/admin.home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'add-property-modal',
    loadChildren: () => import('./add-property-modal/add-property-modal.module').then( m => m.AddPropertyModalPageModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./user-management/user-management.module').then( m => m.UserManagementPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
