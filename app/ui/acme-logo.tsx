
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
                              src={"/Aldea Global.svg" }
                              
                              width={204}
                              height={94}
                              alt={'profile picture' }
                            />
      
    </div>
  );
}
