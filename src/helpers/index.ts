import consts from '@/model/consts';
import { IFile } from '@/model/types/global';
import * as Yup from 'yup';
class Helpers {
  public reduceNumLength(price: number) {
    if (price > 1000) {
      if (price > 1000000) {
        return `${(price / 1000000).toFixed(2)}M`;
      }
      return `${(price / 1000).toFixed(2)}K`;
    }
    return price.toFixed(2);
  }

  public async getBase64String(file: File) {
    try {
      const b64 = await new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          reject('');
        };
      });
      return b64 as string;
    } catch (error) {
      return '';
    }
  }

  public getFileShema(
    min = 0,
    max = 1,
    isImg = true,
    types = consts.files.imgTypes,
    size = consts.files.imgSize
  ) {
    const SUPPORTED_FORMATS = types
      .split(/\.|\,\./)
      .map((t) => `${isImg ? 'image' : 'video'}/${t}`);
    const base = Yup.array()
      .min(min, `At least ${min} image is required`)
      .max(max, `You can upload up to ${max} images`)
      .of(
        Yup.mixed<IFile>()
          .required('A file is required')
          .test(
            'fileSize',
            `A file should be less than ${(size / (1024 * 1024)).toFixed(0)}MB`,
            (value) => value.file.size <= size
          )
          .test('fileFormat', 'Unsupported file format', (value) => {
            return value && SUPPORTED_FORMATS.includes(value.file.type);
          })
      );

    return min === 0 ? base : base.required('At least one file is required');
  }
}
const helpers = new Helpers();
export default helpers;
