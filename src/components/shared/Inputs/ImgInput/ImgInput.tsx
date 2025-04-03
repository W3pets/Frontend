import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { FiUpload } from 'react-icons/fi';
import consts from '@/model/consts';
import { IFile } from '@/model/types/global';
import helpers from '@/helpers';
import { IoMdClose } from 'react-icons/io';
import uniqid from 'uniqid';

type Props = {
  name?: string;
  error?: string;
  label?: string;
  min?: number;
  placeHolder?: string;
  defaultFiles?: IFile[];
  onChange: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<any>;
  max?: number;
};

function ImgInput({
  name = 'images',
  label,
  error,
  min = 0,
  max = 1,
  placeHolder = '',
  defaultFiles = [],
  onChange,
}: Props) {
  const types = consts.files.types.split(/\./).slice(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState<IFile[]>([]);

  useLayoutEffect(() => {
    setInputs(defaultFiles);
  }, []);

  const removeFromInputs = async (index: number) => {
    const currentInputs = inputs.filter((_, i) => i !== index);
    setInputs(currentInputs);
    const ref = inputRef.current as HTMLInputElement;
    ref.files = null;
    ref.value = '';
    onChange(name, currentInputs, true);
  };

  const handleFileChange = async (value: FileList) => {
    const targetFiles = [...inputs];
    for (let index = 0; index < value.length; index++) {
      const file = value.item(index) as File;
      const src = await helpers.getBase64String(file);
      targetFiles.push({ file, src, baseUrl: '' });
    }

    setInputs(targetFiles);
    if (onChange) onChange(name, targetFiles, true);
  };

  return (
    <div className={styles.files}>
      {!!label && (
        <label>
          {`${label} `} {!!min ? <span>*</span> : ''}
        </label>
      )}
      <div className={styles.main_area}>
        <FiUpload />
        <div className={styles.info}>
          Drag and Drop your files here, or <span>Browse</span>
        </div>
        <div className={styles.info}>
          {!!placeHolder && <span>{placeHolder}</span>}
          {!placeHolder &&
            types.map((t, i, arr) => (
              <div key={uniqid()}>
                {i == arr.length - 1 ? ' or ' : ''}
                <span>{t}</span>
              </div>
            ))}
          <div>format</div>
        </div>
        <input
          ref={inputRef}
          type="file"
          title=" "
          className={styles.input_box}
          multiple={min > 0}
          required
          accept={consts.files.types}
          onChange={(e) => {
            handleFileChange(e.target.files as FileList);
          }}
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.uploaded}>
        {/* // multiple added inputs */}
        {inputs.map((input, index) => {
          return (
            <div className={styles.added_input} key={uniqid()}>
              <IoMdClose onClick={() => removeFromInputs(index)} />
              <img
                className={styles.img}
                src={`${(input as IFile).baseUrl}${(input as IFile).src}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImgInput;
