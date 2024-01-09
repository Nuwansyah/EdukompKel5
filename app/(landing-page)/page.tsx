
import Introduction from "./_component/introduction/page";
import Mentor from "./_component/mentor/page";
import OfflineTeaching from "./_component/offlineteaching/page";

export default function Home() {
  return (
    <div>
      <div className="bg-sky-100">
        <Introduction/>
      </div>
      <div className="bg-sky-200">
        <Mentor/>
      </div>
      <div className="bg-white">
        <OfflineTeaching/>
      </div>
      
    </div>
  )
}
