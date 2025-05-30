import { store } from '../store';
import globalSlice from '../store/slices/globalSlice';
import { Message, MessageType, StatusCode } from '@/model/types/global';
import { APIRes, APIStatusDTO } from '@/model/DTO/global';
import { reqHandler } from '@/services/config/http';
import { JwtToken } from '@/model/DTO/user/auth';

class Utils {
  public getReaablePrice(price: number): string {
    return price.toLocaleString('en-NG', {
      style: 'currency',
      currency: 'NGN',
    });
  }
  public getStatusWithCategory(
    status: APIStatusDTO & { time?: number }
  ): Message {
    let category = MessageType.Error;

    switch (status.code) {
      case StatusCode.Success:
        category = MessageType.Success;
        break;
      case StatusCode.BadRequest:
        category = MessageType.Error;
        break;
      default:
        break;
    }

    return {
      message: status.message,
      code: status.code,
      category,
      time: status?.time || 7,
    };
  }

  public setBgMsg<T>(
    ignoreCodes: StatusCode[] = [],
    setToken = false
  ): MethodDecorator {
    return function (
      target: any,
      propertyKey: string | symbol,
      descriptor: PropertyDescriptor
    ) {
      const originalMethod = descriptor.value;
      descriptor.value = async function (...args: any) {
        const res = <APIRes<T>>await originalMethod.apply(this, args);

        if (setToken && res.status.success) {
          const token = (res.data as JwtToken).accessToken;
          reqHandler.handleBearerToken(token);
        }

        if (ignoreCodes.length) {
          if (!ignoreCodes.includes(res.status.code)) {
            store.dispatch(globalSlice.actions.setMsg(res.status));
          }
        } else {
          store.dispatch(globalSlice.actions.setMsg(res.status));
        }

        if (res.status.success) {
          if (res.data) return res.data;
          return res.status.message;
        }

        return null;
      };
      return descriptor;
    };
  }
}

export const utils = new Utils();
