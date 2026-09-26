import imgb71d1ca8810f from '@/assets/b71d1ca8810f.webp';

export default function PhotoMainSection() {
  return (
    <>
      <div className="relative rounded-[24px] size-full overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgb71d1ca8810f} />
          <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[24px]" />
        </div>
      </div>
    </>
  );
}
