import {
  ListingSchema,
  NewSellerSchema,
  NewSellerSchema2,
} from '@/model/DTO/seller';
import { InferType } from 'yup';

export enum SellerPaths {
  SellerRegister = '/become_a_seller',
  Terms = '/legal/terms_of_service',
  Privacy = '/legal/privacy_policy',
  PreviewTerms = '/legal/preview_terms_conditions',
}

export enum OnBoardingSteps {
  Profile = 'business_profile',
  ID = 'owner_id',
  Listing = 'first_listing',
}
export enum SellerDashboardPaths {
  Dashboard = '/dashboard/landing',
  Products = '/dashboard/products',
  Messages = '/dashboard/messages',
  Analytics = '/dashboard/analytics',
  Notifications = '/dashboard/notifications',
  Support = '/dashboard/customer_support',
  Settings = '/dashboard/settings',
}

export enum SettingsProductsPaths {
  Profile = '/profile',
  Msg = '/notifications',
  Security = '/security',
  Payments = '/payments',
}

export enum DashboardProductsPaths {
  New = '/new',
  Preview = '/preview',
}

export type NewSellerStore = {
  acceptedTerms: boolean;
  profile: InferType<typeof NewSellerSchema> & { isValid: boolean };
  id: InferType<typeof NewSellerSchema2>;
  listing: InferType<typeof ListingSchema>;
};
