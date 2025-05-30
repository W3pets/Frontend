'use client';

import { use } from 'react';
import parentStyles from '@/components/pages/sellers/dashboard/styles.module.scss';
import styles from '@/components/pages/sellers/dashboard/product_subpages_styles.module.scss';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';
import Card from '@/components/shared/Cards/Card';
import Button from '@/components/shared/Button/Button';
import { CiEdit } from 'react-icons/ci';
import { SellerDashboardPaths } from '@/model/types/seller';
import { productsSeed } from '../../page';
import { Paths } from '@/model/types/global';
import Image from 'next/image';
import { utils } from '@/lib/utils/base';
import { IoLocationOutline } from 'react-icons/io5';
import { FiEye } from 'react-icons/fi';

function page(props: { params: Promise<{ productId: string }> }) {
  const params = use(props.params);
  const router = useRouter();

  const { productId } = params;

  const data =
    productsSeed.find((p) => p.productId == Number(productId)) ||
    productsSeed[0];

  return (
    <div className={`${styles.product_page} ${parentStyles.page}`}>
      <div className={styles.back} onClick={() => router.back()}>
        <div className={styles.click}>
          <IoArrowBack />
          <span>Back</span>
        </div>
        <Button
          link={`${Paths.Sellers}${SellerDashboardPaths.Products}/${data.productId}`}
          className={styles.btn}
          isOutline
        >
          <CiEdit />
          <span>Edit Product </span>
        </Button>
      </div>

      <Card className={styles.preview_card} maxWidth={1000}>
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={1000}
          height={3000}
          className={styles.video}
        />
        <div
          className={`${styles.status} ${data.isSoldOut ? styles.sold_out : data.isSold ? styles.sold : styles.active}`}
        >
          {data.isSoldOut ? 'Sold Out' : data.isSold ? 'Sold' : 'Active'}
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>{data.title}</h3>
            <div className={styles.views}>
              <FiEye />
              {data.views}
              <span>views</span>
            </div>
          </div>
          <p className={styles.price}>{utils.getReaablePrice(data.price)}</p>
          <div className={styles.span_info}>
            <div className={styles.sec}>
              <div className={styles.sec_title}>Category</div>
              <div className={styles.sec_text}>{data.category}</div>
            </div>

            <div className={styles.sec}>
              <div className={styles.sec_title}>Gender</div>
              <div className={styles.sec_text}>{data.gender}</div>
            </div>
            <div className={styles.sec}>
              <div className={styles.sec_title}>Age</div>
              <div className={styles.sec_text}>{data.age}</div>
            </div>
            <div className={styles.sec}>
              <div className={styles.sec_title}>Breed</div>
              <div className={styles.sec_text}>{data.breed}</div>
            </div>
          </div>
          <div className={styles.main_sec}>
            <div className={styles.sec_title}>Description </div>
            <div className={styles.sec_text}>
              Beautiful Brahama Chicken for sale. This breed is known for its
              large size and gentle disposition. The chicken is healthy,
              vaccinated, and ready for a new home.
            </div>
          </div>

          <div className={styles.main_sec}>
            <div className={styles.sec_title}>Location</div>
            <div className={styles.sec_text}>
              <IoLocationOutline fontSize={18} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default page;
