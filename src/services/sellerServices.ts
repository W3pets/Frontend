import { MessageMini } from '@/model/DTO/user/auth';
import { NewSellerStore } from '@/model/types/seller/index';
import { utils } from '@/lib/utils/base';
import { sellerHttp } from './config/http';

class SellerServices {
  @utils.setBgMsg([])
  public async onboard(values: NewSellerStore) {
    const { acceptedTerms, ...rest } = values;
    const res = <MessageMini>await sellerHttp.post('/onboard', rest);
    return res;
  }
}

export const sellerServices = new SellerServices();
