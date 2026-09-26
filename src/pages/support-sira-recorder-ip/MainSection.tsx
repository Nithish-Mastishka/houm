import { SiraCategoryMain } from '@/lib/downloads-sira';
import type { SiraRow } from '@/lib/downloads-tables';

const product = { product: 'GTC-D24FL2-V2', note: '2.4 MP Full HD IR Dome Camera - 20 Mtr' };

const rows: SiraRow[] = [
  { certificate: 'SIRA/2021/7/00721', ...product },
  { certificate: 'SIRA/2021/7/00721', ...product },
  { certificate: 'SIRA/2021/7/00721', ...product },
  { certificate: 'SIRA/2020/7/00478', ...product },
  { certificate: 'SIRA/2020/7/00478', ...product },
];

export default function MainSection() {
  return <SiraCategoryMain active="/support-sira-recorder-ip" rows={rows} />;
}
