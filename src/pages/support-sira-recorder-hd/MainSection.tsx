import { SiraCategoryMain } from '@/lib/downloads-sira';
import type { SiraRow } from '@/lib/downloads-tables';

const product = { product: 'UNC-BE21CE-VMD', note: '2MP Full HD WDR AI Box Camera' };

const rows: SiraRow[] = [
  { certificate: 'SIRA/2021/7/00721', ...product },
  { certificate: 'SIRA/2021/7/00721', ...product },
  { certificate: 'SIRA/2021/7/00721', ...product },
  { certificate: 'SIRA/2020/7/00478', ...product },
  { certificate: 'SIRA/2020/7/00478', ...product },
];

export default function MainSection() {
  return <SiraCategoryMain active="/support-sira-recorder-hd" rows={rows} />;
}
