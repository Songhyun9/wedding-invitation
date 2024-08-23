import React from 'react';
import { Bus, Train, Car, ParkingSquare } from 'lucide-react';

export const TransportationInfo: React.FC = () => {
  return (
    <div className="px-10 pb-4 font_gowun_dodum">
      <Section icon={<Bus size={24} />} title="버스">
        <hr className="border-t border-dashed mb-2" />
        <SubSection title="장안타운입구.한신빌라 정류장 하차 후 도보 10분 거리">
          <BusLine color="bg-red-500" name="광역버스" numbers={['1500-2', '1151', '1150']} />
          <BusLine color="bg-green-500" name="지선버스" numbers={['17', '33', '119', '521']} />
          <BusLine color="bg-yellow-500" name="마을버스" numbers={['3', '602-1A']} />
        </SubSection>
      </Section>

      <Section icon={<Train size={24} />} title="지하철">
        <hr className="border-t border-dashed mb-2" />
        <SubwayLine
          color="bg-yellow-500"
          name="수인분당선 서현역"
          description="하차 후 버스 또는 택시 이용 15분 거리"
        />
      </Section>

      <Section icon={<ParkingSquare size={24} />} title="주차">
        <hr className="border-t border-dashed mb-2" />
        <div className="space-y-2">
          <p>• 주차장 교회 지하, 지상주차장 </p>
          <p>• 율동공원 B주차장(도보 7분거리)</p>
        </div>
      </Section>
    </div>
  );
};

const Section: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({
  icon,
  title,
  children,
}) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <div className="p-1.5 rounded-full border border-[#eeeeee] bg-white">{icon}</div>
      <h2 className="text-xl font-bold ml-2">{title}</h2>
    </div>
    <div className="">{children}</div>
  </div>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="">{children}</div>
  </div>
);

const BusLine: React.FC<{ color: string; name: string; numbers: string[] }> = ({ color, name, numbers }) => (
  <div className="flex items-center mb-1">
    <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
    <span>
      {name}: {numbers.join(', ')}
    </span>
  </div>
);

const SubwayLine: React.FC<{ color: string; name: string; description: string }> = ({ color, name, description }) => (
  <div className="flex items-center mb-1">
    <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
    <span>
      {name} {description}
    </span>
  </div>
);
