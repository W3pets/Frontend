import { MessageMini } from '@/model/DTO/user/auth';
import { NewSellerStore } from '@/model/types/seller/index';
import { utils } from '@/lib/utils/base';
import { sellerHttp } from './config/http';

class SellerServices {
  @utils.setBgMsg([])
  public async onboard(values: NewSellerStore) {
    const formData = new FormData();
    const { acceptedTerms, listing, id, profile } = values;

    const { product_photos, product_video, ...listingDetails } = listing;
    const { isValid, brand_image, ...profileDetails } = profile;

    // Append other listing data as a single stringified JSON object.
    formData.append('listing', JSON.stringify(listingDetails));
    // Append other profile data as a single stringified JSON object.
    formData.append('profile', JSON.stringify(profileDetails));

    if (id?.id?.length) {
      const file = id.id[0].file;
      formData.append('verification_id', file);
    }

    if (brand_image) {
      const file = brand_image[0].file;
      formData.append('brand_image', file);
    }

    // Append product photos. Multer on the backend will create an array of files.
    if (product_photos?.length) {
      product_photos.forEach((photo) => {
        formData.append('product_photos', photo.file);
      });
    }

    // The product_video is an array of IFile, but we only expect one.
    if (product_video?.[0]?.file) {
      formData.append('product_video', product_video[0].file);
    }

    const res = <MessageMini>await sellerHttp.post('/onboard', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res;
  }
}

export const sellerServices = new SellerServices();
