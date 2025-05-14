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

export type NewSellerStore = {
  acceptedTerms: boolean;
  profile: InferType<typeof NewSellerSchema> & { isValid: boolean };
  id: InferType<typeof NewSellerSchema2>;
  listing: InferType<typeof ListingSchema>;
};
